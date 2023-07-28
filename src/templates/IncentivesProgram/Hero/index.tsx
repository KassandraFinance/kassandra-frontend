import useMatomo from '@/hooks/useMatomo'
import useMatomoEcommerce from '@/hooks/useMatomoEcommerce'

import Button from '@/components/Button'
import Paragraph from '@/components/Paragraph'

import * as S from './styles'

const Hero = () => {
  const { trackEventFunction } = useMatomoEcommerce()
  useMatomo({
    trackPageView: true
  })

  return (
    <S.HeroWrapper>
      <S.SectionTitle>join kassandra&apos;s</S.SectionTitle>
      <S.Title>Managers Incentive Program</S.Title>
      <Paragraph
        className="heroParagraph"
        text="Stand out as an incentivized manager, elevate your profits, and enjoy exclusive benefits, including highlighted placement for your portfolio, active marketing support from our team, and staking rewards for your investors in our native KACY token."
      />
      <Button
        className="heroButton"
        as="a"
        href="https://tally.so/r/3XrKdz"
        target="_blank"
        text="Submit Your Idea"
        size="huge"
        backgroundPrimary
        onClick={() =>
          trackEventFunction(
            'click-on-button',
            'Submit Your Idea',
            `Hero-Incentives-program`
          )
        }
      />
    </S.HeroWrapper>
  )
}

export default Hero
