/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'
import BigNumber from 'bn.js'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { ToastSuccess, ToastError, ToastWarning } from '../Toastify/toast'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import web3 from '../../utils/web3'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../utils/txWait'

import {
  Staking,
  LPKacyAvax,
  LPDaiAvax,
  SUBGRAPH_URL,
  HeimCRPPOOL
} from '../../constants/tokenAddresses'

import usePriceLP from '../../hooks/usePriceLP'
import { PoolInfo } from '../../hooks/useStakingContract'
import useERC20Contract, { ERC20 } from '../../hooks/useERC20Contract'

import Details from '../Details'
import ModalStaking from '../ModalStaking'
import ModalUnstaking from '../ModalUnstaking'
import ModalRequestUnstake from '../ModalRequestUnstake'
import ModalCancelUnstake from '../ModalCancelUnstake'
import ModalWalletConnect from '../ModalWalletConnect'

import infoCyanIcon from '../../../public/assets/info-icon.svg'
import infoGrayIcon from '../../../public/assets/info-gray.svg'

import YourStake from './YourStake'
import WithdrawDate from './WithdrawDate'
import KacyEarned from './KacyEarned'

import * as S from './styles'
import Button from '../Button'
import { BNtoDecimal } from '../../utils/numerals'

import { GET_INFO_AHYPE } from './graphql'
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
}

