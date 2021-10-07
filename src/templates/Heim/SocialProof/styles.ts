import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    z-index: 1;
    margin: auto;
    position: relative;
    margin-top: 10.8em;
    margin-bottom: 15rem;
    /* max-width: 132rem; */
    justify-content: center;
    overflow: hidden;
    ${media.lessThan('large')`
        display:flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        margin-bottom: 0rem;
    `}
  `}
`

export const TextWrapper = styled.div`
  ${() => css`
    max-width: 65%;
    ${media.lessThan('large')`
      max-width: 80%;
    `}
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.space56};
    /* line-height: 94px; */
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font24};
      margin-bottom: ${theme.spacings.space24};

    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    /* margin: 32px 0; */
    max-width: 100%;
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font16};
      margin: ${theme.spacings.space16} 0;
    `}
  `}
`

export const WrapperItems = styled.div`
  ${() => css`
    max-width: 95rem;
    /* display: flex; */
    /* flex-direction: row; */
    margin: auto;

    ${media.lessThan('large')`
      display: flex;
      flex-direction: column;
      /* margin: 2.5rem; */

      `}
  `}
`
export const ItemContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: ${theme.spacings.space8};
    ${media.lessThan('large')`
    display: flex;
    flex-direction: column;
    text-align:center;
  `}
  `}
`
export const ItemText = styled.div`
  ${() => css`
    /* text-align: center; */
    max-width: 42rem;
  `}
`
export const ItemTitle = styled.div`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    line-height: 120%;
    margin-bottom: ${theme.spacings.space24};

    ${media.lessThan('large')`
    font-size: ${theme.font.sizes.font18};
    text-align: center;

    `}/* ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.font40};
    `} */
  `}
`
export const ItemSubtitle = styled.div`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    line-height: 150%;
    margin-bottom: ${theme.spacings.space8};
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font16};
      text-align:center;

    `}/* ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.font24};
    `} */
  `}
`

export const ItemImage = styled.div`
  ${({ theme }) => css`
    display: flexbox;
    justify-content: center;
    margin-bottom: ${theme.spacings.space32};
    ${media.lessThan('large')`
      display: flex;
      justify-content: center;

      img{
        max-width:70%
      }
      `}
  `}
`
export const GraphWrapper = styled.div`
  ${() => css`
    padding: 10rem 0;
    max-width: 100%;
    max-height: 94.5rem;
    background-color: #402947;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${media.lessThan('large')`

      overflow:hidden;
    `}
  `}
  img {
    width: 100%;
    margin: 2% 0;
    ${media.lessThan('large')`
    transform: scale(1.1);

    `}
  }
  ${media.lessThan('large')`
  padding: 5rem 0;
  `}
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan('large')`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  `}
`
export const ProductWrapper = styled.div`
  ${() => css`
    display: flex;
    position: relative;
    max-width: 95rem;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;

    ${media.lessThan('large')`
        display: flex;
        flex-direction: column;
        padding-top: 0;
        `}
  `}
`
export const ProductContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    width: 38rem;
    /* height: 31rem; */
    padding: ${theme.spacings.space8};
    ${media.lessThan('large')`
      width:auto;
      height: auto;
      margin: 2.5rem;

    `}
  `}
`
export const ProductText = styled.div`
  ${() => css`
    /* text-align: center; */
    max-width: 40rem;
  `}
`
export const ProductTitle = styled.div`
  ${({ theme }) => css`
    text-align: left;
    font-size: ${theme.font.sizes.font24};
    margin-bottom: ${theme.spacings.space24};
  `}
`
export const ProductSubtitle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    line-height: 150%;

    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.font16};
    text-align:center;
  `}
  `}
`

export const ProductImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    justify-content: center;
    margin-bottom: ${theme.spacings.space32};
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
    ${media.lessThan('large')`
      /* display: flex; */
      justify-content: center;
      height:auto;

      img{
        max-width:100%
      }
    `}
  `}
`

export const Link = styled.div`
  ${({ theme }) => css`
    margin: 2% 0;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: ${theme.colors.cyan};
      border: none;
      text-decoration: none;
      font-size: ${theme.font.sizes.font18};
      cursor: pointer;
      color: ${theme.colors.cyan};
      position: relative;
      border: none;
      text-decoration: none;
      font-size: ${theme.font.sizes.font18};
      font-weight: ${theme.font.weight.normal};
      cursor: pointer;
      &:hover {
        &::after {
          content: '';
          max-width: 100%;
          text-align: left;
          position: absolute;
          display: block;
          height: 0.1rem;
          background-color: ${theme.colors.cyan};
          animation: hoverAnimation 0.3s forwards;
        }
        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            width: 100%;
            left: 0;
          }
        }
      }
      ${media.lessThan('large')`
  font-size: ${theme.font.sizes.font12};
  `}
    }
  `}
`
export const Divider = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    margin-bottom: 10rem;
    max-width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`
export const Spot = styled.div`
  position: absolute;

  width: 10rem;
  height: 20rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 18rem;
  border-bottom-right-radius: 18rem;
  filter: blur(100px);
  opacity: 0.5;

  background-color: #e843c4;
`
