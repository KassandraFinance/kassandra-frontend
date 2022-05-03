import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { useSelector, RootStateOrAny } from 'react-redux'

import { BNtoDecimal } from '../../../utils/numerals'

import {
  Staking,
  LPKacyAvax,
  LPDaiAvax
} from '../../../constants/tokenAddresses'
import usePriceLP from '../../../hooks/usePriceLP'
import useStakingContract from '../../../hooks/useStakingContract'
import useERC20Contract from '../../../hooks/useERC20Contract'

import iconBar from '../../../../public/assets/iconbar.svg'

import { registerToken } from '../../../utils/registerToken'

import Button from '../../../components/Button'
import ModalWalletConnect from '../../../components/Modals/ModalWalletConnect'

import * as S from './styles'

interface IMyAssetProps {
  crpPoolAddress: string;
  price: string;
  symbol: string;
  icon: any;
  pid: number;
}

export interface IPriceLPToken {
  priceLP: Big;
  kacy: Big;
  fund: Big;
}

const MyAsset = ({
  symbol,
  icon,
  crpPoolAddress,
  price,
  pid
}: IMyAssetProps) => {
  const router = useRouter()
  const { trackEvent } = useMatomo()

  const { userInfo, poolInfo } = useStakingContract(Staking)
  const tokenWallet = useERC20Contract(crpPoolAddress)
  const lpToken = useERC20Contract(LPKacyAvax)
  const { viewgetReserves } = usePriceLP()
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [stakedToken, setStakedToken] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [decimals, setDecimals] = React.useState<string>('18')
  const [priceLPToken, setPriceLPToken] = React.useState<IPriceLPToken>({
    priceLP: Big(-1),
    kacy: Big(-1),
    fund: Big(-1)
  })
  const [apr, serApr] = React.useState<BigNumber>(new BigNumber(0))

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'stake-details',
      action,
      name
    })
  }

  async function getStakedToken() {
    const staked = await userInfo(pid, userWalletAddress)
    setStakedToken(staked.amount)
  }

  async function getBalance() {
    const balanceToken = await tokenWallet.balance(userWalletAddress)

    setBalance(balanceToken)
  }

  async function handleLPtoUSD() {
    const reservesKacyAvax = await viewgetReserves(LPKacyAvax)
    const reservesDaiAvax = await viewgetReserves(LPDaiAvax)

    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0
    let DaiReserve = reservesDaiAvax._reserve1
    let AvaxDaiReserve = reservesDaiAvax._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
      DaiReserve = reservesDaiAvax._reserve0
      AvaxDaiReserve = reservesDaiAvax._reserve1
    }

    const avaxInDollar = Big(DaiReserve).div(Big(AvaxDaiReserve))
    const kacyInDollar = avaxInDollar.mul(Big(avaxKacyReserve).div(kacyReserve))

    const allAVAXDollar = Big(avaxKacyReserve).mul(avaxInDollar)
    const supplyLPToken = await lpToken.totalSupply()

    if (supplyLPToken.toString() !== '0') {
      const priceLP = allAVAXDollar.mul(2).div(Big(supplyLPToken.toString()))
      setPriceLPToken(prevState => ({
        ...prevState,
        priceLP
      }))
    }

    setPriceLPToken(prevState => ({
      ...prevState,
      fund: Big(price || -1)
    }))

    setPriceLPToken(prevState => ({
      ...prevState,
      kacy: kacyInDollar
    }))
  }

  console.log(apr)

  async function getApr() {
    const poolInfoResponse = await poolInfo(0)

    if (!poolInfoResponse.withdrawDelay) {
      return
    }
    //console.log(poolInfoResponse)

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )

    const aprResponse =
      poolInfoResponse.depositedAmount.toString() !== '0' &&
      priceLPToken.kacy.gt('-1') &&
      priceLPToken.fund.gt('-1')
        ? new BigNumber(
            Big(kacyRewards.toString())
              .mul('365')
              .mul('100')
              .mul(priceLPToken.kacy)
              .div(
                priceLPToken.fund.mul(
                  Big(poolInfoResponse.depositedAmount.toString())
                )
              )
              .toFixed(0)
          )
        : new BigNumber(-1)

    serApr(aprResponse)
  }

  React.useEffect(() => {
    if (userWalletAddress) {
      getBalance()

      getStakedToken()
    }
  }, [userWalletAddress])

  React.useEffect(() => {
    handleLPtoUSD()
  }, [])

  React.useEffect(() => {
    getApr()
  }, [priceLPToken])

  return (
    <S.MyAsset>
      <S.TitleWrapper>
        <S.Title>
          <Image src={iconBar} alt="" />
          <h2>My asset</h2>
        </S.Title>

        <S.AddToken
          type="button"
          onClick={() => {
            registerToken(
              crpPoolAddress,
              symbol.toLocaleUpperCase(),
              Number(decimals)
            )
            matomoEvent('click-add-metamask', `add-${symbol}`)
          }}
        >
          <Image src="/assets/metaMaskIcon.svg" alt="" width={14} height={14} />
          <span>Add to Metamask</span>
        </S.AddToken>
      </S.TitleWrapper>

      <S.Table>
        <S.THead>
          <S.Tr>
            <S.Th>Token Name</S.Th>
            <S.Th>Staked</S.Th>
            <S.Th>Balance</S.Th>
          </S.Tr>
        </S.THead>

        <S.TBody>
          <S.Tr>
            <S.Td>
              <S.TdWrapper>
                <Image src={icon} alt="" width={20} height={20} />
                <span>{symbol}</span>
              </S.TdWrapper>
            </S.Td>
            <S.Td>
              <S.TdWrapper>
                <span>
                  {userWalletAddress ? BNtoDecimal(stakedToken, 18) : '...'}{' '}
                  {symbol}
                </span>
                <S.Value>
                  $
                  {userWalletAddress
                    ? BNtoDecimal(
                        Big(stakedToken.toString())
                          .div(Big(10).pow(18))
                          .mul(price),
                        2
                      )
                    : '...'}
                </S.Value>
              </S.TdWrapper>
            </S.Td>
            <S.Td>
              <S.TdWrapper>
                <span>
                  {userWalletAddress ? BNtoDecimal(balance, 18) : '...'}{' '}
                  {symbol}
                </span>
                <S.Value>
                  $
                  {userWalletAddress
                    ? BNtoDecimal(
                        Big(balance.toString()).div(Big(10).pow(18)).mul(price),
                        2
                      )
                    : '...'}
                </S.Value>
              </S.TdWrapper>
            </S.Td>
          </S.Tr>
        </S.TBody>
      </S.Table>

      <Button
        backgroundSecondary
        text={
          userWalletAddress
            ? `Stake ${symbol} to earn ${BNtoDecimal(apr, 0)}% APR`
            : 'Connect Wallet'
        }
        fullWidth
        size="huge"
        onClick={
          userWalletAddress
            ? () => router.push('/farm#aHYPE', '', { scroll: false })
            : () => setIsModaWallet(true)
        }
      />

      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModaWallet} />}
    </S.MyAsset>
  )
}

export default MyAsset
