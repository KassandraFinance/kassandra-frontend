import styled from 'styled-components'
import theme from '../../styles/theme'

export const Footer = styled.footer`
  max-width: 114rem;
  margin: 0 auto;
  padding: 4rem 3rem;

  color: #fcfcfc;

  @media (max-width: 770px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 400px) {
    margin-bottom: 6rem;
  }
`
export const Container = styled.div`
  align-content: space-between;
  margin: 0 auto;

  & > img {
    display: none;
    margin-bottom: 3.2rem;

    @media (max-width: 8200px) {
      display: block;
    }
  }

  @media (min-width: 1600px) {
    max-width: 114rem;
  }

  @media (max-width: 8200px) {
    flex-direction: column-reverse;
    align-items: center;
  }

  @media (max-width: 540px) {
  }
`

export const UpperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.6rem;

  padding: 8rem 0;
  max-width: 69rem;

  @media (max-width: 8200px) {
    width: 100%;
    padding: 4rem 5rem;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }

  li {
    @media (max-width: 8200px) {
      text-align: top;
    }
    margin: 1.5rem 0;
  }
  h4 {
    margin-bottom: 0.8rem;

    font-size: 2rem;
    font-weight: 500;
    @media (max-width: 820px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
  a {
    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    text-decoration: none;

    @media (max-width: 710px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
export const LowerContainerMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 7rem 10rem;

  @media (min-width: 820px) {
    display: none;
  }
  @media (max-width: 820px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 3rem;
    padding: 3.5rem 5rem;

    text-align: center;
    & > img {
      display: none;
    }
  }
  @media (max-width: 400px) {
    padding: 0;
  }
  span {
    font-size: 1.6rem;
    font-weight: 300;
  }
  ul {
    display: flex;
    @media (max-width: 820px) {
      margin-bottom: 1.6rem;
      justify-content: center;
    }
    @media (max-width: 400px) {
      justify-content: center;
      padding: 1rem;
      margin: auto;
    }
    li {
      flex: 1 0 4.8rem;
    }
  }
`
export const LowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 7rem 0;

  @media (max-width: 820px) {
    display: none;
  }

  span {
    font-size: 1.6rem;
    font-weight: 300;
  }

  ul {
    display: flex;
    justify-content: flex-end;

    li {
      flex: 1 0 4.8rem;
    }
  }
`
export const Certified = styled.div`
  max-width: 100%;
  margin: 1.6rem auto 0;

  a {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    color: ${theme.colors.snow};
    text-decoration: none;
  }
  span {
    margin-right: 0.6rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.07rem;
  }
  img {
    margin-right: 1.6rem;
  }
`

export const LowerLeft = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    margin-bottom: 2.8rem;
  }
`
export const LowerRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const SocialIcon = styled.a`
  display: block;
  height: 3.2rem;
  width: 3.2rem;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;

  img {
    padding: 0.5rem;
  }
`

export const Divider = styled.div`
  background-color: transparent;
  /* border-top: 1px solid rgba(255, 255, 255, 0.14); */
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
`
