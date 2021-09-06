import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
${()=>css`

    margin: auto;
    position: relative;
    padding: 6.5rem 3.2rem;
    max-width: 121.6rem;
    justify-content: center;
    height: calc(100vh);

    ${media.lessThan('large')`
      position: relative;
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      height: 100%;

    `}
  `}
`
export const TextWrapper = styled.div `
  ${()=> css `
    max-width: 65%;
    ${media.lessThan("large")`
      max-width: 80%;
    `}
  `}
`
export const Title = styled.h1`
  ${({theme})=>css`
      text-align: center;
      font-size: ${theme.font.sizes.xlarge};
      font-weight: ${theme.font.medium};
      /* line-height: 94px; */
      ${media.lessThan("large")`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`

export const SubTitle = styled.h3`
    ${({theme})=>css`
    text-align: center;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin: 32px 0;
    max-width: 100%px;
    ${media.lessThan("large")`
      font-size: ${theme.font.sizes.medium};
      margin: 16px 0;
    `}
  `}
`

export const WrapperItems = styled.div`
  ${() => css `
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
    font-weight: ${theme.font.medium};
    margin-bottom: ${theme.spacings.xsmall};

  `}
`
export const ItemSubtitle = styled.div`
  ${({theme}) => css `
  text-align: center;
  font-size: ${theme.font.sizes.medium};
  font-weight: ${theme.font.light};
  line-height: 150%;
  `}
`

export const ItemImage = styled.div`
  ${({theme}) => css `
  display: flex;
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
  /* max-height: 94.5rem; */
  background-color: #402947;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${media.lessThan("large")`

      overflow:hidden;
    `}
  `}
  img{
    width: 100%;
    margin: 2% 0;
    transform: scale(1);

    ${media.lessThan("large")`
      transform: scale(1.1);
    `}
  }
  ${media.lessThan("large")`
    padding: 5rem 0;
  `}
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan("large")`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
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
    position:relative;
    border: none;
    text-decoration: none;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    cursor: pointer;
    &:hover {
      &::after {
        content: '';
        max-width: 100%;
        text-align: left;
        position: absolute;
        display: block;
        height: 0.1rem;
        background-color: #26DBDB;
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
    ${media.lessThan("large")`
    font-size: ${theme.font.sizes.small};

    `}
  }
`}
`


