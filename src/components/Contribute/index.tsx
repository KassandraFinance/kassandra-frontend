import Image from 'next/image'

import logoSkew from '../../../public/assets/images/logo-big-skew.png'

import * as S from './styles'

const Contribute = () => {
  return (
    <S.ContributeContainer>
      <S.ContributeBacground />

      <S.Wrapper>
        <S.Text>
          <h3>Find out how you can contribute</h3>
          <p>
            Accumulate $KACY by investing and contributing to Kassandra and earn
            a stake in all of our protocol fees.
          </p>
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
              target="_blank"
              rel="noopener noreferrer"
              variant="discord"
              href="https://discord.com/invite/fAqpbP6tFw"
            >
              <Image src="/assets/icons/discord.svg" width={18} height={13} />
              <span>Join Our Discord</span>
            </S.Button>
          </S.ButtonContainer>
        </S.Text>
        <S.LogoWrapper>
          <Image src={logoSkew} />
        </S.LogoWrapper>
      </S.Wrapper>
    </S.ContributeContainer>
  )
}

export default Contribute
