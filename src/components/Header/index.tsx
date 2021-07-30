import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import Link from 'next/link'

import web3 from '../../utils/web3'

import DropdownProducts from '../DropdownProducts'

import useConnect from '../../hooks/useConnect'
import substr from '../../utils/substr'

import { 
  HeaderContainer, 
  Nav, 
  ButtonConnectWallet,
  LinkInstallMetaMask
} from './styles'

const Header = () => {    
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { connect, isLogged } = useConnect()

  return (
    <HeaderContainer>
      <Link href="/">
        <img src="assets/logo-header.svg" alt="" className="logo-header" />
      </Link>
      <Link href="/">
        <img src="assets/logo-64.svg" alt="" className="logo-64" />
      </Link>
      <Nav>
        <DropdownProducts />
        <Link href="/farm">Stake/Farm</Link>
        <Link href="/vote">Vote</Link>
        <Link href="/about">About</Link>
        {web3.currentProvider !== null ? 
          isLogged ?
            <ButtonConnectWallet 
              type="button"
              style={{ backgroundColor: '#26DBDB', color: '#211426' }}
            >
              {substr(userWalletAddress)}
            </ButtonConnectWallet>
            :
            <ButtonConnectWallet type="button" onClick={connect}>
              Connect Wallet
            </ButtonConnectWallet>
          :
          <LinkInstallMetaMask 
            href="https://metamask.io/download.html" 
            target="_blank"
            >
              Install MetaMask!
          </LinkInstallMetaMask>
        }
      </Nav>
    </HeaderContainer>
  )
}

export default Header
