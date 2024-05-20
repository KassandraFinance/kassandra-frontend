import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  URL_KASSANDRA_DISCORD,
  URL_KASSANDRA_TELEGRAM
} from '@/constants/tokenAddresses'

import useMatomo from '@/hooks/useMatomo'

import NewButton, { IBackgroudProps } from '../NewButton'

import * as S from './styles'

type ButtonType = {
  text: string
  href: string
  type: IBackgroudProps
  icon?: JSX.Element
}

interface ICallToActionEndPageProps {
  text: string
  firstButton?: ButtonType
  secondButton?: ButtonType
  socialsButtons?: boolean
}

const CallToActionEndPage = ({
  text,
  firstButton,
  secondButton,
  socialsButtons
}: ICallToActionEndPageProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  function handleClickSocialButton(name: string) {
    trackEvent({
      category: router.pathname,
      action: `click-on-button | Contribute component | ${router.pathname}`,
      name: `Join Our ${name}`
    })
  }

  return (
    <S.CallToActionEndPage>
      <p>{text}</p>

      {(firstButton || secondButton) && (
        <S.ButtonWrapper>
          {firstButton && (
            <Link href={firstButton.href} passHref>
              <NewButton
                as="a"
                text={firstButton.text}
                background={firstButton.type}
                icon={firstButton.icon}
                className="card-button"
              />
            </Link>
          )}

          {secondButton && (
            <Link href={secondButton.href} passHref>
              <NewButton
                as="a"
                text={secondButton.text}
                background={secondButton.type}
                icon={secondButton.icon}
                className="card-button"
              />
            </Link>
          )}
        </S.ButtonWrapper>
      )}

      {socialsButtons && (
        <S.SocialButtonWrapper>
          <S.SocialButton
            variant="telegram"
            target="_blank"
            rel="noopener noreferrer"
            href={URL_KASSANDRA_TELEGRAM}
            onClick={() => handleClickSocialButton('telegram')}
          >
            <Image
              src="/assets/icons/telegram.svg"
              width={18}
              height={13}
              alt="Telegram"
            />
            <span>Join Our Telegram</span>
          </S.SocialButton>

          <S.SocialButton
            variant="discord"
            target="_blank"
            rel="noopener noreferrer"
            href={URL_KASSANDRA_DISCORD}
            onClick={() => handleClickSocialButton('Discord')}
          >
            <Image
              src="/assets/icons/discord.svg"
              width={18}
              height={13}
              alt="Discord"
            />
            <span>Join Our Discord</span>
          </S.SocialButton>
        </S.SocialButtonWrapper>
      )}
    </S.CallToActionEndPage>
  )
}
export default CallToActionEndPage
