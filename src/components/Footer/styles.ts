import styled from 'styled-components';
import theme from '../../styles/theme'

export const Footer = styled.footer`
background-color: #2F2333;
  color: #fcfcfc;
  padding: 40px 0;
  position: relative;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 32px;
  @media (min-width: 1600px) {
    max-width: 1580px;
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
export const GridLeft = styled.div`
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
    margin: 24px 0;
    li {
      flex: 1 0 38px;
    }
  }
`
export const GridRight = styled.div`
@media(max-width: 710px) {
  width: 100%;
}
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 16px;
    li {
  @media(max-width: 710px) {
    text-align: center;
  }
  margin: 8px 0;
}
    h4 {
  margin-bottom: 8px;
  font-size: 1.8rem;
  font-weight: 500;
}
    a {
  color: #fcfcfc;
  font-size: 16px;
  font-weight: 300;
  text-decoration: none;
  padding: 4px 0;
    }
`

