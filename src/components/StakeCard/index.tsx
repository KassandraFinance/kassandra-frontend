/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import Image from 'next/image'

import { useSelector, RootStateOrAny } from 'react-redux'

import {
  Staking,
  LPDaiAvax,
  LPKacyAvaxPNG,
  LPKacyAvaxJOE,
  SUBGRAPH_URL
} from '../../constants/tokenAddresses'

import usePriceLP from '../../hooks/usePriceLP'
import useStakingContract from '../../hooks/useStakingContract'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import useERC20Contract, { ERC20 } from '../../hooks/useERC20Contract'
import useSWR from 'swr'
import { GET_INFO_POOL } from './graphql'

import Big from 'big.js'
import BigNumber from 'bn.js'
import { request } from 'graphql-request'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import 'tippy.js/dist/tippy.css'
import Button from '../Button'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'
import ModalRequestUnstake from '../Modals/ModalRequestUnstake'
import ModalCancelUnstake from '../Modals/ModalCancelUnstake'
import ModalWalletConnect from '../Modals/ModalWalletConnect'
import ModalStakeAndWithdraw from '../Modals/ModalStakeAndWithdraw'

import Details from './Details'
import YourStake from './YourStake'
import WithdrawDate from './WithdrawDate'
import KacyEarned from './KacyEarned'

import infoCyanIcon from '../../../public/assets/notificationStatus/info.svg'
import infoGrayIcon from '../../../public/assets/utilities/info-gray.svg'

import * as S from './styles'

export interface IPriceLPToken {
  priceLPPng: Big;
  priceLPJoe: Big;
  kacy: Big;
  aHYPE: Big;
  k3c: Big;
}

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
    title?: string,
    link?: string
  };
  address?: string;
  stakeWithVotingPower: boolean;
  stakeWithLockPeriod?: boolean;
}

const staked: { [key: number | string]: string } = {
  0: 'KACY',
  1: 'KACY',
  2: 'KACY',
  3: 'KACY',
  4: process.env.NEXT_PUBLIC_MASTER === '1' ? 'KACY' : 'aHYPE',
  5: 'LP-PNG',
  6: 'aHYPE',
  7: 'LP-JOE',
  8: 'K3C'
}

const StakeCard = ({
  pid,
  symbol,
  stakeWithLockPeriod = false,
  stakeWithVotingPower,
  properties,
  address
}: IStakingProps) => {
  console.log('reload')
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
  const [tokenPrice, setTokenPrice] = React.useState<IPriceLPToken>({
    priceLPPng: Big(-1),
    priceLPJoe: Big(-1),
    kacy: Big(-1),
    aHYPE: Big(-1),
    k3c: Big(-1)
  })
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
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackEvent } = useMatomo()
  const { viewgetReserves } = usePriceLP()
  const kacyAvaxPngToken = useERC20Contract(LPKacyAvaxPNG)
  const kacyAvaxJoeToken = useERC20Contract(LPKacyAvaxJOE)
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
    staked[pid] === 'KACY' ? 'VotingStake' : 'OtherStake'
  ]

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'stake-farm',
      action,
      name
    })
  }

  function openStakeAndWithdraw(transaction: 'staking' | 'unstaking') {
    setIsModalStake(true)
    setStakeTransaction(transaction)
  }

  async function handleLPtoUSD() {
    const reservesKacyAvaxPng = await viewgetReserves(LPKacyAvaxPNG)
    const reservesKacyAvaxJoe = await viewgetReserves(LPKacyAvaxJOE)

    const reservesDaiAvax = await viewgetReserves(LPDaiAvax)

    let DaiReserve = reservesDaiAvax._reserve1
    let AvaxDaiReserve = reservesDaiAvax._reserve0

    let kacyReserve = reservesKacyAvaxPng._reserve1
    let avaxKacyReservePng = reservesKacyAvaxPng._reserve0

    const avaxKacyReserveJoe = reservesKacyAvaxJoe._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      kacyReserve = reservesKacyAvaxPng._reserve0
      avaxKacyReservePng = reservesKacyAvaxPng._reserve1
      DaiReserve = reservesDaiAvax._reserve0
      AvaxDaiReserve = reservesDaiAvax._reserve1
    }

    const avaxInDollar = Big(DaiReserve).div(Big(AvaxDaiReserve))
    const kacyInDollar = avaxInDollar.mul(
      Big(avaxKacyReservePng).div(kacyReserve)
    )

    const allAVAXDollarPng = Big(avaxKacyReservePng).mul(avaxInDollar)
    const allAVAXDollarJoe = Big(avaxKacyReserveJoe).mul(avaxInDollar)

    const supplyLPPngToken = await kacyAvaxPngToken.totalSupply()
    const supplyLPJoeToken = await kacyAvaxJoeToken.totalSupply()

    if (supplyLPPngToken.toString() !== '0') {
      const priceLPPng = allAVAXDollarPng
        .mul(2)
        .div(Big(supplyLPPngToken.toString()))

      setTokenPrice(prevState => ({
        ...prevState,
        priceLPPng
      }))
    }
    if (supplyLPJoeToken.toString() !== '0') {
      const priceLPJoe = allAVAXDollarJoe
        .mul(2)
        .div(Big(supplyLPJoeToken.toString()))
      setTokenPrice(prevState => ({
        ...prevState,
        priceLPJoe
      }))
    }
    if (data) {
      setTokenPrice(prevState => ({
        ...prevState,
        [symbol === 'k3c' ? 'k3c' : 'aHYPE']: Big(data?.pool?.price_usd || -1)
      }))
    }
    setTokenPrice(prevState => ({
      ...prevState,
      kacy: kacyInDollar
    }))
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
          ToastError(`Approval of ${symbol} cancelled`)
          return
        }

        ToastError(`Failed to approve ${symbol}. Please try again later.`)
        return
      }

      ToastWarning(`Waiting approval of ${symbol}...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        matomoEvent('approve-contract', `${staked[pid]}`)
        ToastSuccess(`Approval of ${symbol} confirmed`)
        return
      }
    }
  }, [symbol])

  const rewardClaimCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          ToastError(`Cancelled reward claim`)
          return
        }

        ToastError(`Failed to claim your rewards. Please try again later.`)
        return
      }

      ToastWarning(`Waiting for the blockchain to claim your rewards...`)
      const txReceipt = await waitTransaction(txHash)

      if (txReceipt.status) {
        matomoEvent('reward-claim', `${staked[pid]}`)
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

  return (
    <>
      <div>
        <S.BorderGradient stakeWithVotingPower={!stakeWithVotingPower}>
          <S.StakeCard>
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
                tokenPrice={tokenPrice}
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
                          kacyPrice={tokenPrice.kacy}
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
                                text={`Stake ${staked[pid]}`}
                                size="huge"
                                backgroundSecondary
                                fullWidth
                                onClick={() => setIsModalCancelUnstake(true)}
                              />
                            ) : (
                              <Button
                                type="button"
                                text={`Stake ${staked[pid]}`}
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
                    matomoEvent(
                      'click-details',
                      `${isDetails ? 'details-closed' : 'details-open'}`
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
                    symbol={staked[pid]}
                    tokenPrice={tokenPrice}
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
          symbol={staked[pid]}
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
