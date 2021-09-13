import styled from 'styled-components'

export const Products = styled.section`
  padding: 80px 32px;
  margin: 0 auto;
  max-width: 1520px;

  @media (min-width: 900px) {
    padding: 80px 32px;
  }
  
  @media (max-width: 375px) and (max-height: 800px) {
    padding-top: 100px;
  }
  @media (max-width: 370px) {
    padding-top: 120px;
  }
  @media (max-width: 330px) {
    padding: 180px 20px 0;
  }
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    
    margin-bottom: 48px;
  }
  p {
    font-size: 24px;
    font-weight: 300;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 22px;
    }
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  .more-icon {
    display: block;
    margin: 16px auto;
  }
  .more-text {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin: 16px auto;
  }
`

export const Heim = styled.div`
  border: none;
  border-radius: 50px;
  box-shadow:
    inset 0px 48.9702px 70.3162px -45.2033px rgba(255, 255, 255, 0.7),
    inset 0px 8.78952px 13.8121px -5.02258px rgba(255, 255, 255, 0.5),
    inset 0px -102.963px 85.3839px -80.3614px rgba(96, 68, 145, 0.3),
    inset 0px 123.053px 125.565px -60.271px rgba(202, 172, 255, 0.3), inset 0px 5.02258px 22.6016px rgba(154, 146, 210, 0.3),
    inset 0px 1.25565px 50.2258px rgba(227, 222, 255, 0.2);

  display: grid;
  grid-template-columns: 200px auto 200px;
  gap: 40px;
  justify-items: center;
  align-items: center;
  
  margin-top: 48px;
  padding: 56px 64px;
  position: relative;
  img {
    max-width: 100%;
    @media (max-width: 600px) {
      max-width: 170px;
    }
  }
  .arrow-right {
    color: #26DBDB;
    font-size: 16px;
    text-decoration: none;
    @media (max-width: 420px) {
      margin: 20px 0;
    }
    &:hover {
      text-decoration: underline;
    }
    img {
      margin-left: 8px;
    }
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  @media (max-width: 700px) {
    padding: 32px 56px;
  }
  @media (max-width: 500px) {
    padding: 32px 48px;
  }
  @media (max-width: 420px) {
    padding: 32px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  a {
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
    @media (max-width: 600px) {
      font-size: 16px;
      line-height: 16px;
      height: 48px;
    }
  }
`

export const LearnMore = styled.a`
  background: transparent !important;
  border: 1px solid #26DBDB !important;
  border-radius: 6px;
  color: #fcfcfc !important;
  text-decoration: none;
  font-size: 20px;

  height: 52px;
  padding: 12px 32px;
  cursor: pointer;
  transition-duration: 300ms;
  &:hover {
    background-color: #26DBDB !important;
    color: #211426 !important;
  }
  @media (max-width: 600px) {
    font-size: 16px;
    height: 48px;
  }
`

export const HeimDescription = styled.div`
  text-align: left;
  h3 {
    font-size: 24px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    text-align: left;

    max-width: 600px;
    margin: 16px 0;
  }
  .first-paragraph {
    font-weight: 300;
  }
  .second-paragraph {
    font-weight: 500;
  }
  @media (max-width: 960px) {
    h3 {
      font-size: 28px;
    }
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 880px) {
    h3 {
      font-size: 32px;
    }
    p {
      font-size: 22px;
    }
  }
  @media (max-width: 540px) {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
  }
`