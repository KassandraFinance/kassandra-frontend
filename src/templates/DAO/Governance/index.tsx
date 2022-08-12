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
          hands
        </Heading>
        <Description>
          Don’t like something? Change it. Direct where Kassandra Foundation
          will allocate funds, such as development and innovation. You’ll also
          be able to change curated funds. Nothing is absolute; community has
          the final say.
        </Description>
        <Button
          as="a"
          className="button"
          icon={
            <Image
              src="/assets/icons/arrow-right-circle.svg"
              width={18}
              height={18}
            />
          }
          backgroundSecondary
          text="Explore Governance"
          size="large"
          href="https://app.kassandra.finance/gov"
        />
      </S.Text>
      <S.Image>
        <img src="/assets/images/proposal-img.png" />
      </S.Image>
    </S.Wrapper>
  )
}

export default Governance
