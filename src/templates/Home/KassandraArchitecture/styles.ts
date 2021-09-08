import styled from 'styled-components'

export const KassandraArchitecture = styled.section`
  text-align: center;
  padding: 80px 32px;
  max-width: 1520px;
  margin: 0 auto;
  @media (max-width: 320px) {
    padding: 40px 20px;
  }
  h1 {
    font-size: 40px;
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
    font-weight: 300;
    text-align: center;
    max-width: 1000px;
    margin: 48px auto;
    @media (max-width: 800px) {
      font-size: 18px;
    }
    @media (max-width: 500px) {
      font-size: 16px;
      margin: 16px auto 32px;
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

export const Text = styled.div`
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
`