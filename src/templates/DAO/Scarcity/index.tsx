import Image from 'next/image'
import { Description, Heading } from '../styles'
import * as S from './styles'

const Scarcity = () => {
  return (
    <S.Wrapper>
      <Heading as="h2" level="2">
        KACY’s Programmed Scarcity
      </Heading>
      <Description>
        Every new investment product on Kassandra must hold at least 5% of KACY
        tokens as part of its portfolio.
      </Description>
      <S.ImageWrapper>
        <Image src="/assets/images/scarcity.png" layout="fill" />
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default Scarcity
