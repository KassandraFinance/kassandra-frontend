import styled from 'styled-components'

export const Supporters = styled.section`
  padding: 40px 32px 0;
  h1 {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 24px;
    }
  }

  p {
    font-size: 24px;
    font-weight: 300;
    max-width: 700px;
    margin: 36px auto 0;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 16px;
      max-width: 280px;
      margin: 16px auto 0;
    }
  }
`

export const AllSupporters = styled.div`
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
`