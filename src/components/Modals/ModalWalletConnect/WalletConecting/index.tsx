import Image from 'next/image'
import React from 'react'

import Button from '../../../Button'

import metamaskIcon from '../../../../../public/assets/logos/metamask.svg'
import spinerIcon from '../../../../../public/assets/iconGradient/spinner.png'

import * as S from './styles'

// interface IWalletConectingProps {}

const WalletConecting = () => {
  const icon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1.00076C4.13401 1.00076 1 4.13477 1 8.00076C1 11.8668 4.13401 15.0008 8 15.0008C11.866 15.0008 15 11.8668 15 8.00076C15 4.13477 11.866 1.00076 8 1.00076Z"
        stroke="#F1F0F1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(31, 41, 55, 0.96)"
      />
      <path
        d="M8 5.20155L5.2 8.00155L8 10.8015"
        stroke="#F1F0F1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(31, 41, 55, 0.96)"
      />
      <path
        d="M10.8008 8.00076L5.20078 8.00076"
        stroke="#F1F0F1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(31, 41, 55, 0.96)"
      />
    </svg>
  )

  return (
    <>
      <S.TitleWrapper>
        <Image src={metamaskIcon} width={40} height={36} />
        Metamask
      </S.TitleWrapper>

      <S.LoadingWrapper>
        <S.Spinner>
          <Image src={spinerIcon} />
        </S.Spinner>
        Initializing wallet connection...
      </S.LoadingWrapper>

      <S.Text>The MetaMask extension will open in an external window.</S.Text>
    </>
  )
}

export default WalletConecting
