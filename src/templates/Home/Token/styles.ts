import styled from 'styled-components'

export const Token = styled.section`
  padding: 80px 32px;
  text-align: center;

  @media (max-width: 330px) {
    padding: 32px 20px;
  }

  h1 {
    font-size: 44px;
    font-weight: 500;
    margin-bottom: 48px;
    @media (max-width: 600px) {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: 24px;
    font-weight: 300;
    max-width: 760px;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
`

export const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
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

export  const Description = styled.div`
  text-align: left;
  h3 {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 24px;
    @media (max-width: 600px) {
      font-size: 18px;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  p {
    font-size: 18px;
    font-weight: 300;
    text-align: left;
    margin-bottom: 24px;
    @media (max-width: 600px) {
      font-size: 18px;
      font-weight: 300;
      text-align: center;
      margin-bottom: 16px;
    }
  }
  ul {
    margin-bottom: 48px;
  }
  li {
    font-size: 18px;
    font-weight: 300;
    margin: 8px 0;
    span {
      font-weight: 500;
    }
    &::before {
      content: '';
      display: inline-block;
      background-color: #FCFCFC;
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
      font-size: 16px;
      font-weight: 300;
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
  background: linear-gradient(264.12deg, #E843C4 -179.71%, #020887 205.21%);
  border: none;
  border-radius: 6px;
  color: #fcfcfc;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  line-height: 20px;

  height: 52px;
  padding: 16px 32px;
  margin: 16px 0;
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
    font-size: 16px;
    line-height: 16px;
    height: 48px;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`
