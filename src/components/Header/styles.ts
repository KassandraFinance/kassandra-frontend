import styled from 'styled-components'

export const HeaderContainer = styled.header`
  color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 32px;

  @media (min-width: 1600px) {
    max-width: 1520px;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
    padding: 32px 16px;
  }

  .logo-header {
    @media (max-width: 600px) {
      display: none;
    }
  }
  .logo-64 {
    width: 50px;
    @media (min-width: 601px) {
      display: none;
    }
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    display: none;
  }
  a {
    color: #fff;
    font-size: 16px;
    text-decoration: none;

    margin: 0 16px;
  }
`

export const ButtonConnectWallet = styled.button`
  background-color: transparent;
  border: 1px solid #26DBDB;
  border-radius: 8px;
  color:  #26DBDB;
  font-size: 16px;
  width: 186px;
  height: 48px;

  cursor: pointer;
  &:hover {
    background-color:  #26DBDB;
    color: #211426;
  }
`

export const LinkInstallMetaMask = styled.a`
  background-color: transparent;
  border: 1px solid #26DBDB;
  border-radius: 8px;
  color:  #26DBDB !important;
  font-size: 16px;
  text-transform: none;
  text-align: center;

  width: 186px;
  height: 48px;
  padding: 12px 0;
  cursor: pointer;
  &:hover {
    background-color:  #26DBDB;
    color: #211426 !important;
  }
`

export const ButtonDisabled = styled.button`
  border: none;
  background-color: transparent;
  color: #666;
  font-size: 16px;
  text-decoration: none;

  margin: 0 16px;
  cursor: pointer;
  position: relative;
  outline: none;
  &:hover {
    &::after {
      content: 'Coming soon...';
      position: absolute;
      background-color: #eee;
      color: #6C3167;
      margin-top: -36px;
      margin-left: -140px;

      width: 140px;
      padding: 4px;
      border-radius: 4px;
      box-shadow:
        inset 0px 48.9702px 70.3162px -.1px rgba(255, 255, 255, 0.7),
        inset 0px 8.78952px 13.8121px -.1px rgba(255, 255, 255, 0.5),
        inset 0px -102.963px 85.3839px -.1px rgba(96, 68, 145, 0.3),
        inset 0px 123.053px 125.565px -.5px rgba(202, 172, 255, 0.3), inset 0px 5.02258px 22.6016px rgba(154, 146, 210, 0.3),
        inset 0px 1.25565px 50.2258px rgba(227, 222, 255, 0.2);
    }
  }
`
