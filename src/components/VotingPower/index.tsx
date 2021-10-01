import React from 'react'
import BigNumber from 'bn.js'
// import { EventData } from 'web3-eth-contract'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'
import { getDate } from '../../utils/date'
import { CompleteCallback } from '../../utils/txWait'
import { confirmClaim } from '../../utils/confirmTransactions'

import { Staking } from '../../constants/tokenAddresses'

import useStakingContract, { PoolInfo } from '../../hooks/useStakingContract'

import Details from '../Details'
import Tooltip from '../Tooltip'
import ModalStaking from '../ModalStaking'
import ModalUnstaking from '../ModalUnstaking'
import ModalRequestUnstake from '../ModalRequestUnstake'
import ModalCancelUnstake from '../ModalCancelUnstake'
import ModalWalletConnect from '../ModalWalletConnect'

import YourStake from './YourStake'
import WithdrawDate from './WithdrawDate'
import KacyEarned from './KacyEarned'

import * as S from './styles'
import Button from '../Button'

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
  totalStaked: BigNumber;
}

interface IStakingProps {
  days: string;
  pid: number;
  connect: () => void;
  approve: (
    spenderAddress: string,
    userWalletAddress: string,
    message?: string,
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
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [isDetails, setIsDetails] = React.useState<boolean>(false)

  const [apr, setApr] = React.useState<BigNumber>(new BigNumber(0))
  const [hasExpired, setHasExpired] = React.useState<boolean>(false)
  const [hasStake, setHasStake] = React.useState<boolean>(false)
  const [isWithdrawable, setIsWithdrawable] = React.useState<boolean>(false)
  const [withdrawDelay, setWithdrawDelay] = React.useState<number>(0)

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
      withdrawDelay: '',
      totalStaked: new BigNumber(0),
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

      const timestampNow = new Date().getTime()
      const periodFinish: any = new Date(Number(poolInfoResponse.periodFinish) * 1000)

      const startDate = getDate(
        Number(poolInfoResponse.periodFinish) -
        Number(poolInfoResponse.rewardsDuration)
      )
      const endDate = getDate(Number(poolInfoResponse.periodFinish))

      const kacyRewards = new BigNumber(poolInfoResponse.rewardRate).mul(
        new BigNumber(86400)
      )

      const withdrawDelay = Number(poolInfoResponse.withdrawDelay) / 86400

      setInfoStakeStatic({
        votingMultiplier: poolInfoResponse.votingMultiplier,
        startDate,
        endDate,
        kacyRewards,
        yourDailyKacyReward: new BigNumber(0),
        withdrawDelay: withdrawDelay > 0 ? withdrawDelay : 0,
        totalStaked: new BigNumber(poolInfoResponse.depositedAmount),
      })
      setHasExpired(periodFinish < timestampNow)
    }

