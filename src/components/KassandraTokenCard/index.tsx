import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Button from '../Button'
import ExternalLink from '../../components/ExternalLink'

import * as S from './styles'

const KassandraTokenCard = () => {
  const { trackEvent } = useMatomo()

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: 'kassandra-card',
      action: action,
      name: name
    })
  }
  return (
    <S.Container>
      <S.KassandraToken>
        <S.KassandraInfo>
          <p>KASSANDRA TOKEN</p>
          <h1>Be part of the Kassandra ecosystem with $KACY</h1>
          <span>
            Take the lead and join the future of decentralized fund management
            through our decentralized governance
          </span>
          <S.SocialContainer>
            <Link href="https://discord.gg/2uGEvqNnuq" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Discord.svg"
                  alt="Join our Discord community"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://t.me/KassandraDAO" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/telegram.svg"
                  alt="Join our Telegram group"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://github.com/KassandraFinance" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Github.svg"
                  alt="Access our GitHub repository"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://kassandrafoundation.medium.com/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Medium.svg"
                  alt="Read our Medium blog"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://twitter.com/dao_kassandra" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <Image
                  src="/assets/Twitter.svg"
                  alt="Follow our Twitter feed"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </S.SocialContainer>
        </S.KassandraInfo>
        <S.Card>
          <S.KasasndraCardHeader>
            <S.ImageWrapper>
              <Image
                src="/assets/token-96.svg"
                alt="kacy token"
                width={70}
                height={70}
              />
            </S.ImageWrapper>
          </S.KasasndraCardHeader>
          <S.TextWrapper>
            <S.NameAndSymbol>
              <h1>Kassandra</h1>
              <h3>$KACY</h3>
            </S.NameAndSymbol>
            <p>BY KASSANDRA.FINANCE</p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price>
              <span>USD 394.34</span>
              <div>
                <Image
                  src={'/assets/token-price.svg'}
                  alt=""
                  width={14}
                  height={14}
                />
                <p>6.41%</p>
              </div>
            </S.Price>
          </S.TokenInfo>
          <S.CardFooter>
            <Link href="/explore/ahype" passHref>
              <Button size="large" backgroundPrimary as="a" text="Buy $KACY" />
            </Link>
            <ExternalLink
              onClick={() => clickMatomoEvent('click-on-link', 'learn-more')}
              hrefLink="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
              text="Learn more"
            />
          </S.CardFooter>
        </S.Card>
      </S.KassandraToken>
      <S.Responsabilities>
        <S.ResponsabilitiesTitle>
          <S.ResponsabilitiesDivider />
          <h1>What will you build?</h1>
        </S.ResponsabilitiesTitle>

        <S.MobileCards>
          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/adjustIcon.svg" alt="" />
            </S.IconWrapper>
            <span>
              {' '}
              <b>Adjust</b> parameters and fees
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/deployInvest.svg" alt="" />
            </S.IconWrapper>

            <span>
              {' '}
              <b>Deploy</b> new investment products
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/curatingIcon.svg" alt="" />
            </S.IconWrapper>
            <span>
              <b>Curate</b> whitelists for investable assets
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/approvingIcon.svg" alt="" />
            </S.IconWrapper>
            <span>
              <b>Approve</b> code changes and updates
            </span>
          </S.ResponsabilitiesCards>
        </S.MobileCards>
      </S.Responsabilities>
    </S.Container>
  )
}

export default KassandraTokenCard
