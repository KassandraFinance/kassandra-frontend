import ScrollAnimation from '../ScrollAnimation'
import Paragraph from '../Paragraph'
import Subtitle from '../Subtitle'
import SectionTitle from '../SectionTitle'

import * as S from './styles'

interface IHeroProps {
  titleNumber: string
  title: string
  titleColor: string
  subTitle: string
  description: string
  backgroundImg?: string
  backgroundImgHight?: string
  children: JSX.Element
}

const Hero = ({
  titleNumber,
  title,
  titleColor,
  subTitle,
  description,
  backgroundImg,
  backgroundImgHight,
  children
}: IHeroProps) => {
  return (
    <S.Hero>
      {backgroundImg && backgroundImgHight && (
        <S.BackgroundImage
          backgroundImg={backgroundImg}
          backgroundImgHight={backgroundImgHight}
        />
      )}

      <S.TextContainer>
        <SectionTitle
          title={title}
          titleColor={titleColor}
          titleNumber={titleNumber}
        />

        <Subtitle text={subTitle} as="h2" />
        <Paragraph text={description} fontWeight={400} />

        {children}
      </S.TextContainer>

      <ScrollAnimation />
    </S.Hero>
  )
}

export default Hero
