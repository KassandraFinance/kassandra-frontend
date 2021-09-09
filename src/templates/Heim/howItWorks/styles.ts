import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
`
export const DesktopContainer = styled.div`
  @media(max-width: 930px){
    display: none;
  }
`
export const ImageDesktop = styled.div`
  position: relative;
  display: flex;
  img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: -4rem;
  }
`
export const MobileContainer = styled.div`
  @media(min-width: 930px){
    display: none
  }
`

export const ImageMobile = styled.div`
  position: relative;
  display: flex;
  margin-top: -30%;
  img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: -4rem;
  }
`

export const MobileSignUp = styled.div`
  display: flex;
  width: 20rem;
  flex-direction: column;
  position: absolute;
  align-items: center;
  height: auto;
  transform: translateX(-50%);
  left: 50%;
  margin-top: -50%;

  img {
    margin-bottom: 2rem;
    max-width: 35%;
  }
  @media (min-width: 1000px) {
    img {
      max-width: 50%;
      margin-bottom: 5rem;
    }
  }
`

export const Text = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: center;
    max-width: 30rem;
    text-align: center;
    margin: auto;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    line-height: 150%;
    z-index: 10;

    @media (min-width: 930px) {
      display: none;
    }
    @media (max-width: 930px) {
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.light};
      margin-top: 10rem;
      line-height: 100%;
      max-width: 40rem;
    }
    @media (max-width: 680px) {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.light};
      margin-top: 10rem;
      line-height: 100%;
      max-width: 40rem;
    }
    @media (max-width: 570px) {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.light};
      line-height: 100%;
    }
    @media (max-width: 425px) {
      font-size: 1.4rem;
      font-weight: ${theme.font.light};
      margin-top: 7rem;
      max-width: 25rem;
    }
    @media (max-width: 375px) {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.light};
      margin: auto;
      margin-top: 5rem;
      line-height: 100%;
      max-width: 20rem;
    }
    @media (max-width: 280px) {
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.light};
      margin: auto;
      margin-top: 3rem;
      line-height: 100%;
      max-width: 28rem;
    }
  `}
`
export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  margin-top: 45rem;
  /* max-width: 100%; */
  img {
    margin-bottom: 2rem;
    max-width: 100%;
  }
  @media (min-width: 1900px) {
    margin-top: 65rem;
  }
  @media (max-width: 1300px) {
    margin-top: 35rem;
  }
  @media (max-width: 1100px) {
    margin-top: 25rem;
  }
  @media (max-width: 945px) {
    margin-top: 20rem;
  }
`
export const SpotLeft = styled.div`
  position: absolute;

  width: 10rem;
  height: 20rem;
  margin-top: -4rem;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
  border-top-right-radius: 18rem;
  border-bottom-right-radius: 18rem;
  filter: blur(100px);
  opacity: 0.7;

  background-color: #ffbf00;

  /* ${media.lessThan('large')`
  width: 32rem;
  height:32rem;
  `}
  ${media.lessThan('medium')`
  width: 24rem;
  height: 24rem;
  `}
  ${media.lessThan('small')`
  width: 20rem;
  height: 20rem;
  `} */
`
export const SpotRight = styled.div`
  position: absolute;

  width: 10rem;
  height: 20rem;
  right: 0;
  margin-top: 6rem;
  border-top-left-radius: 18rem;
  border-bottom-left-radius: 18rem;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  filter: blur(100px);
  opacity: 0.7;
  background-color: #ffbf00;
`
