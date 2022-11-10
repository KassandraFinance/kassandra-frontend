import Image from 'next/image'

import FadeInHorizontal from '../Animations/FadeInHorizontal'
import Paragraph from '../Paragraph'
import Subtitle from '../Subtitle'

import logoSkew from '../../../public/assets/images/logo-big-skew.png'

import * as S from './styles'

interface IContributeProps {
  title: string;
  text: string;
}

const Contribute = ({ title, text }: IContributeProps) => {
  return (
    <S.ContributeContainer>
      <S.ContributeBacground />

      <FadeInHorizontal threshold={0.5}>
        <S.Wrapper>
          <S.TextWrapper>
            <Subtitle text={title} as="h5" />
            <Paragraph text={text} />

            <S.ButtonContainer>
              <S.Button
                variant="telegram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/KassandraDAO"
              >
                <Image
                  src="/assets/icons/telegram.svg"
                  width={18}
                  height={13}
                />
                <span>Join Our Telegram</span>
              </S.Button>

              <S.Button
                variant="discord"
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/fAqpbP6tFw"
              >
                <Image src="/assets/icons/discord.svg" width={18} height={13} />
                <span>Join Our Discord</span>
              </S.Button>
            </S.ButtonContainer>
          </S.TextWrapper>

          <Image src={logoSkew} />
        </S.Wrapper>
      </FadeInHorizontal>
    </S.ContributeContainer>
  )
}

export default Contribute
