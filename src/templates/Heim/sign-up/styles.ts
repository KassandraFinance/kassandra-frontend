import styled, {css} from "styled-components";
import media from "styled-media-query";

import * as TextFieldStyles from '../../../components/TextField/styles'



export const WrapperContainer = styled.div`
  position: relative;
  align-content: center;
  flex-direction: column;
  display: flex;
  `

export const Container = styled.div`
  position:absolute;
  width:auto;
  height: auto;
  align-content: center;
  transform: translateX(-50%);
  left: 50%;
  margin-top: 140%;
  ${media.between('medium','large')`
  /* margin-top: -45%; */
  width:58rem;
  /* position:relative; */
  padding: 3.2rem;
  `}
  ${media.lessThan('small')`
    position:relative;
    margin: 0;
    max-width: 80%
    max-height: 50%;
    /* margin-top: -40%; */
    padding: 3.2rem;
  `}
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




export const Link = styled.div `
    a{
    background: linear-gradient(264.12deg, #020887 -197.65%, #26DBDB 272.42%);
    border: none;
    border-radius: 6px;
    color: #fcfcfc;
    text-decoration: none;
    font-size: 20px;

    height: 52px;
    padding: 12px 32px;
    cursor: pointer;
  }
`

export const Title = styled.h1`
  ${({theme})=>css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    line-height: 120%;
    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.large};
    `}
    @media (max-width: 1024px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`
export const SubTitle = styled.h3`
  ${({theme})=>css`
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.light};
  line-height: 120%;
  margin: 32px 0;
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
      margin: 16px 0;
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