const staked: any = {
  0: 'KACY',
  1: 'KACY',
  2: 'KACY',
  4: 'aHYPE',
  5: 'LP'
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
  stakeWithVotingPower
}: IStakingProps) => {
  const [isModalStaking, setIsModalStaking] = React.useState<boolean>(false)
  const [isModalUnstaking, setIsModalUnstaking] = React.useState<boolean>(false)
  const [isModalCancelUnstake, setIsModalCancelUnstake] =
    React.useState<boolean>(false)
  const [isModalRequestUnstake, setIsModalRequestUnstake] =
    React.useState<boolean>(false)
  const [isModalWallet, setIsModaWallet] = React.useState<boolean>(false)
  const [isDetails, setIsDetails] = React.useState<boolean>(false)

  const [isApproveKacyStaking, setIsApproveKacyStaking] =
    React.useState<boolean>(false)
  const [priceLPToken, setPriceLPToken] = React.useState<IPriceLPToken>({
    priceLP: Big(0),
    kacy: Big(0),
    aHYPE: Big(0)
  })

  const [withdrawDelay, setWithdrawDelay] = React.useState<number>(0)
  const [kacyEarned, setKacyEarned] = React.useState<BigNumber>(
    new BigNumber(0)
  )

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
    'Fuji',
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

    const avaxInDollar = Big(reservesDaiAvax._reserve0).div(
      Big(reservesDaiAvax._reserve1)
    )
    const kacyInDollar = avaxInDollar.mul(
      Big(reservesKacyAvax._reserve1).div(reservesKacyAvax._reserve0)
    )

    const allAVAXDollar = Big(reservesKacyAvax._reserve1).mul(avaxInDollar)
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
        aHYPE: data?.pool.price_usd
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
  }, [infoStaked.stakingToken, pid])

  React.useEffect(() => {
    if (!web3.currentProvider) {
      return
    }

    const token = ERC20(infoStaked.stakingToken)
    token
      .allowance(Staking, userWalletAddress)
      .then((response: boolean) => setIsApproveKacyStaking(response))
  }, [userWalletAddress, infoStaked.stakingToken])

  return (
    <>
      <S.StakeCard>
        <S.BorderGradient stakeWithVotingPower={stakeWithVotingPower}>
          <S.InterBackground stakeWithVotingPower={stakeWithVotingPower}>
            {symbol === 'kacy' ? (
              <img src="assets/logo-kacy-stake.svg" alt="" />
            ) : null}
            {symbol === 'ahype' ? (
              <img
                src="assets/avalanche_social_index_logo.svg"
                alt=""
                style={{ width: '58px' }}
              />
            ) : null}
            {symbol === 'lp' ? (
              <img src="assets/kap.svg" alt="" width={144} />
            ) : null}
            <S.IntroStaking>
              <S.APR>
                <Tippy content="The Annual Percentage Rate is the yearly rate earned not taking compounding into account">
                  <S.TooltipAPR>
                    <Image src={infoCyanIcon} alt="Explanation" />
                  </S.TooltipAPR>
                </Tippy>
                <h4>APR</h4>
              </S.APR>
              <S.Percentage>
                {infoStaked.hasExpired ? 0 : BNtoDecimal(infoStaked.apr, 0)}%
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
                    href="https://app.pangolin.exchange/#/add/AVAX/0x1d7C6846F033e593b4f3f21C39573bb1b41D43Cb"
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
                  {infoStaked.votingMultiplier || 1}
                  <span>/$KACY</span>
                </p>
              </S.InfoPool>
              <S.InfoPool>
                <h3>Withdraw delay</h3>
                <S.Days>
                  <p>
                    {infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                      ? infoStaked.withdrawDelay / 60
                      : infoStaked.withdrawDelay / 60 / 60 / 24}
                    <span>
                      {infoStaked.withdrawDelay / 60 / 60 / 24 < 1
                        ? ' min'
                        : ' days'}
                    </span>
                  </p>
                  <Tippy content="Time your asset will remain locked after you request the withdraw.">
                    <S.TooltipAPR>
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
            />
            <S.ButtonContainer stakeWithVotingPower={stakeWithVotingPower}>
              {userWalletAddress ? (
                <>
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
                      size="claim"
                      backgroundSecondary
                      disabledNoEvent={kacyEarned.toString() === '0'}
                      type="button"
                      text="Claim"
                      // fullWidth
                      onClick={() => getReward(pid, rewardClaimCallback())}
                    />
                  </S.Claim>
                  <S.StakeContainer>
                    {infoStaked.unstake ? (
                      <>
                        <Button
                          size="huge"
                          backgroundSecondary
                          type="button"
                          text="Cancel withdraw"
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
                        {isApproveKacyStaking ? (
                          infoStaked.withdrawDelay !== '0' &&
                          infoStaked.withdrawable ? (
                            <Button
                              size="huge"
                              backgroundSecondary
                              type="button"
                              text={`Stake ${staked[pid]}`}
                              fullWidth
                              onClick={() => setIsModalCancelUnstake(true)}
                            />
                          ) : (
                            <Button
                              size="huge"
                              backgroundSecondary
                              type="button"
                              text={`Stake ${staked[pid]}`}
                              fullWidth
                              onClick={() => setIsModalStaking(true)}
                            />
                          )
                        ) : (
                          <Button
                            size="huge"
                            backgroundSecondary
                            type="button"
                            text="Approve Contract"
                            fullWidth
                            onClick={handleApproveKacy}
                          />
                        )}
                        {infoStaked.yourStake.toString() !== '0' &&
                        infoStaked.withdrawable ? (
                          <Button
                            size="huge"
                            backgroundBlack
                            type="button"
                            text="Withdraw"
                            fullWidth
                            onClick={() => setIsModalUnstaking(true)}
                          />
                        ) : (
                          <Button
                            size="huge"
                            backgroundBlack
                            disabledNoEvent={
                              infoStaked.yourStake.toString() === '0'
                            }
                            type="button"
                            text="Request withdraw"
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
                  size="huge"
                  backgroundSecondary
                  type="button"
                  text="Connect Wallet"
                  fullWidth
                  onClick={() => setIsModaWallet(true)}
                />
              )}
              <S.ButtonDetails
                type="button"
                isDetails={isDetails}
                isConnect={!!userWalletAddress}
                onClick={() => {
                  matomoEvent(
                    'click-details',
                    `${isDetails ? 'details-open' : 'details-closed'}`
                  )
                  setIsDetails(!isDetails)
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
        </S.BorderGradient>
      </S.StakeCard>
      <ModalStaking
        modalOpen={isModalStaking}
        setModalOpen={setIsModalStaking}
        pid={pid}
        decimals={decimals}
        stakingToken={infoStaked.stakingToken}
        productCategories={productCategories}
        symbol={staked[pid]}
      />
      <ModalUnstaking
        modalOpen={isModalUnstaking}
        setModalOpen={setIsModalUnstaking}
        pid={pid}
        decimals={decimals}
        stakingToken={infoStaked.stakingToken}
        productCategories={productCategories}
        symbol={staked[pid]}
      />
      <ModalCancelUnstake
        modalOpen={isModalCancelUnstake}
        setModalOpen={setIsModalCancelUnstake}
        setIsModalStaking={setIsModalStaking}
        pid={pid}
        staking={infoStaked.withdrawDelay !== '0' && infoStaked.withdrawable}
        symbol={symbol}
      />
      <ModalRequestUnstake
        modalOpen={isModalRequestUnstake}
        setModalOpen={setIsModalRequestUnstake}
        pid={pid}
        withdrawDelay={withdrawDelay}
        votingMultiplier={infoStaked.votingMultiplier}
        yourStake={infoStaked.yourStake}
        symbol={symbol}
      />
      <ModalWalletConnect
        modalOpen={isModalWallet}
        setModalOpen={setIsModaWallet}
      />
    </>
  )
}

export default StakeCard
