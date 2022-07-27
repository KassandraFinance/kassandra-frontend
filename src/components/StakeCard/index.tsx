/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Tippy from '@tippyjs/react'
import useSWR from 'swr'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { request } from 'graphql-request'

import {
  Staking,
  LPDaiAvax,
  SUBGRAPH_URL
} from '../../constants/tokenAddresses'
import { LP_KACY_AVAX_PNG } from '../../constants/pools'

import usePriceLP from '../../hooks/usePriceLP'
import useStakingContract from '../../hooks/useStakingContract'
import { ERC20 } from '../../hooks/useERC20Contract'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import { GET_INFO_POOL } from './graphql'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setModalAlertText } from '../../store/reducers/modalAlertText'

import 'tippy.js/dist/tippy.css'
import Button from '../Button'
import { ToastSuccess, ToastWarning } from '../Toastify/toast'
import ModalRequestUnstake from '../Modals/ModalRequestUnstake'
import ModalCancelUnstake from '../Modals/ModalCancelUnstake'
import ModalWalletConnect from '../Modals/ModalWalletConnect'
import ModalStakeAndWithdraw from '../Modals/ModalStakeAndWithdraw'
import Loading from '../Loading'

import Details from './Details'
import YourStake from './YourStake'
import WithdrawDate from './WithdrawDate'
import KacyEarned from './KacyEarned'

import infoCyanIcon from '../../../public/assets/notificationStatus/info.svg'
import infoGrayIcon from '../../../public/assets/utilities/info-gray.svg'

import * as S from './styles'

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
  vestingPeriod: string;
  lockPeriod: string;
}

interface IStakingProps {
  pid: number;
  symbol: string;
  properties: {
    logo: {
      src: string,
      style: {
        width: string
      }
    },
    addressProviderReserves?: string,
    title?: string,
    link?: string
  };
  stakeWithVotingPower: boolean;
  stakeWithLockPeriod: boolean;
  isLP: boolean;
  address?: string;
}

