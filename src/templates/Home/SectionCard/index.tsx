import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import Button from '../../../components/Button'
import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'
import SectionTitle from '../../../components/SectionTitle'
import Subtitle from '../../../components/Subtitle'

import * as S from './styles'

interface ISectionCardProps {
  number: string
  title: string
  color: string
  subtitle: string
  text: string
  btnText: string
  link: string
  img: StaticImageData
}

const SectionCard = ({
  number,
  title,
  color,
  subtitle,
  text,
  btnText,
  link,
  img
}: ISectionCardProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Container>
      <FadeInHorizontal threshold={0.5}>
        <S.TextContainer>
          <SectionTitle
            title={title}
            titleColor={color}
            titleNumber={number}
            as="h2"
          />

          <Subtitle text={subtitle} as="h3" />
          <Paragraph text={text} />

          <Link href={link} passHref>
            <a>
              <Button
                className="btn"
                text={btnText}
                size="huge"
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                      stroke="#F1F0F1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 12.2L12.2 8.99999L9 5.79999"
                      stroke="#F1F0F1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.7998 9H12.1998"
                      stroke="#F1F0F1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                backgroundSecondary
                onClick={() =>
                  trackEvent({
                    category: router.pathname,
                    action: `click-on-button | Buy one token | ${router.pathname}`,
                    name: `${btnText}`
                  })
                }
              />
            </a>
          </Link>
        </S.TextContainer>
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5}>
        <Image src={img} />
      </FadeInHorizontal>
    </S.Container>
  )
}

export default SectionCard
