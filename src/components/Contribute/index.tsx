import Image from 'next/image'

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

      <S.Wrapper>
        <S.TextWrapper>
          <S.ContributeHeading>{title}</S.ContributeHeading>

          <S.Text>{text}</S.Text>

          <S.ButtonContainer>
            <S.Button
              variant="telegram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://t.me/KassandraDAO"
            >
              <Image src="/assets/icons/telegram.svg" width={18} height={13} />
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
    </S.ContributeContainer>
  )
}

export default Contribute
