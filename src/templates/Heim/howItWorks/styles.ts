import styled, {css} from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
  position: relative;
  width:100%;
  margin:auto;
`
export const ImageDesktop = styled.div`
  position: relative;
  display: flex;
  img{
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: -4rem;
  }
  ${media.lessThan("medium")`
    display:none;
  `}
`
export const ImageMobile = styled.div`
  position: relative;
  display: flex;
  margin-top:-30%;
  img{
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: -4rem;
  }
  @media (max-width: 768px){

    }

`

export const MobileSignUp = styled.div`
  display: flex;
  width:20rem;
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
    justify-content: center;
    max-width: 30rem;
    text-align: center;
    margin:auto;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    line-height:150%;
    z-index: 10;

    @media (min-width: 800px){
    display:none
    }
    @media (max-width: 768px){
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    margin-top: 10rem;
    line-height:100%;
    max-width: 40rem;
    }
    @media (max-width: 540px){
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    line-height:100%;
    }
    @media (max-width: 425px){
    font-size: 1.4rem;
    font-weight: ${theme.font.light};
    margin-top: 7rem;
    max-width: 25rem;
    }
    @media (max-width: 375px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    margin: auto;
    margin-top: 5rem;
    line-height:100%;
    max-width: 20rem;
    }
    @media (max-width: 280px){
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.light};
    margin: auto;
    margin-top: 3rem;
    line-height:100%;
    max-width: 28rem;
    }
  `}
`
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position:absolute;
  align-items:center;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  margin-top:45rem;
  /* max-width: 100%; */
  img{
    margin-bottom: 2rem;
    max-width: 100%;
    @media(max-width: 800px){
      display:none;
    }
  }
  @media(min-width: 1900px){
    margin-top:65rem;
  }
  @media(max-width: 1300px){
    margin-top:35rem;
  }
  @media(max-width: 1024px){
    margin-top:25rem;
  }

`
