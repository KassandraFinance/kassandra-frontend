import Image from 'next/image'
import Button from '../../../components/Button'
import { Caption, Description, Heading } from '../styles'
import * as S from './styles'

const Governance = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <Caption color="magenta">GOVERNANCE</Caption>
        <Heading as="h2" level="2">
          Gather your friends and use voting power to take matters into your
          hands.
        </Heading>
        <Description>
          Don’t like something? Change it. Direct where Kassandra Foundation
          will allocate funds, such as development and innovation. You’ll also
          be able to change curated funds. Nothing is absolute; community has
          the final say.
        </Description>
        <Button backgroundSecondary text="Start Discuss Your Idea" />
      </S.Text>
      <S.Image>
        <Image src="/assets/images/proposal-img.png" layout="fill" />
      </S.Image>
    </S.Wrapper>
  )
}

export default Governance
