import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Big from 'big.js'

import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

import Button from '../Button'
import ExternalLink from '../ExternalLink'
import ModalBuyKacy from '../Modals/ModalBuyKacy'

import arrowPositive from '../../../public/assets/notificationStatus/arrow-ascend.svg'
import arrowNegative from '../../../public/assets/notificationStatus/arrow-descend.svg'

import * as S from './styles'

interface IKacyMarketDataProps {
  price: number;
  marketCap: Big;
  supply: Big;
  kacyPercentage: number;
}

interface IKacyCardProps {
  kacyMarketData: IKacyMarketDataProps;
}

const KacyCard = ({ kacyMarketData }: IKacyCardProps) => {
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false)

  const { trackEventFunction } = useMatomoEcommerce()

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
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    'media-social',
                    'kacy-card'
                  )
                }
              >
                <Image
                  src="/assets/socialMidia/discord.svg"
                  alt="Join our Discord community"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://t.me/KassandraDAO" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    'media-social',
                    'kacy-card'
                  )
                }
              >
                <Image
                  src="/assets/socialMidia/telegram.svg"
                  alt="Join our Telegram group"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://github.com/KassandraFinance" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    'media-social',
                    'kacy-card'
                  )
                }
              >
                <Image
                  src="/assets/socialMidia/github.svg"
                  alt="Access our GitHub repository"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://kassandrafoundation.medium.com/" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    'media-social',
                    'kacy-card'
                  )
                }
              >
                <Image
                  src="/assets/socialMidia/medium.svg"
                  alt="Read our Medium blog"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
            <Link href="https://twitter.com/dao_kassandra" passHref>
              <a
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEventFunction(
                    'click-on-link',
                    'media-social',
                    'kacy-card'
                  )
                }
              >
                <Image
                  src="/assets/socialMidia/twitter.svg"
                  alt="Follow our Twitter feed"
                  width={24}
                  height={24}
                />
              </a>
            </Link>
          </S.SocialContainer>
        </S.KassandraInfo>
        <S.Card>
          <S.KassandraCardHeader>
            <S.ImageWrapper>
              <Image
                src="/assets/logos/kacy-96.svg"
                alt="kacy token"
                width={70}
                height={70}
              />
            </S.ImageWrapper>
          </S.KassandraCardHeader>
          <S.TextWrapper>
            <S.NameAndSymbol>
              <h1>Kassandra</h1>
              <h3>$KACY</h3>
            </S.NameAndSymbol>
            <p>BY KASSANDRA.FINANCE</p>
          </S.TextWrapper>
          <S.TokenInfo>
            <S.Price isValuePercentage={kacyMarketData.kacyPercentage > 0}>
              <span>USD {kacyMarketData.price.toFixed(2)}</span>
              <div>
                <Image
                  src={
                    kacyMarketData.kacyPercentage > 0
                      ? arrowPositive
                      : arrowNegative
                  }
                  alt=""
                  width={14}
                  height={14}
                />
                <p>{kacyMarketData.kacyPercentage.toFixed(2)}%</p>
              </div>
            </S.Price>
          </S.TokenInfo>
          <S.CardFooter>
            <Button
              size="large"
              backgroundPrimary
              as="a"
              text="Buy $KACY"
              onClick={() => setIsOpenModal(true)}
            />
            <ExternalLink
              onClick={() =>
                trackEventFunction(
                  'click-on-link',
                  'learn-more',
                  'kassandra-card'
                )
              }
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
              <img src="/assets/iconGradient/adjust.png" alt="" />
            </S.IconWrapper>
            <span>
              {' '}
              <b>Adjust</b> parameters and fees
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/iconGradient/deploy-invest.svg" alt="" />
            </S.IconWrapper>

            <span>
              {' '}
              <b>Deploy</b> new investment products
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/iconGradient/curating.svg" alt="" />
            </S.IconWrapper>
            <span>
              <b>Curate</b> whitelists for investable assets
            </span>
          </S.ResponsabilitiesCards>

          <S.ResponsabilitiesCards>
            <S.IconWrapper>
              <img src="/assets/iconGradient/approving.svg" alt="" />
            </S.IconWrapper>
            <span>
              <b>Approve</b> code changes and updates
            </span>
          </S.ResponsabilitiesCards>
        </S.MobileCards>
      </S.Responsabilities>
      <ModalBuyKacy modalOpen={isOpenModal} setModalOpen={setIsOpenModal} />
    </S.Container>
  )
}

export default KacyCard
