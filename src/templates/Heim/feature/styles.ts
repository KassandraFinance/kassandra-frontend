import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    margin: auto;
    position: relative;
    padding: 6.5rem 3.2rem;
    max-width: 121.6rem;
    justify-content: center;
    margin-bottom: 5.8rem;
    /* height: calc(100vh - 110px); */

    @media (min-width: 1400px) {
      margin-bottom: 0rem;
    }
    @media (min-width: 1900px) {
      margin-bottom: 0rem;
    }
    @media (max-width: 1000px) {
      /* height: 100vh; */
      margin-bottom: 70rem;
    }
    @media (max-height: 760px) {
      /* min-height: 100vh; */
    }

    ${media.lessThan('medium')`
      position: relative;
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
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
    /* line-height: 94px; */
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font24};
    `}
  `}
`

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    margin: 32px 0;
    max-width: 100%px;
    ${media.lessThan('large')`
      font-size: ${theme.font.sizes.font18};
      margin: ${theme.spacings.space16} 0;
    `}
  `}
`

export const WrapperItems = styled.div`
  ${() => css`
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    ${media.lessThan('large')`
      display: flex;
      flex-direction: column;
      `}
  `}
`
export const ItemContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.space8};
  `}
`
export const ItemText = styled.div`
  ${() => css`
    text-align: center;
  `}
`
export const ItemTitle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.space8};
  `}
`
export const ItemSubtitle = styled.div`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    line-height: 150%;
  `}
`

export const ItemImage = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-bottom: ${theme.spacings.space32};
    ${media.lessThan('medium')`
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
    /* max-height: 94.5rem; */
    background-color: #402947;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;

    ${media.lessThan('large')`
      overflow:hidden;
    `}
  `}
  img {
    width: 100%;
    margin: 2% 0;
    transform: scale(1);

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
    margin-top: 1rem;
    margin-bottom: 1rem;
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
    font-size: ${theme.font.sizes.font16};
    `}
    }
  `}
`
export const Spot = styled.div`
  position: absolute;
  width: 10rem;
  height: 20rem;
  right: 0;
  border-top-left-radius: 3.6rem;
  border-bottom-left-radius: 0;
  border-top-right-radius: 3.6rem;
  border-bottom-right-radius: 0;
  filter: blur(100px);
  opacity: 0.7;

  background-color: #e843c4;
`
