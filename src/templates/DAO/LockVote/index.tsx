import Image from 'next/image'
import React from 'react'
import { poolsKacy, poolsKacyFuji } from '../../../constants/pools'

import Button from '../../../components/Button'
import LockPoolCard from './LockPoolCard'

import { Description, Heading } from '../styles'
import * as S from './styles'

const LockVote = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <Heading as="h2" level="2">
          KACY’s LockVote Feature
        </Heading>
        <Description>
          To vote on proposals, choose between different staking options. The
          more time you lock your tokens for, the more voting power you get.
        </Description>
      </S.Header>
      <div className="flex">
        <S.LockPoolContainer>
          {process.env.NEXT_PUBLIC_MASTER === '1'
            ? poolsKacy.map(pool => (
                <LockPoolCard
                  key={pool.pid}
                  pid={pool.pid}
                  address={pool.address}
                  symbol={pool.symbol}
                  properties={{ ...pool.properties }}
                  stakeWithVotingPower={pool.stakeWithVotingPower}
                  stakeWithLockPeriod={pool.stakeWithLockPeriod}
                  isLP={pool.isLP}
                />
              ))
            : poolsKacyFuji.map(pool => (
                <LockPoolCard
                  key={pool.pid}
                  pid={pool.pid}
                  address={pool.address}
                  symbol={pool.symbol}
                  properties={{ ...pool.properties }}
                  stakeWithVotingPower={pool.stakeWithVotingPower}
                  stakeWithLockPeriod={pool.stakeWithLockPeriod}
                  isLP={pool.isLP}
                />
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
            text="Start Buying Kacy"
          />
        </S.LockPoolContainer>
        <S.LockPoolMobileContainer>
          <S.LockPoolMobile>
            <S.HeaderMobile>
              <h4>No Lock Pool</h4>
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
                <strong>132,94%</strong>
              </S.Item>
              <S.Item>
                <span>VOTING POWER</span>
                <span>
                  <strong>2</strong> / $KACY
                </span>
              </S.Item>
              <S.Item>
                <span>WITHDRAW DELAY</span>
                <span>
                  <strong>15 </strong>
                  DAYS
                  <Image
                    src="/assets/utilities/warning-gray.svg"
                    width={18}
                    height={18}
                  />
                </span>
              </S.Item>
            </S.Items>
          </S.LockPoolMobile>
          <S.LockPoolMobile>
            <S.HeaderMobile>
              <h4>No Lock Pool</h4>
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
                <strong>132,94%</strong>
              </S.Item>
              <S.Item>
                <span>VOTING POWER</span>
                <span>
                  <strong>2</strong> / $KACY
                </span>
              </S.Item>
              <S.Item>
                <span>WITHDRAW DELAY</span>
                <span>
                  <strong>15 </strong>
                  DAYS
                  <Image
                    src="/assets/utilities/warning-gray.svg"
                    width={18}
                    height={18}
                  />
                </span>
              </S.Item>
            </S.Items>
          </S.LockPoolMobile>
          <S.LockPoolMobile>
            <S.HeaderMobile>
              <h4>No Lock Pool</h4>
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
                <strong>132,94%</strong>
              </S.Item>
              <S.Item>
                <span>VOTING POWER</span>
                <span>
                  <strong>2</strong> / $KACY
                </span>
              </S.Item>
              <S.Item>
                <span>WITHDRAW DELAY</span>
                <span>
                  <strong>15 </strong>
                  DAYS
                  <Image
                    src="/assets/utilities/warning-gray.svg"
                    width={18}
                    height={18}
                  />
                </span>
              </S.Item>
            </S.Items>
          </S.LockPoolMobile>
        </S.LockPoolMobileContainer>
        <S.Connector>
          <Image src="/assets/images/right-connector.svg" layout="fill" />
        </S.Connector>
      </div>
    </S.Wrapper>
  )
}

export default LockVote