const StakeCard = ({
  pid,
  symbol,
  properties,
  stakeWithVotingPower,
  stakeWithLockPeriod,
  isLP,
  address
}: IStakingProps) => {
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [isDetails, setIsDetails] = React.useState<boolean>(false)
  const [isModalStake, setIsModalStake] = React.useState<boolean>(false)
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [isModalCancelUnstake, setIsModalCancelUnstake] =
    React.useState<boolean>(false)
  const [isModalRequestUnstake, setIsModalRequestUnstake] =
    React.useState<boolean>(false)
  const [isApproveKacyStaking, setIsApproveKacyStaking] =
    React.useState<boolean>(false)
  const [lockPeriod, setLockPeriod] = React.useState(0)
  const [decimals, setDecimals] = React.useState<string>('18')
  const [stakeTransaction, setStakeTransaction] = React.useState<string>('')
  const [currentAvailableWithdraw, setCurrentAvailableWithdraw] =
    React.useState(Big(-1))
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(
    new BigNumber(-1)
  )
  const [poolPrice, setPoolPrice] = React.useState<Big>(Big(-1))
  const [kacyPrice, setKacyPrice] = React.useState<Big>(Big(-1))
  const [infoStaked, setInfoStaked] = React.useState<IInfoStaked>({
    yourStake: new BigNumber(-1),
    withdrawable: false,
    votingMultiplier: '',
    startDate: '...',
    endDate: '...',
    withdrawDelay: '',
    kacyRewards: new BigNumber(-1),
    totalStaked: new BigNumber(-1),
    yourDailyKacyReward: new BigNumber(-1),
    hasExpired: false,
    unstake: false,
    apr: new BigNumber(-1),
    stakingToken: '',
    vestingPeriod: '...',
    lockPeriod: '...'
  })
  const { userWalletAddress } = useAppSelector(state => state)
  const { trackEventFunction } = useMatomoEcommerce()

  const { getPriceKacyAndLP } = usePriceLP()
  const stakingContract = useStakingContract(Staking)

  const { data } = useSWR(
    [GET_INFO_POOL, address],
    (query, id) => request(SUBGRAPH_URL, query, { id }),
    {
      refreshInterval: 10000
    }
  )

  const productCategories = [
    'Stake',
    process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji',
    stakeWithVotingPower ? 'VotingStake' : 'OtherStake'
  ]

  function openStakeAndWithdraw(transaction: 'staking' | 'unstaking') {
    setIsModalStake(true)
    setStakeTransaction(transaction)
  }

  async function handleLPtoUSD() {
    const addressProviderReserves = isLP && address ? address : LP_KACY_AVAX_PNG

    const { kacyPriceInDollar, priceLP } = await getPriceKacyAndLP(
      addressProviderReserves,
      LPDaiAvax,
      isLP
    )
    setKacyPrice(kacyPriceInDollar)

    if (isLP && priceLP) {
      setPoolPrice(priceLP)
      return
    }

    if (data) {
      setPoolPrice(Big(data?.pool?.price_usd || -1))
      return
    }

    setPoolPrice(kacyPriceInDollar)
  }

  async function handleApproveKacy() {
    const token = ERC20(infoStaked.stakingToken)
    if (isApproveKacyStaking) {
      const decimals = await token.decimals()
      setDecimals(decimals.toString())

      return
    }

    const res = await token.approve(
      Staking,
      userWalletAddress,
      approvalCallback
    )
    setIsApproveKacyStaking(res)
  }

  const approvalCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          dispatch(
            setModalAlertText({ errorText: `Approval of ${symbol} cancelled` })
          )
          return
        }

        dispatch(
          setModalAlertText({
            errorText: `Failed to approve ${symbol}. Please try again later.`
          })
        )
        return
      }

      ToastWarning(`Waiting approval of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        trackEventFunction('approve-contract', `${symbol}`, 'stake-farm')
        ToastSuccess(`Approval of ${symbol} confirmed`)
        return
      }
    }
  }, [symbol])

  const rewardClaimCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          dispatch(setModalAlertText({ errorText: `Cancelled reward claim` }))
          return
        }

        dispatch(
          setModalAlertText({
            errorText: `Failed to claim your rewards. Please try again later.`
          })
        )
        return
      }

      ToastWarning(`Waiting for the blockchain to claim your rewards...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        trackEventFunction('reward-claim', `${symbol}`, 'stake-farm')
        ToastSuccess(`Rewards claimed successfully`)
        return
      }
    }
  }, [])

  React.useEffect(() => {
    handleLPtoUSD()
  }, [infoStaked.stakingToken, pid, data])

  React.useEffect(() => {
    if (!web3.currentProvider || userWalletAddress.length === 0) {
      return
    }

    const token = ERC20(infoStaked.stakingToken)
    token
      .allowance(Staking, userWalletAddress)
      .then((response: boolean) => setIsApproveKacyStaking(response))

    stakingContract.availableWithdraw &&
      stakingContract
        .availableWithdraw(pid, userWalletAddress)
        .then(setCurrentAvailableWithdraw)

    stakingContract.lockUntil &&
      stakingContract.lockUntil(pid, userWalletAddress).then(setLockPeriod)
  }, [userWalletAddress, infoStaked.stakingToken])

  React.useEffect(() => {
    if (infoStaked.apr.lt(new BigNumber(0))) {
      return
    }

    if (userWalletAddress && kacyEarned.lt(new BigNumber(0))) {
      return
    }

    setIsLoading(false)
  }, [infoStaked])

  return (
    <>
      <div>
        <S.BorderGradient stakeWithVotingPower={!stakeWithVotingPower}>
          {isLoading && (
            <div
              style={{
                height: `${userWalletAddress ? '52.3rem' : '30.2rem'}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loading marginTop={0} />
            </div>
          )}
          <S.StakeCard style={{ display: `${isLoading ? 'none' : 'block'}` }}>
            <S.InterBackground stakeWithVotingPower={!stakeWithVotingPower}>
              <img
                src={properties.logo.src}
                alt=""
                style={properties.logo.style}
              />
              <S.IntroStaking>
                <S.APR>
                  <Tippy content="The Annual Percentage Rate is the yearly rate earned not taking compounding into account">
                    <S.TooltipAPR tabIndex={0}>
                      <Image src={infoCyanIcon} alt="Explanation" />
                    </S.TooltipAPR>
                  </Tippy>
                  <h4>APR</h4>
                </S.APR>
                <S.Percentage>
                  {infoStaked.apr.lt(new BigNumber(0))
                    ? '...'
                    : infoStaked.hasExpired
                    ? 0
                    : BNtoDecimal(infoStaked.apr, 0)}
                  %
                </S.Percentage>
              </S.IntroStaking>
            </S.InterBackground>
            {!stakeWithVotingPower ? (
              <S.PoolName>
                <S.StakeAndEarn>
                  <p>STAKE</p>
                  <Link href={properties.link || ''} passHref>
                    <a target="_blank" rel="noreferrer">
                      {properties.title}
                      <img src="/assets/utilities/go-to-site.svg" alt="" />
                    </a>
                  </Link>
                </S.StakeAndEarn>
                <S.StakeAndEarn>
                  <p>EARN</p>
                  <p>$KACY</p>
                </S.StakeAndEarn>
              </S.PoolName>
            ) : (
              <S.VotingPowerAndWithdrawDelay>
                <S.InfoPool>
                  <h3>Voting Power</h3>
                  <p>
                    {infoStaked.votingMultiplier || '...'}
                    <span>/$KACY</span>
                  </p>
                </S.InfoPool>
                <S.InfoPool>
                  <h3>Withdraw delay</h3>
                  <S.Days>
                    <p>
                      {infoStaked.withdrawDelay.length === 0
                        ? '...'
                        : infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                        ? infoStaked.withdrawDelay / 60
                        : infoStaked.withdrawDelay / 60 / 60 / 24}
                      <span>
                        {infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                          ? ' min'
                          : ' days'}
                      </span>
                    </p>
                    <Tippy content="To redeem your assets you will have to first request a withdrawal and wait this amount of time to be able to redeem your assets. You will stop receiving rewards during this period and your voting power multiplier will be reduced to 1.">
                      <S.TooltipAPR tabIndex={0}>
                        <Image
                          src={infoGrayIcon}
                          alt="Explanation"
                          width={16}
                          height={16}
                        />
                      </S.TooltipAPR>
                    </Tippy>
                  </S.Days>
                </S.InfoPool>
              </S.VotingPowerAndWithdrawDelay>
            )}
            {userWalletAddress && <S.Line />}

            <S.InfosStaking>
              <YourStake
                pid={pid}
                infoStaked={infoStaked}
                poolPrice={poolPrice}
                kacyPrice={kacyPrice}
                setInfoStaked={setInfoStaked}
                lockPeriod={lockPeriod}
                userWalletAddress={userWalletAddress}
                stakeWithVotingPower={stakeWithVotingPower}
                stakeWithLockPeriod={stakeWithLockPeriod}
                availableWithdraw={currentAvailableWithdraw}
              />
              <S.ButtonContainer stakeWithVotingPower={!stakeWithVotingPower}>
                {userWalletAddress ? (
                  <>
                    {!stakeWithLockPeriod && (
                      <S.Claim>
                        <KacyEarned
                          pid={pid}
                          userWalletAddress={userWalletAddress}
                          kacyEarned={kacyEarned}
                          setKacyEarned={setKacyEarned}
                          kacyPrice={kacyPrice}
                        />
                        <Button
                          type="button"
                          text="Claim"
                          size="claim"
                          backgroundSecondary
                          disabledNoEvent={kacyEarned.toString() === '0'}
                          onClick={() =>
                            stakingContract.getReward(
                              pid,
                              rewardClaimCallback()
                            )
                          }
                        />
                      </S.Claim>
                    )}
                    <S.StakeContainer>
                      {infoStaked.unstake ? (
                        <>
                          <Button
                            type="button"
                            text="Cancel withdraw"
                            size="huge"
                            backgroundSecondary
                            fullWidth
                            onClick={() => setIsModalCancelUnstake(true)}
                          />
                          <WithdrawDate
                            pid={pid}
                            userWalletAddress={userWalletAddress}
                          />
                        </>
                      ) : (
                        <>
                          {stakeWithLockPeriod ? null : isApproveKacyStaking ? (
                            infoStaked.withdrawDelay !== '0' &&
                            infoStaked.withdrawable ? (
                              <Button
                                type="button"
                                text={`Stake ${symbol}`}
                                size="huge"
                                backgroundSecondary
                                fullWidth
                                onClick={() => setIsModalCancelUnstake(true)}
                              />
                            ) : (
                              <Button
                                type="button"
                                text={`Stake ${symbol}`}
                                size="huge"
                                backgroundSecondary
                                fullWidth
                                onClick={() => {
                                  openStakeAndWithdraw('staking')
                                }}
                              />
                            )
                          ) : (
                            <Button
                              type="button"
                              text="Approve Contract"
                              size="huge"
                              backgroundSecondary
                              fullWidth
                              onClick={handleApproveKacy}
                            />
                          )}
                          {stakeWithLockPeriod ||
                          (infoStaked.yourStake.toString() !== '0' &&
                            infoStaked.withdrawable) ? (
                            <Button
                              type="button"
                              text="Withdraw"
                              size="huge"
                              backgroundBlack
                              disabledNoEvent={
                                stakeWithLockPeriod &&
                                currentAvailableWithdraw.lte(0)
                              }
                              fullWidth
                              onClick={() => {
                                openStakeAndWithdraw('unstaking')
                              }}
                            />
                          ) : (
                            <Button
                              type="button"
                              text="Request withdraw"
                              size="huge"
                              backgroundBlack
                              disabledNoEvent={
                                infoStaked.yourStake.toString() === '0'
                              }
                              fullWidth
                              onClick={() => setIsModalRequestUnstake(true)}
                            />
                          )}
                        </>
                      )}
                    </S.StakeContainer>
                  </>
                ) : (
                  <Button
                    type="button"
                    text="Connect Wallet"
                    size="huge"
                    backgroundSecondary
                    fullWidth
                    onClick={() => setIsModaWallet(true)}
                  />
                )}
                <S.ButtonDetails
                  type="button"
                  isDetails={isDetails}
                  isConnect={!!userWalletAddress}
                  onClick={() => {
                    setIsDetails(!isDetails)
                    trackEventFunction(
                      'click-details',
                      `${isDetails ? 'details-closed' : 'details-open'}`,
                      'stake-farm'
                    )
                  }}
                >
                  Details
                  <img
                    src="assets/notificationStatus/arrow-down-blue.svg"
                    alt=""
                  />
                </S.ButtonDetails>
                {isDetails && (
                  <Details
                    pid={pid}
                    hasExpired={infoStaked.hasExpired}
                    infoStakeStatic={infoStaked}
                    stakingToken={infoStaked.stakingToken}
                    decimals={decimals}
                    symbol={symbol}
                    poolPrice={poolPrice}
                    kacyPrice={kacyPrice}
                  />
                )}
              </S.ButtonContainer>
            </S.InfosStaking>
          </S.StakeCard>
        </S.BorderGradient>
      </div>

      {isModalStake && (
        <ModalStakeAndWithdraw
          setModalOpen={setIsModalStake}
          pid={pid}
          decimals={decimals}
          stakingToken={infoStaked.stakingToken}
          productCategories={productCategories}
          symbol={symbol}
          stakeTransaction={stakeTransaction}
          setStakeTransaction={setStakeTransaction}
        />
      )}
      {isModalCancelUnstake && (
        <ModalCancelUnstake
          setModalOpen={setIsModalCancelUnstake}
          pid={pid}
          staking={infoStaked.withdrawDelay !== '0' && infoStaked.withdrawable}
          symbol={symbol}
          openStakeAndWithdraw={openStakeAndWithdraw}
        />
      )}
      {isModalRequestUnstake && (
        <ModalRequestUnstake
          modalOpen={isModalRequestUnstake}
          setModalOpen={setIsModalRequestUnstake}
          pid={pid}
          votingMultiplier={infoStaked.votingMultiplier}
          yourStake={infoStaked.yourStake}
          symbol={symbol}
          userWalletAddress={userWalletAddress}
          stakedUntil={stakingContract.stakedUntil}
        />
      )}
      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModaWallet} />}
    </>
  )
}

export default StakeCard
