import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import useConnect from '../../hooks/useConnect'
import useERC20Contract from '../../hooks/useERC20Contract'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import ModalStaking from '../ModalStaking'

import { 
  BorderGradient, 
  InterBackground, 
  IntroStaking,
  InfosStaking,
  APR,
  Percentage,
  Info,
  KacyStaked,
  ButtonContainer,
  ButtonWallet,
  ButtonDetails
} from './styles'

interface IStakingProps {
  days: string
  percentage: string
}

const VotingPower = ({ days, percentage }: IStakingProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const [isApproveKacyStaking, setIsApproveKacyStaking] = React.useState(false)
  
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { getAllowance, approve } = useERC20Contract()
  const { connect, isLogged } = useConnect()


  async function handleApproveKacy() {
    if (isApproveKacyStaking) {
      return
    }
    const res = await approve(Staking, Kacy)
    setIsApproveKacyStaking(res)
  }

  React.useEffect(() => {
    getAllowance(Staking, Kacy)
    .then((response: boolean) => setIsApproveKacyStaking(response))
  }, [isLogged, userWalletAddress])

  return (
    <>
      <BorderGradient>
        <InterBackground>
          <img src="assets/logo-staking.svg" alt="" />
          <IntroStaking>
            <APR>APR</APR>
            <Percentage>{percentage}%</Percentage>
          </IntroStaking>
        </InterBackground>
        <KacyStaked>
            <p>1 voting power per $KACY staked</p>
          </KacyStaked>
        <InfosStaking>
          <Info>
            <p className="total-staking">Total staked</p>
            <p className="total-staking">$134,124</p>
          </Info>
          <Info>
            <span>Your stake</span>
            <span>500 KACY</span>
          </Info>
          <Info>
            <span>Your voting power</span>
            <span>37</span>
          </Info>
          <Info>
            <span>Start date</span>
            <span>02/02/2021</span>
          </Info>
          <Info>
            <span>End date</span>
            <span>02/02/2023</span>
          </Info>
          <Info>
            <span>KACY rewards</span>
            <span>12/day</span>
          </Info>
          <Info>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: '16px 0 24px' }}>
              Unstake delay
            </p>
            <img
                src="assets/info-icon.svg" 
                alt="" 
                className="img-info"
                onMouseOver={() => alert('tooltip')}
                width="20"
                style={{ marginBottom: '4px', marginLeft: '8px' }}
              />
            </div>
            <p style={{ margin: '16px 0 24px'}}>{days} Days</p>
          </Info>
          <ButtonContainer>
            {isLogged || userWalletAddress !== '' ?
              isApproveKacyStaking ? 
              <ButtonWallet type="button" onClick={() => setModalOpen(true)}>Stake</ButtonWallet>
              :
              <ButtonWallet type="button" onClick={handleApproveKacy}>Approve</ButtonWallet>
            :
            <ButtonWallet type="button" onClick={connect}>Connect Wallet</ButtonWallet>
            }
            <ButtonDetails type="button" onClick={() => alert('Details')}>Details <img src="assets/arrow-down-cyan.svg" alt=""/></ButtonDetails>
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