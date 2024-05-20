import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image, { StaticImageData } from 'next/image'

import useMatomo from '@/hooks/useMatomo'

import NewButton from '@/components/NewButton'
import Paragraph from '../../../components/Paragraph'
import SectionTitle from '../../../components/SectionTitle'
import Subtitle from '../../../components/Subtitle'

import { ArrowRightCircle } from '@/Icons/Arrow-right-circle'

import * as S from './styles'

type Links = {
  getStarted: string
  learnMore: string
}

interface ISectionCardProps {
  number: string
  title: string
  color: string
  subtitle: string
  text: string
  links: Links
  img: StaticImageData
  alt: string
  reverseLayout?: boolean
}

const SectionCard = ({
  number,
  title,
  color,
  subtitle,
  text,
  links,
  img,
  alt,
  reverseLayout = false
}: ISectionCardProps) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Container reverseLayout={reverseLayout}>
      <S.TextContainer>
        <SectionTitle
          title={title}
          titleColor={color}
          titleNumber={number}
          as="h2"
        />

        <Subtitle text={subtitle} as="h3" />
        <Paragraph text={text} />

        <S.ButtonWrapper>
          <Link href={links.getStarted} passHref>
            <NewButton
              className="btn"
              as="a"
              text="Get Started"
              size="huge"
              background="secondary"
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-button | ${number}-${title} | ${router.pathname}`,
                  name: 'Get Started'
                })
              }
            />
          </Link>

          <Link href={links.learnMore} passHref>
            <NewButton
              as="a"
              size="large"
              text="Learn More"
              background="white"
              icon={<ArrowRightCircle />}
              onClick={() =>
                trackEvent({
                  category: router.pathname,
                  action: `click-on-button | ${number}-${title} | ${router.pathname}`,
                  name: 'Learn More'
                })
              }
            />
          </Link>
        </S.ButtonWrapper>
      </S.TextContainer>

      <Image src={img} alt={alt} />
    </S.Container>
  )
}

export default SectionCard
