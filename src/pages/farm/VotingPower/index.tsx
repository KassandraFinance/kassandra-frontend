import React from 'react'
import ModalStaking from '../../../components/ModalStaking'

import { 
  BorderGradient, 
  InterBackground, 
  IntroStaking,
  InfosStaking,
  Info,
  ButtonContainer,
  ButtonWallet,
  ButtonDetails
} from './styles'

interface IStakingProps {
  days: string
}

const VotingPower = ({ days }: IStakingProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)

  return (
    <>
      <BorderGradient>
        <InterBackground>
          <img src="assets/logo-staking.svg" alt="" />
          <IntroStaking>
            <p>Earn</p>
            <p>$KACY</p>
            <p>1 voting power</p>
            <p>per $KACY staked</p>
          </IntroStaking>
        </InterBackground>
        <InfosStaking>
          <Info>
            <p>Withdraw delay</p>
            <p>{days} Days</p>
          </Info>
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
            <span>Your voting power</span>
            <span>$37</span>
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
            <p style={{ position: 'relative'}}>APY</p>
            <p>210%</p>
          </Info>
          <ButtonContainer>
            <ButtonWallet type="button" onClick={() => setModalOpen(true)}>Connet Wallet</ButtonWallet>
            <ButtonDetails type="button" onClick={() => alert('Details')}>Details <img src="assets/arrow-down-cyan.svg" alt=""/></ButtonDetails>
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
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        otherStakingPools={false}
      />
    </>
  )
}

export default VotingPower