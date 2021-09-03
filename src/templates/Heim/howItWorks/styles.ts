import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
    position: relative;
    width:100%;
    align-items: center;
    /* max-width:1440px; */
    margin:auto;

  /* ${media.lessThan("small")`
  margin-top: -85%;
  `} */
`
export const SubTitle = styled.h3`
  ${({theme})=>css`

  ${media.lessThan("small")`
      font-size: ${theme.font.sizes.small};
      margin: 16px 0;
    `}
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 300;
    margin: 32px 0;
    max-width: 100%px;
  `}
`

export const Image = styled.div`

  img{
    width: 100%;
    height: auto;
    margin-bottom: -4rem;
  }
  ${media.lessThan("small")`

  `}
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


export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  ${media.lessThan("medium")`
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  `  }
`
export const Text = styled.div`
  ${({theme})=> css`
    position:absolute;
    text-align: center;
    margin: 30rem 40rem;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    line-height:150%;
    @media (max-width: 1920px) {
      margin: 25rem 25rem;
    }
    @media (max-width: 1440px){
    font-size: ${theme.font.sizes.xlarge};
    margin: 18rem 20rem;
    }
    @media (max-width: 1024px){
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin: 13rem 20rem;
    line-height:100%;
    }
    @media (max-width: 768px){
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    margin: 10rem;
    line-height:100%;
    }
    @media (max-width: 425px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    margin: 5rem;
    line-height:100%;
    }
    @media (max-width: 375px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    margin: 4.5rem;
    line-height:100%;
    }
  `}
`
