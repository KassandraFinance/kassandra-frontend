/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useSelector, RootStateOrAny } from 'react-redux'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import {
  Staking,
  LPKacyAvax,
  LPDaiAvax,
  Kacy,
  SUBGRAPH_URL,
  HeimCRPPOOL
} from '../../constants/tokenAddresses'
import usePriceLP from '../../hooks/usePriceLP'
import { PoolInfo } from '../../hooks/useStakingContract'
import useERC20Contract, { ERC20 } from '../../hooks/useERC20Contract'

import web3 from '../../utils/web3'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'
import { BNtoDecimal } from '../../utils/numerals'

import { GET_INFO_AHYPE } from './graphql'

import Button from '../Button'
import ModalRequestUnstake from '../modals/ModalRequestUnstake'
import ModalCancelUnstake from '../modals/ModalCancelUnstake'
import ModalWalletConnect from '../modals/ModalWalletConnect'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'
import ModalStakeAndWithdraw from '../modals/ModalStakeAndWithdraw'
import Details from './Details'
import YourStake from './YourStake'
import WithdrawDate from './WithdrawDate'
import KacyEarned from './KacyEarned'

import infoCyanIcon from '../../../public/assets/info-icon.svg'
import infoGrayIcon from '../../../public/assets/info-gray.svg'

import * as S from './styles'

export interface IPriceLPToken {
  priceLP: Big;
  kacy: Big;
  aHYPE: Big;
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
  balanceOf: (pid: number, walletAddress: string) => Promise<BigNumber>;
  earned: (pid: number, walletAddress: string) => Promise<BigNumber>;
  getReward: (pid: number, callback: TransactionCallback) => void;
  withdrawable: (pid: number, walletAddress: string) => Promise<boolean>;
  poolInfo: (pid: number) => Promise<PoolInfo>;
  unstaking: (pid: number, walletAddress: string) => Promise<boolean>;
  stakedUntil: (pid: number, walletAddress: string) => Promise<string>;
  stakeWithVotingPower: boolean;
  availableWithdraw?: (pid: number, walletAddress: string) => Promise<Big>;
  lockUntil?: (pid: number, walletAddress: string) => Promise<number>;
  stakeWithLockPeriod?: boolean;
}

const staked: any = {
  0: 'KACY',
  1: 'KACY',
  2: 'KACY',
  3: 'KACY',
  4: 'KACY',
  5: 'LP',
  6: 'aHYPE'
}

