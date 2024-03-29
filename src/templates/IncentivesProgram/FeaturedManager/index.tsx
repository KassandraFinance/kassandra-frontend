import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import FeaturedCard from './FeaturedCard'
import Paragraph from '@/components/Paragraph'
import SectionSubtitle from '@/components/SectionSubtitle'
import FadeIn from '@/components/Animations/FadeIn'
import Button from '@/components/Button'
import FadeInVertical from '@/components/Animations/FadeInVertical'

import { LineGradient } from '@/Icons'

import * as S from './styles'

const dataFeature = [
  {
    cardNumber: '1',
    title: 'Submit Your Pool',
    paragraph:
      "Got an innovative themed pool in mind? Share it with us! Whether it's a unique sector, an innovative strategy, or an emerging trend, we want to hear it all."
  },
  {
    cardNumber: '2',
    title: 'Get Feedback',
    paragraph:
      'Align your pool suggestion with the parameters identified in our market research. Remember, our goal is to create portfolios that cover different profiles of investors in the market.'
  },
  {
    cardNumber: '3',
    title: 'Receive Incentives',
    paragraph:
      'By getting accepted into the Program, you will receive featured highlighted placement, active marketing support, and $KACY as rewards for your investors, thus enhancing your management fees.'
  }
]

const FeaturedManager = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.FeaturedManager>
      <FadeIn threshold={0.4}>
        <S.Line>
          <LineGradient width={2} height={300} />
        </S.Line>

        <S.FeaturedManagerTitleWrapper>
          <SectionSubtitle text="Become a Featured Manager" />
          <Paragraph text="It's easy to unleash your pool's potential with our 3-step program, empowering you to create a more innovative, better tailored, and highly lucrative tokenized portfolio." />
        </S.FeaturedManagerTitleWrapper>
      </FadeIn>

      <FadeInVertical threshold={0.4}>
        <S.FeaturedCardContainer>
          <S.FeaturedCardWrapper>
            {dataFeature.map(item => {
              return (
                <FeaturedCard
                  key={item.cardNumber}
                  cardNumber={item.cardNumber}
                  paragraph={item.paragraph}
                  title={item.title}
                />
              )
            })}
          </S.FeaturedCardWrapper>
          <Button
            className="get-started"
            backgroundPrimary
            text="Get Started"
            as="a"
            href="https://tally.so/r/3XrKdz"
            target="_blank"
            onClick={() => {
              trackEvent({
                category: router.pathname,
                action: `click-on-button | FeaturedManager | ${router.pathname}`,
                name: 'Get Started'
              })
            }}
          />
        </S.FeaturedCardContainer>
      </FadeInVertical>
    </S.FeaturedManager>
  )
}

export default FeaturedManager
