import Image from 'next/image'
import { Heading } from '../styles'
import * as S from './styles'

const Contribute = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <Heading as="h2" level="1">
          Find out how you can contribute
        </Heading>
        <p>
          Accumulate $KACY by investing and contributing to Kassandra and earn a
          stake in all of our protocol fees.
        </p>
        <S.ButtonContainer>
          <S.Button variant="telegram">
            <Image src="/assets/icons/telegram.svg" width={18} height={13} />
            <span>Join Our Telegram</span>
          </S.Button>
          <S.Button variant="discord">
            <Image src="/assets/icons/discord.svg" width={18} height={13} />
            <span>Join Our Discord</span>
          </S.Button>
        </S.ButtonContainer>
      </S.Text>
      <S.LogoWrapper>
        <Image src="/assets/images/logo-big-skew.png" layout="fill" />
      </S.LogoWrapper>
    </S.Wrapper>
  )
}

export default Contribute
