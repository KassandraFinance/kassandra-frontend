import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
${()=>css`

  ${media.lessThan('medium')`
      position: relative;
      margin-bottom: 2.5rem;
  `}

    margin: auto;
    position: relative;
    padding: 8.5rem 3.2rem;
    max-width: 122rem;
    justify-content: center;
    @media (max-width: 600px) {
      /* height: calc(100vh - 140px); */
    }
    @media (max-width: 370px) {
      /* height: calc(100vh - 160px); */
    }
    ${media.lessThan('large')`
      display: flex;
      flex-direction: column;
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
      /* line-height: 94px; */
      ${media.lessThan("medium")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SubTitle = styled.h3`
    ${({theme})=>css`
    text-align: center;
    font-size: 3.1rem;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;
    ${media.lessThan('medium')`
      display: flex;
      flex-direction: column;
      `}

  `}
`
export const ItemContainer = styled.div`
  ${({theme}) => css `
    display: flex;
    flex-direction: column;
    justify-content: center ;
    padding: ${theme.spacings.xsmall};

  `}
`
export const ItemText = styled.div`
${() => css `
  text-align: center;
`}
`
export const ItemTitle = styled.div`
  ${({theme}) => css `
    text-align: center;
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`
export const ItemSubtitle = styled.div`
  ${({theme}) => css `
  text-align: center;
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.light};

  `}
`

export const Image = styled.div`
  ${({theme}) => css `
  display: flexbox;
  justify-content: center;

  margin-bottom:${theme.spacings.medium};

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
    font-size: ${theme.font.sizes.large};
    cursor: pointer;
    ${media.lessThan("small")`
    font-size: ${theme.font.sizes.xsmall};

    `}
  }
`}
`


