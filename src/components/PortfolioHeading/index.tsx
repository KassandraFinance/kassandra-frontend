import React from 'react'
import Image from 'next/image'
import Tippy from '@tippyjs/react'

import infoGray from '../../../public/assets/info-gray.svg'

import * as S from './styles'

interface IPortfolioHeadingProps {
  image: string;
  title: string;
  usd: string;
}

const PortfolioHeading = ({ image, title, usd }: IPortfolioHeadingProps) => {
  return (
    <>
      <S.HeadingWrapper>
        <S.Heading>
          <S.ImageWrapper>
            <Image src={image} />
          </S.ImageWrapper>

          <S.H2>{title}</S.H2>
        </S.Heading>

        <S.TotalContainer>
          <S.Total>
            <span>Total</span>

            <Tippy content="Tippy">
              <S.Tooltip tabIndex={0}>
                <Image src={infoGray} alt="Explanation" layout="responsive" />
              </S.Tooltip>
            </Tippy>
          </S.Total>

          <S.Value>
            <S.ValueUSD>
              {usd} <span>USD</span>
            </S.ValueUSD>

            {/* <S.Change change={change}>
              <span>{change}%</span>
              <div>
                <Image
                  src={change < 0 ? arrowDescend : arrowAscend}
                  layout="responsive"
                />
              </div>
            </S.Change> */}
          </S.Value>
        </S.TotalContainer>
      </S.HeadingWrapper>
    </>
  )
}

export default PortfolioHeading
