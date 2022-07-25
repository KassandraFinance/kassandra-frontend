import React from 'react'
import useSWR from 'swr'
import BigNumber from 'bn.js'

import { useAppSelector } from '../../../store/hooks'
import { ERC20 } from '../../../hooks/useERC20Contract'
import { poolsKacy } from '../../../constants/pools'
import { Staking } from '../../../constants/tokenAddresses'
import useStakingContract from '../../../hooks/useStakingContract'

import { BNtoDecimal } from '../../../utils/numerals'

import Kacy from './Kacy'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'

import * as S from './styles'
import Button from '../../Button'

const poolPlatform =
  process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

interface IKacyMarketDataProps {
  price: number;
  marketCap: number;
  supply: number;
  kacyPercentage: number;
}

// interface IModalKacyProps {}

const kacy = (
  <svg
    width="116"
    height="105"
    viewBox="0 0 116 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f)">
      <path
        d="M106 58.0246C106 72.3286 99.7397 85.1677 89.8325 93.9569L66.8017 73.7647H89.172C90.9812 73.7647 92.4744 72.2998 92.4744 70.4616C92.4744 68.652 91.0099 67.1585 89.172 67.1585H26.828C25.0189 67.1585 23.5256 68.6233 23.5256 70.4616C23.5256 72.2711 24.9901 73.7647 26.828 73.7647H51.9551L27.0864 94.7324C16.6336 85.9145 10 72.7307 10 57.9959C10 31.4847 31.4801 10 57.9856 10C84.4912 10.0287 106 31.5134 106 58.0246Z"
        stroke="url(#paint0_linear)"
        strokeWidth="3"
        strokeMiterlimit="10"
      />
    </g>
    <path
      d="M105 58.0241C105 72.0301 98.8702 84.6017 89.1693 93.2078L66.6183 73.4363H88.5226C90.2941 73.4363 91.7562 72.0019 91.7562 70.202C91.7562 68.4301 90.3222 66.9677 88.5226 66.9677H27.4774C25.706 66.9677 24.2438 68.402 24.2438 70.202C24.2438 71.9738 25.6778 73.4363 27.4774 73.4363H52.0811L27.7305 93.9671C17.4954 85.3329 11 72.4238 11 57.996C11 32.0371 32.0326 11 57.9859 11C83.9393 11.0281 105 32.0652 105 58.0241Z"
      stroke="url(#paint1_linear)"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <defs>
      <filter
        id="filter0_f"
        x="0.5"
        y="0.5"
        width="115"
        height="104.195"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="58.0751"
        y1="-29.2864"
        x2="58.0751"
        y2="124.404"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF00" />
        <stop offset="1" stopColor="#E843C4" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="58"
        y1="11"
        x2="58"
        y2="93.9671"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFBF00" />
        <stop offset="1" stopColor="#E843C4" />
      </linearGradient>
    </defs>
  </svg>
)

const ModalKacy = () => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const ERC20Contract = ERC20(poolsKacy[0].address)

  const { userInfo, earned } = useStakingContract(Staking)

  const [isModalKacy, setIsModalKacy] = React.useState(false)
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)
  const [kacyMarketData, setKacyMarketData] =
    React.useState<IKacyMarketDataProps>({
      price: 0,
      marketCap: 0,
      supply: 0,
      kacyPercentage: 0
    })
  const [kacyStaked, setKacyStaked] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [kacyUnclaimed, setKacyUnclaimed] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [kacyWallet, setKacyWallet] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [kacyTotal, setKacyTotal] = React.useState<BigNumber>(new BigNumber(0))

  const { data } = useSWR(URL_API[process.env.NEXT_PUBLIC_URL_API || 4])

  React.useEffect(() => {
    if (data) {
      setKacyMarketData({
        price: data.kacyPrice,
        marketCap: data.marketCap,
        supply: data.supply,
        kacyPercentage: data.kacyPercentage
      })
    }
  }, [poolPlatform, data])

  React.useEffect(() => {
    if (!userWalletAddress) {
      return
    }

    async function getKacyBalanceInWallet() {
      const balanceToken = await ERC20Contract.balance(userWalletAddress)
      setKacyWallet(balanceToken)
    }

    getKacyBalanceInWallet()
  }, [userWalletAddress])

  React.useEffect(() => {
    if (!userWalletAddress) {
      return
    }

    async function getTokenAmountInPool(pid: number) {
      const userInfoResponse = await userInfo(pid, userWalletAddress)

      return new BigNumber(userInfoResponse.amount)
    }

    const kacyTotalInPool = async () => {
      let count = new BigNumber(0)
      for (const kacy of poolsKacy) {
        const res = await getTokenAmountInPool(kacy.pid)

        count = count.add(res)
      }
      setKacyStaked(count)
    }

    kacyTotalInPool()
  }, [userWalletAddress])

  React.useEffect(() => {
    if (!userWalletAddress) {
      return
    }

    async function earnedKacy(pid: number) {
      const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
      return earnedResponse
    }

    const kacyEarned = async () => {
      let count = new BigNumber(0)
      for (const kacy of poolsKacy) {
        const res = await earnedKacy(kacy.pid)
        count = count.add(res)
      }
      setKacyUnclaimed(count)
    }

    kacyEarned()
  }, [userWalletAddress])

  React.useEffect(() => {
    if (!userWalletAddress) {
      return
    }
    let count = new BigNumber(0)

    count = count.add(kacyStaked).add(kacyUnclaimed).add(kacyWallet)
    setKacyTotal(count)
  }, [kacyStaked, kacyUnclaimed, kacyWallet])

  return (
    <>
      <S.KacyAmount onClick={() => setIsModalKacy(true)}>
        <Button
          className="kacyAmount"
          text={
            userWalletAddress ? `${BNtoDecimal(kacyTotal, 18, 2)} KACY` : 'KACY'
          }
          icon={kacy}
          backgroundBlack
        />
      </S.KacyAmount>

      {isModalKacy && (
        <Kacy
          price={kacyMarketData.price}
          supply={kacyMarketData.supply}
          kacyStaked={kacyStaked}
          kacyUnclaimed={kacyUnclaimed}
          kacyWallet={kacyWallet}
          kacyTotal={kacyTotal}
          setIsModalKacy={setIsModalKacy}
          setIsOpenModal={setIsOpenModal}
        />
      )}

      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </>
  )
}

export default ModalKacy
