import React from 'react'
import Image from 'next/image'
import Tippy from '@tippyjs/react'

import TitleSection from '../TitleSection'

import infoGray from '../../../public/assets/utilities/info-gray.svg'

import * as S from './styles'

interface IPortfolioHeadingProps {
  image: string;
  title: string;
  usd: string;
  tippy: string;
}

const PortfolioHeading = ({
  image,
  title,
  usd,
  tippy
}: IPortfolioHeadingProps) => {
  return (
    <>
      <S.HeadingWrapper>
        <TitleSection image={image} title={title} />

        <S.TotalContainer>
          <S.Total>
            <span>Total</span>

            <Tippy content={tippy}>
              <S.Tooltip tabIndex={0}>
                <Image src={infoGray} alt="Explanation" layout="responsive" />
              </S.Tooltip>
            </Tippy>
          </S.Total>

          <S.Value>
            <S.ValueUSD>
              {usd} <span>USD</span>
            </S.ValueUSD>
          </S.Value>
        </S.TotalContainer>
      </S.HeadingWrapper>
    </>
  )
}

export default PortfolioHeading
