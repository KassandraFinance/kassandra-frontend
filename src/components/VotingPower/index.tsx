import React from 'react'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'
import { getDate } from '../../utils/date'
import { BNtoDecimal } from '../../utils/numerals'
import { CompleteCallback } from '../../utils/txWait'
import { confirmClaim } from '../../utils/confirmTransactions'

import { Staking } from '../../constants/tokenAddresses'

import { PoolInfo } from '../../hooks/useStakingContract'

import Details from '../Details'
import Tooltip from '../Tooltip'
import ModalStaking from '../ModalStaking'
import ModalUnstaking from '../ModalUnstaking'
import ModalRequestUnstake from '../ModalRequestUnstake'
import ModalCancelUnstake from '../ModalCancelUnstake'

import KacyEarned from './KacyEarned'
import WithdrawDate from './WithdrawDate'

import * as S from './styles'

interface IInfoStakeProps {
  yourStake: BigNumber;
  withdrawable: boolean;
}

interface IInfoStakeStaticProps {
  votingMultiplier: string;
  startDate: string;
  endDate: string;
  kacyRewards: BigNumber;
  yourDailyKacyReward: BigNumber;
  withdrawDelay: any;
}

interface IStakingProps {
  days: string;
  percentage: string;
  pid: number;
  connect: () => void;
  approve: (
    spenderAddress: string,
    userWalletAddress: string,
    onComplete?: CompleteCallback | undefined
  ) => Promise<boolean>;
  getAllowance: (
    addressCRP: string,
    tokenAddress: string,
    walletAddress?: string | undefined
  ) => Promise<boolean>;
  balanceOf: (pid: number, walletAddress: string) => Promise<BigNumber>;
  earned: (pid: number, walletAddress: string) => Promise<BigNumber>;
  getReward: (
    pid: number,
    onComplete?: CompleteCallback | undefined,
    message?: string | undefined
  ) => void;
  withdrawable: (pid: number, walletAddress: string) => Promise<boolean>;
  poolInfo: (pid: number) => Promise<PoolInfo>;
  unstaking: (pid: number, walletAddress: string) => Promise<boolean>;
  stakedUntil: (pid: number, walletAddress: string) => Promise<string>;
}