    if (userWalletAddress) {
      const balance: BigNumber = await balanceOf(pid, userWalletAddress)
      const withdrawableResponse = await withdrawable(pid, userWalletAddress)

      setInfoStake({
        yourStake: balance,
        withdrawable: withdrawableResponse
      })
    }
  }, [userWalletAddress])

  React.useEffect(() => {
    let yourDailyKacyReward: BigNumber = new BigNumber(0)

    if (infoStake.yourStake.toString() !== "0") {
      yourDailyKacyReward = infoStakeStatic.kacyRewards
        .mul(infoStake.yourStake ? infoStake.yourStake : new BigNumber(0))
        .div(new BigNumber(infoStakeStatic.totalStaked))

      setInfoStakeStatic((prevState) => ({
        ...prevState,
        yourDailyKacyReward
      }))
    }
  }, [infoStake.yourStake, infoStakeStatic.kacyRewards, infoStakeStatic.totalStaked])

  React.useEffect(() => {
    getAllowance(Staking, userWalletAddress).then((response: boolean) =>
      setIsApproveKacyStaking(response)
    )

    getInfoStake()
  }, [userWalletAddress])


  // const token = useStakingContract(Staking)

  // React.useEffect(() => {

  //   let transaction: string = ''
  //   const stakeEvent = token.events.Staked({
  //     filter: {
  //       pid,
  //       user: userWalletAddress
  //     },
  //   }, (error: Error, event: EventData) => {
  //     const amount = event.returnValues.amount
  //     if (event.transactionHash !== transaction) {
  //       transaction = event.transactionHash
  //       setInfoStake(prevState => ({
  //         yourStake: prevState.yourStake.add(new BigNumber(amount)),
  //         withdrawable: prevState.withdrawable
  //       }))
  //     }
  //   })

  //   const withdrawnEvent = token.events.Withdrawn({
  //     filter: {
  //       pid,
  //       user: userWalletAddress
  //     },
  //   },(error: Error, event: EventData) => {
  //     const amount = event.returnValues.amount
  //     if (event.transactionHash !== transaction) {
  //       transaction = event.transactionHash
  //       setInfoStake(prevState => ({
  //         yourStake: prevState.yourStake.sub(new BigNumber(amount)),
  //         withdrawable: prevState.withdrawable
  //       }))
  //     }
  //   })


  //   return () => {
  //     stakeEvent.unsubscribe()
  //     withdrawnEvent.unsubscribe()
  //   }
  // }, [])

  return (
    <>
      <div>
        <S.BorderGradient>
          <S.InterBackground>
            <img src="assets/logo-staking.svg" alt="" />
            <S.IntroStaking>
              <S.APR>
                <Tooltip tooltipTop={true}>Annual Percentage Return</Tooltip>
                <h4>APR</h4>
              </S.APR>
              <S.Percentage>{Number(apr)/100}%</S.Percentage>
            </S.IntroStaking>
          </S.InterBackground>
          <S.KacyStaked>
            <S.VotingPower>
              <p>
                {infoStakeStatic.votingMultiplier} Voting Power{' '}
                <span>per KACY</span>
              </p>
            </S.VotingPower>
            <S.WithdrawDelay>
              <S.Days>
                <p>
                  {infoStakeStatic.withdrawDelay > 0
                    ? 1
                    : infoStakeStatic.withdrawDelay}{' '}
                  days{' '}
                </p>
                <Tooltip tooltipTop={false} widthIcon={20}>
                  Time your asset will be locked before you can withdraw it.
                </Tooltip>
              </S.Days>
              <span>Withdraw delay</span>
            </S.WithdrawDelay>
          </S.KacyStaked>
          <S.InfosStaking>
            <YourStake
              pid={pid}
              balanceOf={balanceOf}
              poolInfo={poolInfo}
              withdrawable={withdrawable}
              unstaking={unstaking}
              unstake={unstake}
              setUnstake={setUnstake}
              userWalletAddress={userWalletAddress}
              setIsWithdrawable={setIsWithdrawable}
              setHasStake={setHasStake}
              setApr={setApr}
            />
            <S.ButtonContainer>
              {userWalletAddress ? (
                <>
                  {!hasExpired && hasStake && (
                    <S.Claim>
                      <KacyEarned
                        pid={pid}
                        userWalletAddress={userWalletAddress}
                        earned={earned}
                      />
                      <Button
                        size='medium'
                        backgroundSecondary
                        type="button"
                        text='Claim'
                        // fullWidth
                        onClick={() =>
                          getReward(pid, confirmClaim, 'Pending reward claim')
                        }
                      />


                    </S.Claim>
                  )}
                  {isApproveKacyStaking ? (
                    <S.StakeContainer>
                      {unstake ? (
                        <Button
                          size='huge'
                          backgroundBlack
                          type="button"
                          text='Cancel withdraw'
                          fullWidth
                          onClick={() => setIsModalCancelUnstake(true)}
                        />
                      ) : (
                        <Button
                          size='huge'
                          backgroundSecondary
                          type="button"
                          text='Stake KACY'
                          fullWidth
                          onClick={() => setIsModalStaking(true)}
                        />
                      )}
                      {hasStake && (
                        <>
                          {isWithdrawable ? (
                            <Button
                              size='huge'
                              backgroundSecondary
                              type="button"
                              text='Withdraw'
                              fullWidth
                              onClick={() => setIsModalUnstaking(true)}
                            />

                          ) : unstake ? (
                            <WithdrawDate
                              pid={pid}
                              userWalletAddress={userWalletAddress}
                              stakedUntil={stakedUntil}
                              setWithdrawDelay={setWithdrawDelay}
                            />
                          ) : (
                            <Button
                              size='huge'
                              backgroundBlack
                              type="button"
                              text='Request withdraw'
                              fullWidth
                              onClick={() => setIsModalRequestUnstake(true)}
                            />
                          )}
                        </>
                      )}
                    </S.StakeContainer>
                  ) : (
                    <Button
                      size='huge'
                      backgroundSecondary
                      type="button"
                      text='Approve Contract'
                      fullWidth
                      onClick={handleApproveKacy}
                    />


                  )}
                </>
              ) : (
                <Button size='huge'
                  backgroundSecondary
                  type="button"
                  text='Connect Wallet'
                  fullWidth
                  onClick={() => setIsModaWallet(true)}
                />


              )}
              <S.ButtonDetails
                type="button"
                isDetails={isDetails}
                onClick={() => setIsDetails(!isDetails)}
              >
                Details
                <img src="assets/arrow-down-cyan.svg" alt="" />
              </S.ButtonDetails>
              {isDetails && (
                <Details
                  pid={pid}
                  hasExpired={hasExpired}
                  poolInfo={poolInfo}
                  infoStakeStatic={infoStakeStatic}
                />
              )}
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
        withdrawDelay={withdrawDelay}
        votingMultiplier={infoStakeStatic.votingMultiplier}
      />
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
        connect={connect}
      />
    </>
  )
}

export default VotingPower
