import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'
import { useKacyData } from '@/hooks/query/useKacyData'

import { poolsKacy, poolsKacyFuji } from '../../../constants/pools'
import { env } from '@/env.mjs'

import Button from '../../../components/Button'
import LockPoolCard from './LockPoolCard'
import FadeInVertical from '../../../components/Animations/FadeInVertical'
import SectionSubtitle from '../../../components/SectionSubtitle'
import Paragraph from '../../../components/Paragraph'

import * as S from './styles'

const LockVote = () => {
  const router = useRouter()
  const { data } = useKacyData()
  const { trackEvent } = useMatomo()

  return (
    <S.Wrapper>
      <FadeInVertical threshold={0.5}>
        <S.Header>
          <SectionSubtitle text="KACY’s LockVote Feature" />
          <Paragraph
            text="To vote on proposals, choose between different staking options. The
            more time you lock your tokens for, the more voting power you get."
          />
        </S.Header>
      </FadeInVertical>

      <FadeInVertical threshold={0.5}>
        <div className="flex">
          <S.LockPoolContainer>
            <S.LockPoolContent>
              {env.NEXT_PUBLIC_MASTER === '1'
                ? poolsKacy.map(pool => (
                    <LockPoolCard
                      key={pool.pid}
                      pid={pool.pid}
                      address={pool.address}
                      kacyData={data}
                    />
                  ))
                : poolsKacyFuji.map(pool => (
                    <LockPoolCard
                      key={pool.pid}
                      pid={pool.pid}
                      address={pool.address}
                      kacyData={data}
                    />
                  ))}
            </S.LockPoolContent>
            <S.Desc>
              <div className="arrow-curved-down">
                <Image
                  src="/assets/images/arrow-curved-down.svg"
                  layout="fill"
                  alt="Arrow curved down"
                />
              </div>
              Once you unstake your tokens from a lock pool, your funds will go
              through a <strong>“unstaking period”</strong> in which you will
              <strong>
                {' '}
                cease to gain rewards and have to wait the specified delay
                period to receive your tokens.
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
                  alt="Kacy logo"
                />
              }
              backgroundPrimary
              text="Stake KACY"
              href="https://app.kassandra.finance/farm?tab=stake"
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-link | LockVote | ${router.pathname}`,
                  name: 'Stake KACY'
                })
              }
            />
          </S.LockPoolContainer>
          <S.Connector>
            <Image
              src="/assets/images/right-connector.svg"
              alt="Right connector"
              layout="fill"
            />
          </S.Connector>
        </div>
      </FadeInVertical>
    </S.Wrapper>
  )
}

export default LockVote
