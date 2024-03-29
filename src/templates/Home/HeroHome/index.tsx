import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import ScrollAnimation from '../../../components/ScrollAnimation'
import Button from '../../../components/Button'
import HeroBackGround from './HeroBackGround'
import HeroText from './HeroText'
import DaoData from './DaoData'

import * as S from './styles'

const HeroHome = () => {
  const router = useRouter()
  const { trackEvent } = useMatomo({
    trackPageView: true
  })

  return (
    <S.Hero>
      <HeroBackGround />

      <HeroText />

      <Button
        as="a"
        className="btn"
        text="Start Investing"
        icon={
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12.2L12.2 8.99999L9 5.79999"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.7998 9H12.1998"
              stroke="#F1F0F1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
        size="huge"
        backgroundPrimary
        href="https://app.kassandra.finance"
        onClick={() =>
          trackEvent({
            category: router.pathname,
            action: `click-on-link | Hero-Home | ${router.pathname}`,
            name: 'Start Investing'
          })
        }
      />

      <DaoData />

      <ScrollAnimation />
    </S.Hero>
  )
}

export default HeroHome
