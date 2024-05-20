import Image from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import HeroText from './HeroText'
import HeroBackGround from './HeroBackGround'
import NewButton from '@/components/NewButton'
import FadeInVertical from '@/components/Animations/FadeInVertical'

import appKassandraImage from '../../../../public/assets/images/app-kassandra-pool-page.png'

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

      <S.ButtonsWrapper>
        <NewButton
          as="a"
          className="btn"
          text="Start Investing"
          size="large"
          background="primary"
          href="https://app.kassandra.finance"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | Hero-Home | ${router.pathname}`,
              name: 'Start Investing'
            })
          }
        />

        <NewButton
          as="a"
          background="white"
          className="btn"
          text="Start Managing"
          size="large"
          href="https://app.kassandra.finance/manage"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | Hero-Home | ${router.pathname}`,
              name: 'Start Managing'
            })
          }
        />
      </S.ButtonsWrapper>

      <FadeInVertical threshold={0.3}>
        <S.ImageWrapper>
          <Image
            src={appKassandraImage}
            alt="app kassandra pool page"
            width={880}
            height={660}
          />
        </S.ImageWrapper>
      </FadeInVertical>
    </S.Hero>
  )
}

export default HeroHome
