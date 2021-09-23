import styled from 'styled-components'
import theme from '../../styles/theme'


export const ProductsContainer = styled.section`
  max-width: 1520px;
  margin: 40px auto;
  padding: 0 ${theme.spacings.space32};

  min-height: 100vh;
  display: grid;
  grid-template-columns: auto 440px;
  gap: 60px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const ComingSoon = styled.img`
  max-width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`
export const Intro = styled.div`
  max-width: 1520px;

  display: grid;
  position: absolute;
  top: 0;
  grid-template-columns: auto 440px;
  gap: 60px;
  position: relative;
  margin: 0 40px;
  align-items: center;
  margin-top: 70px;

  img{
    width: 80px;
    margin-right: 21px;
    @media (max-width: 900px) {
      width: 50px;
      margin-right: 17px;
    }
  }
  h1{
    font-size: 40px;
    font-weight: ${theme.font.weight.normal};
    @media (max-width: 1024px) {
      font-size: 24px;
    }
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
  span{
    font-size: 24px;
    font-weight: ${theme.font.weight.light};
    @media (max-width: 900px) {
      font-size: 20px;
    }
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: auto;
    padding: 0 32px;
  }
`
export const IntroValues = styled.div`
  max-width: 80%;
  display: flex;
  justify-content:space-between;
h3{
  font-size: 24px;
  font-weight: ${theme.font.weight.normal};
}
div{
  margin: 12px 0;
  border-bottom: 2px solid ${theme.colors.magenta};
}
`
export const IntroPrice = styled.section`

`
export const IntroTVL = styled.section`

`


