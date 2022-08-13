import Image from 'next/image'
import React from 'react'
// import { poolsKacy, poolsKacyFuji } from '../../../constants/pools'

import Button from '../../../components/Button'
import LockPoolCard from './LockPoolCard'

import { Description, Heading } from '../styles'
import * as S from './styles'

const poolsKacy = [
  {
    type: 'No Lock Pool',
    withdrawDelay: '0 day',
    apr: '32',
    multiplier: '1'
  },
  {
    type: '15-Day Lock Pool',
    withdrawDelay: '15 days',
    apr: '54',
    multiplier: '2'
  },
  {
    type: '45-Day Lock Pool',
    withdrawDelay: '45 days',
    apr: '75',
    multiplier: '3'
  }
]

const LockVote = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading as="h2" level="2">
          KACY’s LockVote Feature
        </Heading>
        <Description>
          To vote on proposals, choose between different staking options. The
          more time you lock your tokens for, the more voting power you get
        </Description>
      </S.Header>
      <div className="flex">
        <S.LockPoolContainer>
          {process.env.NEXT_PUBLIC_MASTER === '1'
            ? poolsKacy.map(pool => (
                <LockPoolCard
                  key={pool.type}
                  type={pool.type}
                  withdrawDelay={pool.withdrawDelay}
                  apr={pool.apr}
                  multiplier={pool.multiplier}
                />
              ))
            : poolsKacy.map(pool => (
                <LockPoolCard
                  key={pool.type}
                  type={pool.type}
                  withdrawDelay={pool.withdrawDelay}
                  apr={pool.apr}
                  multiplier={pool.multiplier}
                />
                // <LockPoolCard
                //   key={pool.pid}
                //   pid={pool.pid}
                //   address={pool.address}
                //   symbol={pool.symbol}
                //   properties={{ ...pool.properties }}
                //   stakeWithVotingPower={pool.stakeWithVotingPower}
                //   stakeWithLockPeriod={pool.stakeWithLockPeriod}
                //   isLP={pool.isLP}
                // />
              ))}

          <S.Desc>
            <div className="arrow-curved-down">
              <Image src="/assets/images/arrow-curved-down.svg" layout="fill" />
            </div>
            Once you unstake your tokens from a lock pool, your funds will go
            through a <strong>“unstaking period”</strong> in which you will
            <strong>
              {' '}
              cease to gain rewards and have to wait the specified delay period
              to receive your tokens.
            </strong>
          </S.Desc>
          <Button
            as="a"
            className="button"
            size="huge"
            icon={
              <Image
                src="/assets/iconGradient/kacy.svg"
                width={18}
                height={18}
              />
            }
            backgroundPrimary
            text="Stake KACY"
            href="https://app.kassandra.finance/farm?tab=stake"
          />
        </S.LockPoolContainer>
        <S.LockPoolMobileContainer>
          {poolsKacy.map(pool => (
            <S.LockPoolMobile key={pool.type}>
              <S.HeaderMobile>
                <h4>{pool.type}</h4>
                <Image
                  src="/assets/logos/kacy-logo-rounded.svg"
                  width={48}
                  height={48}
                />
              </S.HeaderMobile>
              <S.Hr />
              <S.Items>
                <S.Item>
                  <span>
                    APR
                    <Image
                      src="/assets/utilities/warning-blue.svg"
                      width={18}
                      height={18}
                    />
                  </span>
                  <strong>{pool.apr}%</strong>
                </S.Item>
                <S.Item>
                  <span>VOTING POWER</span>
                  <span>
                    <strong>{pool.multiplier}</strong> / $KACY
                  </span>
                </S.Item>
                <S.Item>
                  <span>WITHDRAW DELAY</span>
                  <span>
                    <strong>{pool.withdrawDelay} </strong>
                    <Image
                      src="/assets/utilities/warning-gray.svg"
                      width={18}
                      height={18}
                    />
                  </span>
                </S.Item>
              </S.Items>
            </S.LockPoolMobile>
          ))}
        </S.LockPoolMobileContainer>
        <S.Connector>
          <Image src="/assets/images/right-connector.svg" layout="fill" />
        </S.Connector>
      </div>
    </S.Wrapper>
  )
}

export default LockVote
