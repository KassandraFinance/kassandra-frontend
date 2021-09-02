import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
  ${()=>css`
    z-index:1;
    margin: auto;
    position: relative;
    margin: 10.8em;
    /* max-width: 132rem; */
    justify-content: center;
    overflow:hidden;
    ${media.lessThan('medium')`
        display:flex;
        flex-direction: column;
        position: relative;
        margin: 2.5rem;
    `}
  `}
`

export const TextWrapper = styled.div `
  ${()=> css `
    max-width: 65%;
    ${media.lessThan("medium")`
      max-width: 80%;
    `}
  `}
`
export const Title = styled.h1`
  ${({theme})=>css`
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.spacings.xxlarge};
      /* line-height: 94px; */
      ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SubTitle = styled.h3`
    ${({theme})=>css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    margin: 32px 0;
    max-width: 100%px;
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
      margin: 16px 0;
    `}
  `}
`

export const WrapperItems = styled.div`
  ${() => css `
    max-width: 95rem;
    /* display: flex; */
    /* flex-direction: row; */
    margin:auto;

    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      `}

  `}
`
export const ItemContainer = styled.div`
  ${({theme}) => css `
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${theme.spacings.xsmall};
  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
  `}

  `}
  `
export const ItemText = styled.div`
${() => css `
/* text-align: center; */
max-width:42rem;
`}
`
export const ItemTitle = styled.div`
  ${({theme}) => css `
  text-align: left;
  font-size: ${theme.font.sizes.large};
  font-weight: ${theme.font.bold};
  line-height: 120%;
  margin-bottom: ${theme.spacings.small};
    ${media.lessThan("medium")`
    font-size: ${theme.font.sizes.large};
    `}
    /* ${media.greaterThan("medium")`
    font-size: ${theme.font.sizes.xlarge};
    `} */
  `}
  `
export const ItemSubtitle = styled.div`
  ${({theme}) => css `
  text-align: left;
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.light};
  line-height: 150%;
  margin-bottom: ${theme.spacings.xxsmall};
    ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.small};
    `}
    /* ${media.greaterThan("medium")`
      font-size: ${theme.font.sizes.large};
    `} */
  `}
  `

export const ItemImage = styled.div`
  ${({theme}) => css `
  display: flexbox;
  justify-content: center;
  margin-bottom:${theme.spacings.medium};
  ${media.lessThan("medium")`
      display: flex;
      justify-content: center;

      img{
        max-width:70%
      }
      `}
  `}
`
export const GraphWrapper = styled.div`
  ${() => css `
  padding: 10rem 0 ;
  max-width: 100%;
  max-height: 94.5rem;
  background-color: #402947;
  display: flex;
  align-items: center;
  flex-direction: column;
    ${media.lessThan("medium")`

      overflow:hidden;
    `}
  `}
  img{
    width: 100%;
    margin: 2% 0;
    ${media.lessThan("medium")`
    transform: scale(1.1);

    `}
  }
  ${media.lessThan("medium")`
  padding: 5rem 0;
  `}
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan("medium")`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  `}
  `
  export const ProductWrapper = styled.div`
    ${() => css `
      display: flex;
      position: relative;
      max-width: 95rem;
      flex-direction: row;
      justify-content: space-between;
      margin:auto;

      ${media.lessThan('medium')`
        display: flex;
        flex-direction: column;
        padding-top: 0;
        `}

    `}
  `
export const ProductContainer = styled.div`
  ${({theme}) => css `
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between ;
    width:38rem;
    height: 31rem;
    padding: ${theme.spacings.xsmall};
    ${media.lessThan("small")`
      width:auto;
      height: auto;
    `}

    `}
    `
export const ProductText = styled.div`
${() => css `
/* text-align: center; */
  max-width:40rem;
`}
`
export const ProductTitle = styled.div`
  ${({theme}) => css `
    text-align: left;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.small};
  `}
`
export const ProductSubtitle = styled.div`
  ${({theme}) => css `
  text-align: left;
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.light};
  line-height: 150%;

  ${media.lessThan('small')`
    font-size: ${theme.font.sizes.small};
  `}
  `}
`

export const ProductImage = styled.div`
  ${({theme}) => css `
  display: flex;
  position: relative;
  justify-content: center;
  margin-bottom:${theme.spacings.medium};
  height:auto;
  img{
    width:100%;
    height: 100%;

  }
  ${media.lessThan("medium")`
      /* display: flex; */
      justify-content: center;
      height:auto;

      img{
        max-width:100%
      }
    `}
  `}
`

export const Link = styled.div `
${({theme})=> css `

    margin:2% 0 ;
    display: flex;
    justify-content: center;
    align-items: center;



    a{
      color: #26DBDB;
      border: none;
      text-decoration: none;
      font-size: ${theme.font.sizes.medium};
      cursor: pointer;
      ${media.lessThan("small")`
      font-size: ${theme.font.sizes.xsmall};

    `}
  }
`}
`
export const Divider = styled.div`
  ${({theme})=> css`
    margin-top: 2rem;
    margin-bottom: 10rem;
    max-width: 100%;

    img{
      width:100%;
      height: 100%;
    }

  `}
`


