import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { InView } from 'react-intersection-observer'

import Button from '../../../components/Button'

import * as S from './styles'

interface ISectionCardProps {
  number: string;
  title: string;
  color: string;
  subtitle: string;
  text: string;
  btnText: string;
  link: string;
  img: StaticImageData;
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
  return (
    <S.Container>
      <InView threshold={0.5}>
        {({ inView, ref }) => {
          return (
            <S.TextContainer ref={ref} inView={inView}>
              <S.Title color={color}>
                {number}
                <S.Line color={color} /> {title}
              </S.Title>

              <S.SubTitle>{subtitle}</S.SubTitle>

              <S.Text>{text}</S.Text>

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
                  />
                </a>
              </Link>
            </S.TextContainer>
          )
        }}
      </InView>

      <InView threshold={0.5}>
        {({ inView, ref }) => {
          return (
            <S.ImgWrapper ref={ref} inView={inView}>
              <Image src={img} />
            </S.ImgWrapper>
          )
        }}
      </InView>
    </S.Container>
  )
}

export default SectionCard
