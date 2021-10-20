import styled from 'styled-components';
import theme from '../../styles/theme'

export const Footer = styled.footer`
  color: #fcfcfc;
  padding: 40px 0;
  position: relative;
  width: 100%;

`
export const Container = styled.div`
  align-content: space-between;
  margin: 0 auto;
  padding: 0 32px;

  @media (min-width: 1600px) {
    max-width: 1140px;
  }
  @media (min-width: 1440px) {
    padding: 0 80px;
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
  padding: 80px 100px ;
  max-width: 690px;

  @media(max-width: 710px) {
    width: 100%;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  li {
    @media(max-width: 710px) {
      text-align: top;
    }
  margin: 15px 0;
  }
    h4 {
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
  }
  a {
  color: #fcfcfc;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  }
`
export const LowerContainer = styled.div`
  padding: 70px 100px ;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 710px) {
    margin-top: 30px;
    width: 100%;
    text-align: center;
    & > img {
      display: none;
    }
  }
  span{
    font-size: 1.6rem;
    font-weight: 300;
  }
  ul {
    display: flex;
    li {
      flex: 1 0 48px;
    }
  }
`
export const LowerLeft = styled.div`
  display: flex;
  flex-direction: column;
  img{
    width: 100%;
    margin-bottom: 28px;
  }
`

export const Divider = styled.div`
  background-color: transparent;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
`
