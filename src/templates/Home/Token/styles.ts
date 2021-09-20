import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Token = styled.section`
  padding: 80px 32px;
  text-align: center;

  @media (max-width: 330px) {
    padding: ${theme.spacings.space32} 20px;
  }

  h1 {
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: ${theme.spacings.space48}
;
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.medium};
      margin-bottom: 16px;
    }
  }
  p {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.light};
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;

  min-height: 500px;
  max-width: 1520px;
  margin: 0 auto;
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .img-token {
    display: block;
    max-width: 390px;
    height: 100%;
    @media (max-width: 960px) {
      margin: 0;
      max-width: 400px;
    }
    @media (max-width: 600px) {
      display: none;
    }
  }
  .img-token-96 {
    display: none;
    max-width: 100%;
    @media (max-width: 600px) {
      display: block;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
`

export const Description = styled.div`
  text-align: left;
  h3 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    margin-bottom: 24px;
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font18};
      text-align: center;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    text-align: left;
    margin-bottom: 24px;
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font18};
      font-weight: ${theme.font.weight.light};
      text-align: center;
      margin-bottom: 16px;
    }
  }
  ul {
    margin-bottom: ${theme.spacings.space48}
;
  }
  li {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    margin: 8px 0;
    span {
      font-weight: ${theme.font.weight.medium};
    }
    &::before {
      content: '';
      display: inline-block;
      background-color: ${theme.colors.snow};
      width: 6px;
      height: 6px;
      border-radius: 3px;
      margin: 0 20px 4px 16px;
      @media (max-width: 390px) {
        width: 4px;
        height: 4px;
        border-radius: 2px;
        margin: 0 8px 2px 8px;
      }
    }
    @media (max-width: 600px) {
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
    }
    @media (max-width: 390px) {
      font-size: 15px;
    }
    @media (max-width: 330px) {
      font-size: 13px;
    }
  }
`

export const ButtonModalSocial = styled.button`
  background: ${`linear-gradient(264.12deg, ${theme.colors.magenta} -179.71%, ${theme.colors.darkBlue} 205.21%)`};
  border: none;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.snow};
  text-align: center;
  text-decoration: none;
  font-size: ${theme.font.sizes.font20};
  line-height: 20px;

  height: 52px;
  padding: ${theme.spacings.space16} 32px;
  margin: ${theme.spacings.space16} 0;
  cursor: pointer;
  &:hover {
    background: #020887;
  }
  @media (max-width: 1160px) {
    display: block;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: ${theme.font.sizes.font16};
    line-height: 16px;
    height: 48px;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`
