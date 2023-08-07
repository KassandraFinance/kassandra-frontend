import styled from 'styled-components'
import theme from './../../styles/theme'

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  img {
    bottom: 0;
    width: 100%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 3.2rem;
  max-width: 79rem;
  margin: 0 auto;
  height: 100vh;

  @media (max-height: 720px) {
    margin: 7rem auto 0;
  }
  img {
    max-width: 100%;
    margin-bottom: 6%;
  }
  p {
    font-size: 3.2rem;
    font-weight: ${theme.font.weight.light};
    margin-bottom: 3.6rem;
  }

  @media (max-width: 128rem) {
    max-width: 71rem;
    p {
      font-size: 2.4rem;
      margin-bottom: 2.4rem;
    }
  }
  @media (max-width: 102.4rem) {
    max-width: 64rem;
    p {
      font-size: 1.8rem;
      margin-bottom: 1.8rem;
    }
  }
  @media (max-width: 76.8rem) {
    max-width: 58rem;
  }

  @media (max-width: 64rem) {
    max-width: 52rem;
    p {
      font-size: 1.6rem;
      margin-bottom: 1.6rem;
    }
  }
  @media (max-width: 32rem) {
    max-width: 25rem;
    p {
      font-size: ${theme.font.sizes.font14};
      margin-bottom: 14px;
    }
  }
`
