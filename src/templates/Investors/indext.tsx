import { useRouter } from 'next/router'
import Link from 'next/link'

import useMatomo from '@/hooks/useMatomo'
import Hero from '../../components/Hero'
import Button from '../../components/Button'
import Advantages from './Advantages'
import Partners from './Partners'
import FadeIn from '@/components/Animations/FadeIn'
import NewButton from '@/components/NewButton'
import FAQ from './FAQ'
import CallToActionEndPage from '@/components/CallToActionEndPage'

import * as S from './styles'

const Investors = () => {
  const { trackEvent } = useMatomo({
    trackPageView: true
  })
  const router = useRouter()

  return (
    <>
      <S.Investors>
        <Hero
          titleNumber="01"
          title="investors"
          titleColor="#ffbf00"
          subTitle="Diversify with simple steps through managers and their strategies"
          description="Social trading made safe: know who you are delegating your money to, split your
        exposure and change strategies anytime to save money or scale in
        positions."
          backgroundImg="/assets/images/hero-investor.png"
          backgroundImgHight="calc(100vh - 10rem)"
        >
          <Button
            className="start-investing"
            backgroundPrimary
            size="huge"
            text="Start Investing"
            icon={
              <img src="/assets/utilities/go-to-page.svg" alt="go to page" />
            }
            as="a"
            href="https://app.kassandra.finance"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-button | Hero-Investors | ${router.pathname}`,
                name: 'Start Investing'
              })
            }
          />
        </Hero>

        <Advantages />

        <Partners />

        <FadeIn threshold={0.5}>
          <FAQ />
        </FadeIn>
      </S.Investors>

      <S.CallToActionEndPageContainer>
        <CallToActionEndPage text="Ready to join?">
          <S.ButtonWrapper>
            <Link href="/" passHref>
              <NewButton as="a" text="Join Now" background="primary" />
            </Link>
            <Link href="/" passHref>
              <NewButton as="a" text="Get Started" background="white" />
            </Link>
          </S.ButtonWrapper>
        </CallToActionEndPage>
      </S.CallToActionEndPageContainer>
    </>
  )
}

export default Investors
