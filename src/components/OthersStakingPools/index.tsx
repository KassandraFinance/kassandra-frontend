import React from 'react'

import web3 from '../../utils/web3'
import ModalStaking from '../ModalStaking'
import ModalWalletConnect from '../ModalWalletConnect'

import {
  BorderGradient,
  InterBackground,
  IntroStaking,
  Info,
  InfosStaking,
  ButtonContainer,
  ButtonWallet,
  ButtonDetails
} from './styles'

interface IOthersStakingPoolsProps {
  img: string;
  connect: () => void;
}

const OthersStakingPools = ({ img, connect }: IOthersStakingPoolsProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)

  return (
    <>
      <BorderGradient>
        <InterBackground>
          <img src={`assets/${img}.svg`} alt="" />
          <IntroStaking>
            <p>Earn</p>
            <p>$KACY</p>
            <p>1 voting power</p>
            <p>per $KACY staked</p>
          </IntroStaking>
        </InterBackground>
        <InfosStaking>
          <Info>
            <span>Start Date</span>
            <span>02/02/2021</span>
          </Info>
          <Info>
            <span>End Date</span>
            <span>02/02/2023</span>
          </Info>
          <Info>
            <span>Your stake</span>
            <span>$56</span>
          </Info>
          <Info>
            <span>KACY reward</span>
            <span>$12</span>
          </Info>
          <Info>
            <p className="total-staking">Total staking</p>
            <p className="total-staking">$134,124</p>
          </Info>
          <Info>
            <p style={{ position: 'relative' }}>APY</p>
            <p>210%</p>
          </Info>
          <ButtonContainer>
            <ButtonWallet type="button" onClick={() => setIsModaWallet(true)}>
              Connet Wallet
            </ButtonWallet>
            <ButtonDetails type="button" onClick={() => alert('Details')}>
              Details <img src="assets/arrow-down-cyan.svg" alt="" />
            </ButtonDetails>
            <img
              src="assets/info-icon.svg"
              alt=""
              className="img-info"
              onMouseOver={() => alert('tooltip')}
            />
          </ButtonContainer>
        </InfosStaking>
      </BorderGradient>
      <ModalStaking
        pid={0}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        otherStakingPools
      />
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
        connect={connect}
        otherStakingPools
      />
    </>
  )
}

export default OthersStakingPools
