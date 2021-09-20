import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as TextFieldStyles from '../../../components/TextField/styles'



export const WrapperContainer = styled.div`
  position: relative;
  align-content: center;
  flex-direction: column;
  display: flex;
  `

export const Container = styled.div`
  /* position:absolute; */
  width:auto;
  height: auto;
  align-content: center;
  margin-top: 5.3rem;
  left: 50%;

  ${media.between('medium', 'large')`
    width:58rem;
    padding: 3.2rem;
  `}
  @media(max-width: 800px){
    display: none;
  }
`
export const Image = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  img{
    max-width: 100%;
  ${media.lessThan("medium")`
    width: 50%;
  `}
}
`




export const Link = styled.div`
  ${({ theme }) => css`
    a{
      background: linear-gradient(264.12deg, #020887 -197.65%, ${theme.colors.cyan} 272.42%);
      border: none;
      border-radius: ${theme.border.radius};
      color: ${theme.colors.snow};
      text-decoration: none;
      font-size: ${theme.font.sizes.font20};

      height: 52px;
      padding: 12px 32px;
      cursor: pointer;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.semibold};
    line-height: 120%;
    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.font24};
    `}
    @media (max-width: 1024px) {
      font-size: ${theme.font.sizes.font24};
    }
  `}
`
export const SubTitle = styled.h3`
  ${({ theme }) => css`
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.light};
  line-height: 120%;
  margin: 32px 0;
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.font16};
      margin: ${theme.spacings.space16} 0;
    `}
  `}
`
export const ButtonWrapper = styled.div`
  max-width: 100%;
`
export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
  margin-top:5rem
  ${media.lessThan('small')`

  `}
`

