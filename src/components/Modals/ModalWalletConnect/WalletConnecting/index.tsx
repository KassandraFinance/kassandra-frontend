import Image from 'next/image'
import React from 'react'

import { useAppSelector } from '../../../../store/hooks'
import substr from '../../../../utils/substr'

import Button from '../../../Button'

import metamaskIcon from '../../../../../public/assets/logos/metamask.svg'
import walletConnectIcon from '../../../../../public/assets/logos/connect-wallet.svg'
import spinerIcon from '../../../../../public/assets/iconGradient/spinner.png'

import * as S from './styles'

type ProviderType = {
  [key: string]: {
    icon: string,
    name: string
  }
}

interface IWalletConnectingProps {
  provider: string;
  isConnected: boolean;
  handleCloseModal(): void;
}

const WalletConnecting = ({
  provider,
  isConnected,
  handleCloseModal
}: IWalletConnectingProps) => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const [nickname, setNickname] = React.useState()

  const providers: ProviderType = {
    metamask: {
      icon: metamaskIcon,
      name: 'Metamask'
    },
    walletConnect: {
      icon: walletConnectIcon,
      name: 'walletConnect'
    }
  }

  React.useEffect(() => {
    if (!userWalletAddress) return

    fetch(`/api/profile/${userWalletAddress}`)
      .then(res => res.json())
      .then(data => {
        const { nickname } = data
        setNickname(nickname)
      })
  }, [userWalletAddress])

  return (
    <>
      <S.TitleWrapper>
        <Image src={providers[provider].icon} width={40} height={36} />
        {providers[provider].name}
      </S.TitleWrapper>

      {!isConnected ? (
        <>
          <S.LoadingWrapper>
            <S.Spinner>
              <Image src={spinerIcon} />
            </S.Spinner>
            Initializing wallet connection...
          </S.LoadingWrapper>

          <S.Text>
            The MetaMask extension will open in an external window.
          </S.Text>
        </>
      ) : (
        <>
          {nickname && (
            <S.AddressWrapper>
              Username: <span>{nickname}</span>
            </S.AddressWrapper>
          )}

          <S.AddressWrapper>
            Address: <span>{substr(userWalletAddress)}</span>
          </S.AddressWrapper>

          <S.TextConnected>
            Your {providers[provider].name} wallet is connected
          </S.TextConnected>

          <S.ButtonWrapper>
            <Button
              text="Proceed"
              backgroundSecondary
              fullWidth
              onClick={handleCloseModal}
            />
          </S.ButtonWrapper>
        </>
      )}
    </>
  )
}

export default WalletConnecting
