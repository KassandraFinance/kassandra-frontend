import Image from 'next/image'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'

import FadeInHorizontal from '../Animations/FadeInHorizontal'
import Paragraph from '../Paragraph'
import Subtitle from '../Subtitle'

import logoSkew from '../../../public/assets/images/logo-big-skew.png'

import * as S from './styles'

interface IContributeProps {
  title: string
  text: string
}

const Contribute = ({ title, text }: IContributeProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.ContributeContainer>
      <S.ContributeBacground />

      <FadeInHorizontal threshold={0.5}>
        <S.Wrapper>
          <S.TextWrapper>
            <Subtitle text={title} as="h2" />
            <Paragraph text={text} />

            <S.ButtonContainer>
              <S.Button
                variant="telegram"
                target="_blank"
                rel="noopener noreferrer"
                href="https://t.me/KassandraDAO"
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-button | Contribute component | ${router.pathname}`,
                    name: 'Join Our Telegram'
                  })
                }
              >
                <Image
                  src="/assets/icons/telegram.svg"
                  width={18}
                  height={13}
                  alt="Telegram"
                />
                <span>Join Our Telegram</span>
              </S.Button>

              <S.Button
                variant="discord"
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.com/invite/fAqpbP6tFw"
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-button | Contribute component | ${router.pathname}`,
                    name: 'Join Our Discord'
                  })
                }
              >
                <Image
                  src="/assets/icons/discord.svg"
                  width={18}
                  height={13}
                  alt="Discord"
                />
                <span>Join Our Discord</span>
              </S.Button>
            </S.ButtonContainer>
          </S.TextWrapper>

          <Image src={logoSkew} alt="Kacy logo skewed with light" />
        </S.Wrapper>
      </FadeInHorizontal>
    </S.ContributeContainer>
  )
}

export default Contribute
