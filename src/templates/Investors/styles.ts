import styled from 'styled-components'

export const InvestorsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Hero = styled.div`
  max-width: 1020px;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26rem;

  text-align: center;

  h1 {
    margin-top: 1.6rem;

    font-size: 4.8rem;
    line-height: 5.3rem;
    font-weight: 900;
  }

  span {
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .start-investing {
    width: 19.4rem;
    height: 4.8rem;

    border-radius: 0.4rem;
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #ffbf00;
  }

  hr {
    width: 6.4rem;
    margin-left: 1.6rem;
    margin-right: 1.9rem;
    height: 0.1rem;
    background-color: #ffbf00;
    border: none;
  }
`

export const Description = styled.div`
  max-width: 579px;

  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
`

export const Products = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25rem;

  > h1 {
    margin-top: 1.6rem;

    font-size: 4.8rem;
    line-height: 5.3rem;
    font-weight: 900;
    text-align: center;
  }

  > span {
    margin-top: 2.4rem;

    color: #ffffff;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }
`

export const FundsCards = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.65rem;
  margin-top: 5.6rem;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`
