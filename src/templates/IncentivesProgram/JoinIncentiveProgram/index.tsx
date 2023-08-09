import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Button from '@/components/Button'

import * as S from './styles'

const JoinIncentiveProgram = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.JoinIncentiveProgram>
      <S.Title>Join Kassandra&rsquo;s Incentive Program</S.Title>
      <S.ButtonWrapper>
        <Button
          className="join"
          backgroundPrimary
          text="Submit Your Pool"
          as="a"
          href="https://tally.so/r/3XrKdz"
          target="_blank"
          onClick={() => {
            trackEvent({
              category: router.pathname,
              action: `click-on-button | JoinIncentiveProgram | ${router.pathname}`,
              name: 'Submit Your Pool'
            })
          }}
        />
      </S.ButtonWrapper>
    </S.JoinIncentiveProgram>
  )
}

export default JoinIncentiveProgram