const StakeCard = ({
  pid,
  symbol,
  balanceOf,
  earned,
  getReward,
  withdrawable,
  poolInfo,
  unstaking,
  stakedUntil,
  stakeWithVotingPower,
  availableWithdraw,
  lockUntil,
  stakeWithLockPeriod = false
}: IStakingProps) => {
  const [isModalStake, setIsModalStake] = React.useState<boolean>(false)
  const [stakeTransaction, setStakeTransaction] = React.useState<string>('')
  const [isModalCancelUnstake, setIsModalCancelUnstake] =
    React.useState<boolean>(false)
  const [isModalRequestUnstake, setIsModalRequestUnstake] =
    React.useState<boolean>(false)
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [isDetails, setIsDetails] = React.useState<boolean>(false)

  const [isApproveKacyStaking, setIsApproveKacyStaking] =
    React.useState<boolean>(false)
  const [priceLPToken, setPriceLPToken] = React.useState<IPriceLPToken>({
    priceLP: Big(-1),
    kacy: Big(-1),
    aHYPE: Big(-1)
  })

  const [lockPeriod, setLockPeriod] = React.useState(0)
  // eslint-disable-next-line prettier/prettier
  const [currentAvailableWithdraw, setCurrentAvailableWithdraw] =
    React.useState(Big(-1))

  const [withdrawDelay, setWithdrawDelay] = React.useState<number>(0)
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(
    new BigNumber(-1)
  )

  const [decimals, setDecimals] = React.useState<string>('18')

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

  const { data } = useSWR(
    [GET_INFO_AHYPE, HeimCRPPOOL],
    (query, id) => request(SUBGRAPH_URL, query, { id }),
    {
      refreshInterval: 10000
    }
  )
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const { trackEvent } = useMatomo()
  const { viewgetReserves } = usePriceLP()
  const lpToken = useERC20Contract(LPKacyAvax)

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

  async function handleLPtoUSD() {
    const reservesKacyAvax = await viewgetReserves(LPKacyAvax)
    const reservesDaiAvax = await viewgetReserves(LPDaiAvax)

    let kacyReserve = reservesKacyAvax._reserve1
    let avaxKacyReserve = reservesKacyAvax._reserve0
    let DaiReserve = reservesDaiAvax._reserve1
    let AvaxDaiReserve = reservesDaiAvax._reserve0

    if (process.env.NEXT_PUBLIC_MASTER !== '1') {
      kacyReserve = reservesKacyAvax._reserve0
      avaxKacyReserve = reservesKacyAvax._reserve1
      DaiReserve = reservesDaiAvax._reserve0
      AvaxDaiReserve = reservesDaiAvax._reserve1
    }

    const avaxInDollar = Big(DaiReserve).div(Big(AvaxDaiReserve))
    const kacyInDollar = avaxInDollar.mul(Big(avaxKacyReserve).div(kacyReserve))

    const allAVAXDollar = Big(avaxKacyReserve).mul(avaxInDollar)
    const supplyLPToken = await lpToken.totalSupply()

    if (supplyLPToken.toString() !== '0') {
      const priceLP = allAVAXDollar.mul(2).div(Big(supplyLPToken.toString()))
      setPriceLPToken(prevState => ({
        ...prevState,
        priceLP
      }))
    }
    if (data) {
      setPriceLPToken(prevState => ({
        ...prevState,
        aHYPE: Big(data?.pool.price_usd || -1)
      }))
    }
    setPriceLPToken(prevState => ({
      ...prevState,
      kacy: kacyInDollar
    }))
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

    availableWithdraw &&
      availableWithdraw(pid, userWalletAddress).then(
        setCurrentAvailableWithdraw
      )

    lockUntil && lockUntil(pid, userWalletAddress).then(setLockPeriod)
  }, [userWalletAddress, infoStaked.stakingToken])

  return (
    <>
      <S.BorderGradient stakeWithVotingPower={stakeWithVotingPower}>
        <S.StakeCard>
          <S.InterBackground stakeWithVotingPower={stakeWithVotingPower}>
            {symbol === 'kacy' ? (
              <img src="/assets/logo-kacy-stake.svg" alt="" />
            ) : null}
            {symbol === 'ahype' ? (
              <img src="/assets/ahype.svg" alt="" style={{ width: '58px' }} />
            ) : null}
            {symbol === 'lp' ? (
              <img src="/assets/kap.svg" alt="" width={144} />
            ) : null}
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
          {stakeWithVotingPower ? (
            <S.PoolName>
              <S.StakeAndEarn>
                <p>STAKE</p>
                {symbol === 'ahype' ? (
                  <Link href="/products/ahype" passHref>
                    <a>
                      $aHYPE
                      <img src="/assets/GoToSite.svg" alt="" />
                    </a>
                  </Link>
                ) : (
                  <a
                    href={`https://app.pangolin.exchange/#/add/AVAX/${Kacy}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    $KACY-AVAX PNG LP
                    <img src="/assets/GoToSite.svg" alt="" />
                  </a>
                )}
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
              balanceOf={balanceOf}
              poolInfo={poolInfo}
              withdrawable={withdrawable}
              unstaking={unstaking}
              userWalletAddress={userWalletAddress}
              infoStaked={infoStaked}
              setInfoStaked={setInfoStaked}
              stakeWithVotingPower={stakeWithVotingPower}
              priceLPToken={priceLPToken}
              stakeWithLockPeriod={stakeWithLockPeriod}
              lockPeriod={lockPeriod}
              availableWithdraw={currentAvailableWithdraw}
            />
            <S.ButtonContainer stakeWithVotingPower={stakeWithVotingPower}>
              {userWalletAddress ? (
                <>
                  {!stakeWithLockPeriod && (
                    <S.Claim>
                      <KacyEarned
                        pid={pid}
                        userWalletAddress={userWalletAddress}
                        earned={earned}
                        kacyEarned={kacyEarned}
                        setKacyEarned={setKacyEarned}
                        kacyPrice={priceLPToken.kacy}
                      />
                      <Button
                        type="button"
                        text="Claim"
                        size="claim"
                        backgroundSecondary
                        disabledNoEvent={kacyEarned.toString() === '0'}
                        // fullWidth
                        onClick={() => getReward(pid, rewardClaimCallback())}
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
                          stakedUntil={stakedUntil}
                          setWithdrawDelay={setWithdrawDelay}
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
                                setIsModalStake(true)
                                setStakeTransaction('staking')
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
                              setIsModalStake(true)
                              setStakeTransaction('unstaking')
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
                <img src="assets/arrowDetails.svg" alt="" />
              </S.ButtonDetails>
              {isDetails && (
                <Details
                  pid={pid}
                  hasExpired={infoStaked.hasExpired}
                  poolInfo={poolInfo}
                  infoStakeStatic={infoStaked}
                  stakingToken={infoStaked.stakingToken}
                  decimals={decimals}
                  symbol={staked[pid]}
                  priceLPToken={priceLPToken}
                />
              )}
            </S.ButtonContainer>
          </S.InfosStaking>
        </S.StakeCard>
      </S.BorderGradient>
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
          setIsModalStaking={setIsModalStake}
          pid={pid}
          staking={infoStaked.withdrawDelay !== '0' && infoStaked.withdrawable}
          symbol={symbol}
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
          stakedUntil={stakedUntil}
        />
      )}
      {isModalWallet && (
        <ModalWalletConnect
          modalOpen={isModalWallet}
          setModalOpen={setIsModaWallet}
        />
      )}
    </>
  )
}

export default StakeCard
