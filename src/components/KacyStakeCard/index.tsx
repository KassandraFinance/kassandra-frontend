import React from 'react'
import BigNumber from 'bn.js'
// import { EventData } from 'web3-eth-contract'
import { useSelector, RootStateOrAny } from 'react-redux'

import web3 from '../../utils/web3'
import { CompleteCallback } from '../../utils/txWait'
import { confirmClaim } from '../../utils/confirmTransactions'

import { Staking } from '../../constants/tokenAddresses'

import { PoolInfo } from '../../hooks/useStakingContract'
import { ERC20 } from '../../hooks/useERC20Contract'

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

export interface IInfoStaked {
  yourStake: BigNumber;
  withdrawable: boolean;
  votingMultiplier: string;
  startDate: string;
  endDate: string;
  kacyRewards: BigNumber;
  yourDailyKacyReward: BigNumber;
  withdrawDelay: any;
  totalStaked: BigNumber;
  hasExpired: boolean;
  unstake: boolean;
  apr: BigNumber;
  stakingToken: string;
}

interface IStakingProps {
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

const KacyStakeCard = ({
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

  const [isApproveKacyStaking, setIsApproveKacyStaking] = React.useState<boolean>(false)

  const [withdrawDelay, setWithdrawDelay] = React.useState<number>(0)
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(new BigNumber(0))

  const [decimals, setDecimals] = React.useState<string>('18')

  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    yourStake: new BigNumber(0),
    withdrawable: false,
    votingMultiplier: '',
    startDate: '',
    endDate: '',
    withdrawDelay: '',
    kacyRewards: new BigNumber(0),
    totalStaked: new BigNumber(0),
    yourDailyKacyReward: new BigNumber(0),
    hasExpired: false,
    unstake: false,
    apr: new BigNumber(0),
    stakingToken: ''
  })

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  async function handleApproveKacy() {
    if (isApproveKacyStaking) {
      const infoStakingToken = await ERC20(infoStaked.stakingToken).decimals()
      setDecimals((infoStakingToken.toString()))

      return
    }
    const res = await approve(Staking, userWalletAddress)
    setIsApproveKacyStaking(res)
  }

  React.useEffect(() => {
    if (!web3.currentProvider) {
      return
    }
    
    getAllowance(Staking, userWalletAddress)
      .then((response: boolean) =>
        setIsApproveKacyStaking(response)
      )
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
            <img src="assets/logo-kacy-stake.svg" alt="" />
            <S.IntroStaking>
              <S.APR>
                <Tooltip widthIcon={16} tooltipTop={true}>Annual Percentage Return</Tooltip>
                <h4>APR</h4>
              </S.APR>
              <S.Percentage>{infoStaked.hasExpired ? 0 : Number(infoStaked.apr)/100}%</S.Percentage>
            </S.IntroStaking>
          </S.InterBackground>
          <S.VotingPowerAndWithdrawDelay>
            <S.InfoPool>
              <h3>
                Voting Power
              </h3>
              <p>{infoStaked.votingMultiplier || 1}<span>/$KACY</span></p>
            </S.InfoPool>
            <S.InfoPool>
              <h3>
                Withdraw delay
              </h3>
              <S.Days>
                <p>
                  {infoStaked.withdrawDelay/60/60/24 < 1 ?
                    infoStaked.withdrawDelay/60
                    :
                    infoStaked.withdrawDelay/60/60/24
                  }
                  <span>
                    {infoStaked.withdrawDelay/60/60/24 < 1 ? ' min' : ' days'}
                  </span>
                </p>
                <Tooltip tooltipTop={false} widthIcon={18} infoGray={true}>
                  Time your asset will be locked before you can withdraw it.
                </Tooltip>
              </S.Days>
            </S.InfoPool>
          </S.VotingPowerAndWithdrawDelay>
          {userWalletAddress && <S.Line />}
          <S.InfosStaking>
            <YourStake
              pid={pid}
              balanceOf={balanceOf}
              poolInfo={poolInfo}
              withdrawable={withdrawable}
              unstaking={unstaking}
              userWalletAddress={userWalletAddress}
              infoStaked={infoStaked}
              setInfoStaked={setInfoStaked}
            />
            <S.ButtonContainer>
              {userWalletAddress ? (
                <>
                  <S.Claim>
                    <KacyEarned
                      pid={pid}
                      userWalletAddress={userWalletAddress}
                      earned={earned}
                      kacyEarned={kacyEarned}
                      setKacyEarned={setKacyEarned}
                    />
                    <Button
                      size='medium'
                      backgroundSecondary
                      disabledNoEvent={kacyEarned.toString() === '0'}
                      type="button"
                      text='Claim'
                      // fullWidth
                      onClick={() =>
                        getReward(pid, confirmClaim, 'Pending reward claim')
                      }
                    />
                  </S.Claim>
                  {isApproveKacyStaking ? (
                    <S.StakeContainer>
                      {infoStaked.unstake ? (
                        <>
                          <Button
                            size='huge'
                            backgroundBlack
                            type="button"
                            text='Cancel withdraw'
                            fullWidth
                            onClick={() => setIsModalCancelUnstake(true)}
                          />
                          <WithdrawDate
                            pid={pid}
                            userWalletAddress={userWalletAddress}
                            stakedUntil={stakedUntil}
                            setWithdrawDelay={setWithdrawDelay}
                          />
                        </>
                      ) : (
                        <>
                          <Button
                            size='huge'
                            backgroundSecondary
                            type="button"
                            text='Stake KACY'
                            fullWidth
                            onClick={() => setIsModalStaking(true)}
                          />
                          {infoStaked.yourStake.toString() !== '0' && infoStaked.withdrawable ?
                            <Button
                              size='huge'
                              backgroundSecondary
                              type="button"
                              text='Withdraw'
                              fullWidth
                              onClick={() => setIsModalUnstaking(true)}
                            />
                            :
                             <Button
                              size='huge'
                              backgroundBlack
                              disabledNoEvent={infoStaked.yourStake.toString() === '0'}
                              type="button"
                              text='Request withdraw'
                              fullWidth
                              onClick={() => setIsModalRequestUnstake(true)}
                            />}
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
                isConnect={!!userWalletAddress}
                onClick={() => setIsDetails(!isDetails)}
              >
                Details
                <img src="assets/arrowDetails.svg" alt="" />
              </S.ButtonDetails>
              {isDetails && (
                <Details
                  pid={pid}
                  hasExpired={infoStaked.hasExpired}
                  poolInfo={poolInfo}
                  infoStakeStatic={infoStaked}
                  stakingToken={infoStaked.stakingToken}
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
        decimals={decimals}
      />
      <ModalUnstaking
        modalOpen={isModalUnstaking}
        setModalOpen={setIsModalUnstaking}
        otherStakingPools={false}
        pid={pid}
        decimals={decimals}
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
        votingMultiplier={infoStaked.votingMultiplier}
        yourStake={infoStaked.yourStake}
      />
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
        connect={connect}
      />
    </>
  )
}

export default KacyStakeCard