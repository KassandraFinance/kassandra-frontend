import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import { getDate } from '../../utils/date'

import web3 from '../../utils/web3'

import useERC20Contract from '../../hooks/useERC20Contract'
import useStakingContract from '../../hooks/useStakingContract'
import useCountDownDate from '../../hooks/useCountDownDate'

import { Kacy, Staking } from '../../constants/tokenAddresses'

import ModalStaking from '../ModalStaking'
import ModalUnstaking from '../ModalUnstaking'
import ModalRequestUnstake from '../ModalRequestUnstake'
import ModalCancelUnstake from '../ModalCancelUnstake'

import Tooltip from '../Tooltip'

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
  ButtonDetails,
  StakeContainer,
  ButtonWithdraw,
  ButtonRequestStake
} from './styles'
import { BNtoDecimal } from '../../utils/numerals'

interface IInfoStakeProps {
  yourStake: BigNumber
  withdrawable: boolean
}

interface IInfoStakeStaticProps {
  votingMultiplier: string
  startDate: string
  endDate: string
  kacyRewards: BigNumber
  withdrawDelay: any
}

interface IStakingProps {
  days: string
  percentage: string
  pid: number
  connect: () => void
}

const VotingPower = ({ percentage, pid, connect }: IStakingProps) => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const [isModalUnstaking, setIsModalUnstaking] = React.useState<boolean>(false)
  const [isModalCancelUnstake, setIsModalCancelUnstake] = React.useState<boolean>(false)
  const [isModalRequestUnstake, setIsModalRequestUnstake] = React.useState<boolean>(false)
  const [infoStake, setInfoStake] = React.useState<IInfoStakeProps>({
    yourStake: new BigNumber(0),
    withdrawable: false
  })
  const [infoStakeStatic, setInfoStakeStatic] = React.useState<IInfoStakeStaticProps>({
    votingMultiplier: '',
    startDate: '',
    endDate: '',
    kacyRewards: new BigNumber(0),
    withdrawDelay: ''
  })
  const [isApproveKacyStaking, setIsApproveKacyStaking] = React.useState<boolean>(false)
  const [unstake, setUnstake] = React.useState<boolean>(false)
  const [depositedAmount, setDepositedAmount] = React.useState<string>('')
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(new BigNumber(0))

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  
  const { getAllowance, approve } = useERC20Contract()
  const { 
    balanceOf, 
    earned,
    getReward, 
    withdrawable,
    poolInfo,
    unstaking,
    stakedUntil,
  } = useStakingContract()
  const { date, countDown } = useCountDownDate()

  async function handleApproveKacy() {
    if (isApproveKacyStaking) {
      return
    }
    const res = await approve(Staking, Kacy)
    setIsApproveKacyStaking(res)
  }

  async function getInfoStake() {
    if (!web3.currentProvider) {
      return
    }

    const poolInfoResponse = await poolInfo(pid)

    if (poolInfoResponse.withdrawDelay) {
      const startDate = getDate(poolInfoResponse.periodFinish - poolInfoResponse.rewardsDuration)
      const endDate = getDate(poolInfoResponse.periodFinish)
  
      const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(new BigNumber(86400))
      const withdrawDelay = Number(poolInfoResponse.withdrawDelay / 86400)
      
      setInfoStakeStatic({
        votingMultiplier: poolInfoResponse.votingMultiplier,
        startDate,
        endDate,
        kacyRewards,
        withdrawDelay: withdrawDelay > 0 ? withdrawDelay : 0
      })

      setInterval(async () => {
        setDepositedAmount(poolInfoResponse.depositedAmount)
      }, 6000)
      setDepositedAmount(poolInfoResponse.depositedAmount)
    }

    if (userWalletAddress) {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)
      const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
      
      const unix_timestamp = await stakedUntil(pid, userWalletAddress)
      const countDownDate = new Date(unix_timestamp * 1000).getTime();

      const unstake = await unstaking(pid, userWalletAddress)  

      countDown(countDownDate)

      setInfoStake({
        yourStake: balance,
        withdrawable: withdrawableResponse
      })
      setUnstake(unstake)
      setInterval(async () => {
        const earnedResponse: BigNumber = await earned(pid, userWalletAddress)
        setKacyEarned(earnedResponse)
      }, 10000)
      setKacyEarned(earnedResponse)
    }
  }

  }

  React.useEffect(() => {
    getAllowance(Staking, Kacy, userWalletAddress)
    .then((response: boolean) => setIsApproveKacyStaking(response))
  
    getInfoStake()
  }, [userWalletAddress])
  
  return (
    <>
      <div>
        <BorderGradient>
          <InterBackground>
            <img src="assets/logo-staking.svg" alt="" />
            <IntroStaking>
              <div style={{ display: 'flex', alignItems: 'flex-start', margin: '0 0 8px' }}>
                <Tooltip tooltipTop={true}>Annual Percentage Rate</Tooltip>
                <APR>
                  APR
                </APR>
              </div>
              <Percentage>{percentage}%</Percentage>
            </IntroStaking>
          </InterBackground>
          <KacyStaked>
              <p>{infoStakeStatic.votingMultiplier} voting power per $KACY staked</p>
            </KacyStaked>
          <InfosStaking>
            <Info>
              <p className="total-staking">Total staked</p>
              <p className="total-staking">${BNtoDecimal(new BigNumber(depositedAmount).mul(new BigNumber(3.5)), new BigNumber(18), 2)}</p>
            </Info>
            {userWalletAddress &&
              <>
                <Info>
                  <span>Your stake</span>
                  <span>{BNtoDecimal(infoStake.yourStake || new BigNumber(0), new BigNumber(18), 6)} KACY</span>
                </Info>
                <Info>
                  <span>Your voting power</span>
                  <span>
                    {BNtoDecimal(new BigNumber(infoStake.withdrawable || unstake ?
                      1 : infoStakeStatic.votingMultiplier).mul(infoStake.yourStake), new BigNumber(18), 6)}
                  </span>
                </Info>
              </>
            }
            <Info>
              <span>Start date</span>
              <span>{infoStakeStatic.startDate}</span>
            </Info>
            <Info>
              <span>End date</span>
              <span>{infoStakeStatic.endDate}</span>
            </Info>
            <Info>
              <span>KACY rewards</span>
              <span>{BNtoDecimal(infoStakeStatic.kacyRewards, new BigNumber(18), 6)}/day</span>
            </Info>
            <Info>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ margin: '16px 4px 24px 0' }}>
                  Withdraw delay
                </p>
                <Tooltip tooltipTop={false}>Time your asset will be locked before you can withdraw it.</Tooltip>
              </div>
              <p style={{ margin: '16px 0 24px'}}>{infoStakeStatic.withdrawDelay} Days</p>
            </Info>
            <ButtonContainer>
              {userWalletAddress ?
              <>
                {isApproveKacyStaking ?
                  <StakeContainer>
                    {unstake ? 
                      <ButtonRequestStake type="button" onClick={() => setIsModalCancelUnstake(true)}>Cancel unstake</ButtonRequestStake>
                      :
                      <ButtonWallet type="button" onClick={() => setModalOpen(true)}>Stake</ButtonWallet>
                    }        
                    {infoStake.yourStake.toString() !== "0" &&
                    <>
                      {infoStake.withdrawable || date === '' ? 
                        <ButtonWallet type="button" onClick={() => setIsModalUnstaking(true)}>Withdraw</ButtonWallet>
                        :
                        unstake ? 
                          <ButtonWithdraw type="button">Withdraw in date {date}</ButtonWithdraw>
                          :
                          <ButtonRequestStake 
                            type="button" 
                            onClick={() => setIsModalRequestUnstake(true)}
                          >
                            Request unstake
                          </ButtonRequestStake>
                      }           
                      <p>Unclaimed reward</p>
                      <h3>{BNtoDecimal(kacyEarned || new BigNumber(0), new BigNumber(18), 6)} KACY</h3>
                    </>
                    }
                  </StakeContainer>
                  :
                  <ButtonWallet type="button" onClick={handleApproveKacy}>Approve Contract</ButtonWallet>
                }
              </>
              :
              <ButtonWallet type="button" onClick={connect}>Connect Wallet</ButtonWallet>
              }
              <ButtonDetails type="button" onClick={() => alert('Details')}>Details <img src="assets/arrow-down-cyan.svg" alt=""/></ButtonDetails>
            </ButtonContainer>
          </InfosStaking>
        </BorderGradient>
      </div>
      <ModalStaking 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen} 
        otherStakingPools={false}
        pid={pid}
      />
      <ModalUnstaking
        modalOpen={isModalUnstaking} 
        setModalOpen={setIsModalUnstaking} 
        otherStakingPools={false}
        pid={pid}
      />
      <ModalCancelUnstake
        modalOpen={isModalCancelUnstake} 
        setModalOpen={setIsModalCancelUnstake} 
        pid={pid}
      />
      <ModalRequestUnstake 
        modalOpen={isModalRequestUnstake}
        setModalOpen={setIsModalRequestUnstake}
        pid={pid}
      />
    </>
  )
}

export default VotingPower