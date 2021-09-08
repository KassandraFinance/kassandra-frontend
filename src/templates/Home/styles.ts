import styled from 'styled-components'

export const KassandraArchitecture = styled.section`
  text-align: center;
  padding: 40px 32px;
  h1 {
    font-size: 44px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 800px) {
      font-size: 32px;
    }
    @media (max-width: 500px) {
      font-size: 24px;
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    max-width: 1000px;
    margin: 48px auto;
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
  .img-kassandra-architecture {
    max-width: 100%;
  }
  .grid-paragraph {
    display: grid;
    grid-template-columns: 4fr 5fr;
    gap: 80px;
    margin: 64px 0;
    @media (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 0px;
    }
    p {
      font-size: 18px;
      text-align: left;
      margin: 8px 0;
      @media (max-width: 800px) {
        font-size: 16px;
      }
      @media (max-width: 500px) {
        font-size: 15px;
      }
    }
  }
`

export const Supporters = styled.section`
    padding: 40px 32px 0;
  h1 {
    font-size: 44px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 24px;
    max-width: 700px;
    margin: 36px auto 0;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 16px;
      max-width: 280px;
      margin: 16px auto 0;
    }
  }
  .grid-supporters {
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 64px 0;
    a {
      flex: auto;
      text-align: center;
      img {
        height: 50px;
        width: 100%;
      }
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px;
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
`