import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

const SocialMidia = () => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.SocialMidia>
      <li>
        <S.SocialMidiaContent
          href="https://discord.gg/fAqpbP6tFw"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'discord'
            })
          }
        >
          <img
            src="/assets/socialMidia/discord.svg"
            alt="Join our Discord community"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="https://t.me/KassandraDAO"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'telegram'
            })
          }
        >
          <img
            src="/assets/socialMidia/telegram.svg"
            alt="Join our Telegram group"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="https://github.com/KassandraFinance"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'github'
            })
          }
        >
          <img
            src="/assets/socialMidia/github.svg"
            alt="Access our GitHub repository"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="https://kassandrafoundation.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'medium'
            })
          }
        >
          <img
            src="/assets/socialMidia/medium.svg"
            alt="Read our Medium blog"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="https://twitter.com/dao_kassandra"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'twitter'
            })
          }
        >
          <img
            src="/assets/socialMidia/twitter.svg"
            alt="Follow our Twitter feed"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="http://gov.kassandra.finance/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'discourse'
            })
          }
        >
          <img
            src="/assets/socialMidia/discourse.svg"
            alt="Follow our Discourse"
            width="20"
            height="20"
          />
        </S.SocialMidiaContent>
      </li>
      <li>
        <S.SocialMidiaContent
          href="https://kassandra-1.gitbook.io/kassandras-onboarding-docs/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent({
              category: router.pathname,
              action: `click-on-link | SocialMidia | ${router.pathname}`,
              name: 'gitbook'
            })
          }
        >
          <img
            src="/assets/logos/gitbook.svg"
            alt="Read our GitBook"
            width="24"
            height="24"
          />
        </S.SocialMidiaContent>
      </li>
    </S.SocialMidia>
  )
}

export default SocialMidia
