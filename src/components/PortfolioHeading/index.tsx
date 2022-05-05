import React from 'react'
import Image from 'next/image'
import Tippy from '@tippyjs/react'

import infoGray from '../../../public/assets/info-gray.svg'
import arrowAscend from '../../../public/assets/icons/arrow-ascend.svg'
import arrowDescend from '../../../public/assets/icons/arrow-descend.svg'

import * as S from './styles'

interface IPortfolioHeadingProps {
  image: any;
  title: string;
  usd: string;
  change: number;
}

const PortfolioHeading = ({
  image,
  title,
  usd,
  change
}: IPortfolioHeadingProps) => {
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

            <S.Change change={change}>
              <span>{change}%</span>
              <div>
                <Image
                  src={change > 0 ? arrowAscend : arrowDescend}
                  layout="responsive"
                />
              </div>
            </S.Change>
          </S.Value>
        </S.TotalContainer>
      </S.HeadingWrapper>
    </>
  )
}

export default PortfolioHeading
