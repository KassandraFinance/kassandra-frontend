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
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletConnecting = ({
  provider,
  isConnected,
  setModalOpen
}: IWalletConnectingProps) => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

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
          <S.AddressWrapper>
            Address: {substr(userWalletAddress)}
          </S.AddressWrapper>

          <S.TextConnected>
            Your {providers[provider].name} wallet is connected
          </S.TextConnected>

          <S.ButtonWrapper>
            <Button
              text="Proceed"
              backgroundSecondary
              fullWidth
              onClick={() => setModalOpen(false)}
            />
          </S.ButtonWrapper>
        </>
      )}
    </>
  )
}

export default WalletConnecting
