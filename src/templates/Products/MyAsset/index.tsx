import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { Staking, LPDaiAvax } from '../../../constants/tokenAddresses'

import usePriceLP from '../../../hooks/usePriceLP'
import useERC20Contract from '../../../hooks/useERC20Contract'
import useStakingContract from '../../../hooks/useStakingContract'

import iconBar from '../../../../public/assets/iconGradient/product-bar.svg'

import { BNtoDecimal } from '../../../utils/numerals'
import { registerToken } from '../../../utils/registerToken'

import { useAppSelector } from '../../../store/hooks'

import Button from '../../../components/Button'
import ModalWalletConnect from '../../../components/Modals/ModalWalletConnect'

import * as S from './styles'
import { LP_KACY_AVAX_PNG } from '../../../constants/pools'

interface IMyAssetProps {
  crpPoolAddress: string;
  price: string;
  symbol: string;
  icon: any;
  pid: number;
  decimals: number;
}

export interface IPriceLPToken {
  kacy: Big;
  fund: Big;
}

const MyAsset = ({
  symbol,
  icon,
  crpPoolAddress,
  price,
  pid,
  decimals
}: IMyAssetProps) => {
  const router = useRouter()
  const { trackEvent } = useMatomo()

  const { getPriceKacyAndLP } = usePriceLP()
  const tokenWallet = useERC20Contract(crpPoolAddress)
  const stakingContract = useStakingContract(Staking)

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [stakedToken, setStakedToken] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [priceToken, setPriceToken] = React.useState<IPriceLPToken>({
    kacy: Big(-1),
    fund: Big(-1)
  })
  const [apr, setApr] = React.useState<BigNumber>(new BigNumber(0))

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'stake-details',
      action,
      name
    })
  }

  async function getStakedToken() {
    const staked = await stakingContract.userInfo(pid, userWalletAddress)
    setStakedToken(staked.amount)
  }

  async function getBalance() {
    const balanceToken = await tokenWallet.balance(userWalletAddress)

    setBalance(balanceToken)
  }

  async function handleLPtoUSD() {
    const { kacyPriceInDollar } = await getPriceKacyAndLP(
      LP_KACY_AVAX_PNG,
      LPDaiAvax,
      false
    )

    setPriceToken(prevState => ({
      ...prevState,
      fund: Big(price || -1)
    }))

    setPriceToken(prevState => ({
      ...prevState,
      kacy: kacyPriceInDollar
    }))
  }

  async function getApr() {
    const poolInfoResponse = await stakingContract.poolInfo(pid)
    if (!poolInfoResponse.withdrawDelay) {
      return
    }

    const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
      new BigNumber(86400)
    )

    if (priceToken.fund.gt('0')) {
      const aprResponse =
        poolInfoResponse.depositedAmount.toString() !== '0' &&
        priceToken.kacy.gt('-1') &&
        priceToken.fund.gt('-1')
          ? new BigNumber(
              Big(kacyRewards.toString())
                .mul('365')
                .mul('100')
                .mul(priceToken.kacy)
                .div(
                  priceToken.fund.mul(
                    Big(poolInfoResponse.depositedAmount.toString())
                  )
                )
                .toFixed(0)
            )
          : new BigNumber(-1)

      setApr(aprResponse)
    }
  }

  React.useEffect(() => {
    if (userWalletAddress !== '') {
      getBalance()

      getStakedToken()
    }
  }, [userWalletAddress])

  React.useEffect(() => {
    if (userWalletAddress !== '') {
      handleLPtoUSD()
    }
  }, [price])

  React.useEffect(() => {
    if (userWalletAddress !== '') {
      getApr()
    }
  }, [priceToken])

  return (
    <S.MyAsset>
      <S.TitleWrapper>
        <S.Title>
          <Image src={iconBar} alt="" width={18} height={18} />
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
          <Image
            src="/assets/logos/metamask.svg"
            alt="metamask logo"
            width={14}
            height={14}
          />
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
      <S.ButtonWrapper>
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
              ? () => router.push('/farm')
              : () => setIsModaWallet(true)
          }
        />
      </S.ButtonWrapper>
      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModaWallet} />}
    </S.MyAsset>
  )
}

export default MyAsset
