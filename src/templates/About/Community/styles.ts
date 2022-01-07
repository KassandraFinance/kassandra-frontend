import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/assets/about-community-background.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 15rem 3.2rem;
`

export const Title = styled.h1`
  font-size: ${theme.font.sizes.font40};
  font-weight: ${theme.font.weight.bold};
  line-height: 114%;
  margin: 0 auto 3.2rem;
  @media (max-width: 810px) {
    font-size: ${theme.font.sizes.font32};
  }
  @media (max-width: 490px) {
    font-size: ${theme.font.sizes.font24};
  }
  @media (max-width: 380px) {
    font-size: ${theme.font.sizes.font18};
  }
`
export const Divider = styled.div`
  max-width: 10rem;
  height: 0.3rem;
  background: linear-gradient(99.25deg, #e843c4 0%, #ffbf00 100%, #ffbf00 100%);
  margin: 2.4rem auto 0;
`

export const Icons = styled.div`
  display: flex;
  max-width: 30rem;
  margin: 0 auto;
  ul {
    display: flex;
    justify-content: center;
    @media (max-width: 760px) {
      margin-bottom: 16px;
      justify-content: center;
    }
    @media (max-width: 400px) {
      padding: 10px;
      justify-content: center;
      margin: auto;
    }
    li {
      flex: 1 0 48px;
    }
  }

  a {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    height: 3.2rem;
    width: 3.2rem;
    display: block;
  }

  img {
    padding: 5px;
  }
`