const VotingPower = ({
  percentage,
  pid,
  connect,
  approve,
  getAllowance,
  balanceOf,
  earned,
  getReward,
  withdrawable,
  poolInfo,
  unstaking,
  stakedUntil
}: IStakingProps) => {
  const [isModalStaking, setIsModalStaking] = React.useState<boolean>(false)
  const [isModalUnstaking, setIsModalUnstaking] = React.useState<boolean>(false)
  const [isModalCancelUnstake, setIsModalCancelUnstake] = React.useState<boolean>(false)
  const [isModalRequestUnstake, setIsModalRequestUnstake] = React.useState<boolean>(false)
  const [isDetails, setIsDetails] = React.useState<boolean>(false)

  const [isApproveKacyStaking, setIsApproveKacyStaking] = React.useState<boolean>(false)
  const [unstake, setUnstake] = React.useState<boolean>(false)
  const [infoStake, setInfoStake] = React.useState<IInfoStakeProps>({
    yourStake: new BigNumber(0),
    withdrawable: false
  })
  const [infoStakeStatic, setInfoStakeStatic] =
    React.useState<IInfoStakeStaticProps>({
      votingMultiplier: '',
      startDate: '',
      endDate: '',
      kacyRewards: new BigNumber(0),
    yourDailyKacyReward: new BigNumber(0),
      withdrawDelay: ''
    })

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  async function handleApproveKacy() {
    if (isApproveKacyStaking) {
      return
    }
    const res = await approve(Staking, userWalletAddress)
    setIsApproveKacyStaking(res)
  }

  const getInfoStake = React.useCallback(async () => {
    if (!web3.currentProvider) {
      return
    }

    const poolInfoResponse = await poolInfo(pid)

    if (poolInfoResponse.withdrawDelay) {
      const startDate = getDate(
        Number(poolInfoResponse.periodFinish) -
        Number(poolInfoResponse.rewardsDuration)
      )
      const endDate = getDate(Number(poolInfoResponse.periodFinish))

      const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(new BigNumber(86400))
      const withdrawDelay = Number(poolInfoResponse.withdrawDelay) / 86400
      
      const yourDailyKacyReward = infoStakeStatic.kacyRewards.mul(infoStake.yourStake ? infoStake.yourStake : new BigNumber(0)).div(new BigNumber(poolInfoResponse.depositedAmount))

      setInfoStakeStatic({
        votingMultiplier: poolInfoResponse.votingMultiplier,
        startDate,
        endDate,
        kacyRewards,
        yourDailyKacyReward,
        withdrawDelay: withdrawDelay > 0 ? withdrawDelay : 0
      })
    }

    if (userWalletAddress) {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)

      const unstake = await unstaking(pid, userWalletAddress)

      setInfoStake({
        yourStake: balance,
        withdrawable: withdrawableResponse
      })
      setUnstake(unstake)
    }
  }, [userWalletAddress])

  React.useEffect(() => {
    getAllowance(Staking, userWalletAddress)
      .then((response: boolean) => setIsApproveKacyStaking(response))

    getInfoStake()
  }, [userWalletAddress])

  return (
    <>
      <div>
        <S.BorderGradient>
          <S.InterBackground>
            <img src="assets/logo-staking.svg" alt="" />
            <S.IntroStaking>
              <S.APR>
                <Tooltip tooltipTop={true}>Annual Percentage Rate</Tooltip>
                <h4>APR</h4>
              </S.APR>
              <S.Percentage>{percentage}%</S.Percentage>
            </S.IntroStaking>
          </S.InterBackground>
          <S.KacyStaked>
            <S.VotingPower>
              <p>{infoStakeStatic.votingMultiplier} Voting Power <span>per KACY</span></p>
            </S.VotingPower>
            <S.WithdrawDelay>
              <S.Days>
                <p>{infoStakeStatic.withdrawDelay > 0 ? 1 : infoStakeStatic.withdrawDelay} days </p>
                <Tooltip tooltipTop={false} widthIcon={20}>Time your asset will be locked before you can withdraw it.</Tooltip>
              </S.Days>
              <span>Withdraw delay</span>
            </S.WithdrawDelay>
          </S.KacyStaked>
          <S.InfosStaking>
            <S.Info>
              <p>Your stake</p>
              <S.Stake>
                <p>{BNtoDecimal(infoStake.yourStake || new BigNumber(0), new BigNumber(18), 6)} KACY</p>
                <span>~ 0 USD</span>
              </S.Stake>
            </S.Info>
            <S.Info>
              <span>Your voting power</span>
              <span>
                {BNtoDecimal(new BigNumber(infoStake.withdrawable || unstake ?
                  1 : infoStakeStatic.votingMultiplier).mul(infoStake.yourStake), new BigNumber(18), 6)}
              </span>
            </S.Info>
            <S.Info>
              <span>Your daily KACY reward</span>
              <span>{BNtoDecimal(infoStakeStatic.yourDailyKacyReward, new BigNumber(18), 2)}/day</span>
            </S.Info>
            <S.ButtonContainer>
              {userWalletAddress ?
              <>
                {infoStake.yourStake.toString() !== "0" &&
                  <S.Claim>
                    <KacyEarned 
                      pid={pid} 
                      userWalletAddress={userWalletAddress} 
                      earned={earned}
                    />
                    <S.Button 
                      type="button" 
                      style={{ width: '110px' }}
                      onClick={() => getReward(pid, confirmClaim, "Pending reward claim")}
                    >
                      Claim
                    </S.Button>
                  </S.Claim>
                }
                {isApproveKacyStaking ?
                  <S.StakeContainer>
                    {unstake ? 
                      <S.Button 
                        type="button"
                        buttonRequest={true}
                        onClick={() => setIsModalCancelUnstake(true)}
                      >
                        Cancel withdraw
                      </S.Button>
                      :
                      <S.Button 
                        type="button" 
                        onClick={() => setIsModalStaking(true)}
                      >
                        Stake KACY
                      </S.Button>
                    }        
                    {infoStake.yourStake.toString() !== "0" &&
                    <>
                      {infoStake.withdrawable ? 
                        <S.Button 
                          type="button" 
                          onClick={() => setIsModalUnstaking(true)}
                        >
                          Withdraw
                        </S.Button>
                        :
                        unstake ? 
                          <WithdrawDate pid={pid} userWalletAddress={userWalletAddress} stakedUntil={stakedUntil} />
                          :
                          <S.Button
                            type="button"
                            buttonRequest={true}
                            onClick={() => setIsModalRequestUnstake(true)}
                          >
                            Request withdraw
                          </S.Button>
                      }           
                    </>
                    }
                  </S.StakeContainer>
                  :
                  <S.Button 
                    type="button" 
                    onClick={handleApproveKacy}
                  >
                    Approve Contract
                  </S.Button>
                }
              </>
              :
              <S.Button 
                type="button" 
                onClick={connect}
              >
                Connect Wallet
              </S.Button>
              }
              <S.ButtonDetails 
                type="button" 
                isDetails={isDetails}
                onClick={() => setIsDetails(!isDetails)}
              >
                Details 
                <img src="assets/arrow-down-cyan.svg" alt="" />
              </S.ButtonDetails>
              {isDetails && 
                <Details 
                  pid={pid} 
                  poolInfo={poolInfo}
                  infoStakeStatic={infoStakeStatic}
                />
              }
            </S.ButtonContainer>
          </S.InfosStaking>
        </S.BorderGradient>
      </div>
      <ModalStaking 
        modalOpen={isModalStaking} 
        setModalOpen={setIsModalStaking} 
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
