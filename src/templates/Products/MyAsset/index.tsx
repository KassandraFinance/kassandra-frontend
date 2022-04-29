import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import BigNumber from 'bn.js'
import Big from 'big.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import { useSelector, RootStateOrAny } from 'react-redux'

import { BNtoDecimal } from '../../../utils/numerals'

import { Staking } from '../../../constants/tokenAddresses'
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

const MyAsset = ({
  symbol,
  icon,
  crpPoolAddress,
  price,
  pid
}: IMyAssetProps) => {
  const router = useRouter()
  const { trackEvent } = useMatomo()

  const { userInfo } = useStakingContract(Staking)
  const tokenWallet = useERC20Contract(crpPoolAddress)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [stakedToken, setStakedToken] = React.useState<BigNumber>(
    new BigNumber(0)
  )
  const [balance, setBalance] = React.useState<BigNumber>(new BigNumber(0))
  const [decimals, setDecimals] = React.useState<string>('18')

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

  React.useEffect(() => {
    if (userWalletAddress) {
      getBalance()

      getStakedToken()
    }
  }, [userWalletAddress])

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

      <S.LastInvestment>
        <span>Last investment price: </span>
        <span>${userWalletAddress ? '104.00' : '...'}</span>
      </S.LastInvestment>

      <Button
        backgroundSecondary
        text={
          userWalletAddress
            ? `Stake ${symbol} to earn XXX% APR`
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

      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModaWallet} />}
    </S.MyAsset>
  )
}

export default MyAsset
