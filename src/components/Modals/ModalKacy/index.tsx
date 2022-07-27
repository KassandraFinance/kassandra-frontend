import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import BigNumber from 'bn.js'

import { useAppSelector } from '../../../store/hooks'
import { ERC20 } from '../../../hooks/useERC20Contract'
import { poolsKacy } from '../../../constants/pools'
import { Staking, chains } from '../../../constants/tokenAddresses'
import useStakingContract from '../../../hooks/useStakingContract'

import { BNtoDecimal } from '../../../utils/numerals'
import { abbreviateNumber } from '../../../utils/abbreviateNumber'

import Kacy from './Kacy'
import ModalBuyKacy from '../../../components/Modals/ModalBuyKacy'
import Button from '../../Button'

import kacyIcon from '../../../../public/assets/logos/kacy-96.svg'

import * as S from './styles'

const poolPlatform =
  process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

const chain =
  process.env.NEXT_PUBLIC_MASTER === '1' ? chains.avalanche : chains.fuji

interface IKacyMarketDataProps {
  price: number;
  marketCap: number;
  supply: number;
  kacyPercentage: number;
}

const ModalKacy = () => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const ERC20Contract = ERC20(poolsKacy[0].address)
  const { userInfo, earned } = useStakingContract(Staking)
  const chainId = useAppSelector(state => state.chainId)

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

    if (Number(chainId) !== chain.chainId) {
      return
    }

    async function getKacyBalanceInWallet() {
      const balanceToken = await ERC20Contract.balance(userWalletAddress)
      setKacyWallet(balanceToken)
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

    getKacyBalanceInWallet()
    kacyTotalInPool()
    kacyEarned()
  }, [userWalletAddress, chainId])

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
            userWalletAddress && Number(chainId) === chain.chainId
              ? `${abbreviateNumber(BNtoDecimal(kacyTotal, 18, 2))} KACY`
              : 'KACY'
          }
          icon={<Image src={kacyIcon} width={13.86} height={11.86} />}
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
