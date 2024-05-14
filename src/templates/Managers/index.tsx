import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import Hero from '../../components/Hero'
import FundManager from './FundManager'
import ChangeAllocations from './ChangeAllocations'
import AllocationsInexpensive from './AllocationsInexpensive'
import ManagersInterface from './ManagersInterface'
import CreateFund from './CreateFunds'
import Button from '../../components/Button'
import SectionTransparentCard from '@/components/SectionTransparentCard'
import CallToActionEndPage from '@/components/CallToActionEndPage'
import FadeInVertical from '@/components/Animations/FadeInVertical'

import { ArrowRightCircle } from '@/Icons/Arrow-right-circle'

import * as S from './styles'

const Managers = () => {
  const { trackEvent } = useMatomo({
    trackPageView: true
  })
  const router = useRouter()

  return (
    <>
      <S.ManagerMainContainer>
        <S.ManagerContainer>
          <S.ManagerContent>
            <Hero
              titleNumber="02"
              title="manager"
              titleColor="#26dbdb"
              subTitle="Earn money managing assets in a uniquely innovative hub"
              description="Be part of a community of skilled managers creating smart managed pools and get paid for it"
              backgroundImg="/assets/images/manager-hero.svg"
              backgroundImgHight="calc(100vh - 7.6rem)"
            >
              <Button
                as="a"
                href="https://app.kassandra.finance/manage"
                target="_blank"
                text="Create your Portfolio"
                size="huge"
                backgroundPrimary
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-button | Home-Managers | ${router.pathname}`,
                    name: 'Create your Portfolio'
                  })
                }
                icon={
                  <img
                    src="/assets/utilities/go-to-page.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                }
              />
            </Hero>
            <FundManager />

            <ChangeAllocations />

            <ManagersInterface />

            <AllocationsInexpensive />

            <S.SectionTransparentCardContainer>
              <FadeInVertical threshold={0.5}>
                <SectionTransparentCard
                  title="Get onboarded"
                  paragraph="Kassandra has a ready documentation to answer all your doubts. You can also enter our discord community to discuss your ideas and get supported."
                  firstButton={{
                    text: 'Read our Documentacion',
                    type: 'primary',
                    href: 'https://kassandra-1.gitbook.io/kassandras-onboarding-docs'
                  }}
                  secondButton={{
                    text: 'Enter Kassandra Community',
                    type: 'white',
                    href: '/community'
                  }}
                />
              </FadeInVertical>
            </S.SectionTransparentCardContainer>

            <CreateFund />
          </S.ManagerContent>
        </S.ManagerContainer>
      </S.ManagerMainContainer>

      <S.CallToActionEndPageContainer>
        <CallToActionEndPage
          text="The Managers Incentive Program"
          firstButton={{
            text: 'Learn More',
            type: 'primary',
            href: 'https://app.kassandra.finance/manage',
            icon: <ArrowRightCircle />
          }}
        ></CallToActionEndPage>
      </S.CallToActionEndPageContainer>
    </>
  )
}

export default Managers
