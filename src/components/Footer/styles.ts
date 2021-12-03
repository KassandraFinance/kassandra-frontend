import styled from 'styled-components'
import theme from '../../styles/theme'

export const Footer = styled.footer`
  color: #fcfcfc;
  width: 100%;
  padding: 40px 32px;
`
export const Container = styled.div`
  align-content: space-between;
  margin: 0 auto;
  max-width: 1140px;
  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 710px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: 540px) {
  }
  & > img {
    display: none;
    margin-bottom: 32px;
    @media (max-width: 710px) {
      display: block;
    }
  }
`

export const UpperContainer = styled.div`
  padding: 80px 100px;
  max-width: 690px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media (max-width: 710px) {
    width: 100%;
    padding: 40px 50px;
  }
  @media (max-width: 400px) {
    width: 100%;
    padding: 0;
  }

  li {
    @media (max-width: 710px) {
      text-align: top;
    }
    margin: 15px 0;
  }
  h4 {
    margin-bottom: 8px;
    font-size: 20px;
    font-weight: 500;
    @media (max-width: 710px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
  a {
    color: #fcfcfc;
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
    @media (max-width: 710px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
export const LowerContainerMobile = styled.div`
  padding: 70px 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (min-width: 760px) {
    display: none;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 35px 50px;
    width: 100%;
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
`
export const LowerContainer = styled.div`
  padding: 70px 100px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 760px) {
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
      flex: 1 0 48px;
    }
  }
`
export const Certified = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  max-width: 100%;
  margin: 1.6rem auto 0;
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.07rem;
    margin-right: 0.6rem;
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
    margin-bottom: 28px;
  }
`
export const LowerRight = styled.div`
  display: flex;
  flex-direction: column;
`

export const Divider = styled.div`
  background-color: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
`
