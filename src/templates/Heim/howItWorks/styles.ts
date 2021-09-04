import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
    position: relative;
    width:100%;
    /* align-items: center; */
    /* justify-items: center; */
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
  position: static;
  display: relative;
  img{
    display: block;
    width: 100%;
    height: auto;
    /* margin-bottom: -4rem; */
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


export const MobileSignUp = styled.div`
  display: flex;
  flex-direction: column;
  position:absolute;
  align-items:center;
  height: auto;
  transform: translateX(-50%);
  left: 50%;
  margin-top: -50%;
  /* max-width: 100%; */
  img{
    margin-bottom: 2rem;
    max-width: 35%;
  }
  @media(min-width: 1000px ){
    img{
      max-width: 50%;
      margin-bottom: 5rem;
    }
  }
`

export const Text = styled.div`
  ${({theme})=> css`
    position:relative;
    text-align: center;
    max-width:800px;
    margin:auto;
    font-size: 40px;
    font-weight: ${theme.font.light};
    line-height:150%;
    @media (max-width: 1920px) {
      /* margin: 250px 450px; */
    }
    @media (max-width: 1440px){
    font-size: ${theme.font.sizes.large};
    /* margin: 180px 300px; */
    }
    @media (max-width: 1024px){
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    /* margin: 13rem 20rem; */
    line-height:100%;
    }
    @media (max-width: 768px){
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    /* margin: 12rem 15rem; */
    line-height:100%;
    }
    @media (max-width: 540px){
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    /* margin: 8rem ; */
    line-height:100%;
    }
    @media (max-width: 425px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    /* margin: 5rem; */
    line-height:100%;
    }
    @media (max-width: 375px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    /* margin: 4.9rem; */
    line-height:100%;
    }
  `}
`
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position:absolute;
  align-items:center;
  transform: translateX(-50%);
  left: 48%;
  top: 50%;
  margin-top:45rem;
  /* max-width: 100%; */
  img{
    margin-bottom: 2rem;
    max-width: 100%;
  }
  @media(min-width: 1900px){
  margin-top:65rem;

  }
`
