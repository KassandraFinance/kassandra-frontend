import styled from 'styled-components'

export const PartnersContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 27rem;

  background: url('/assets/images/blur-divisor-investor.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center top;

  h1 {
    margin-top: 47.1rem;
    margin-bottom: 5.6rem;

    font-size: 4.8rem;
    font-weight: 900;
    line-height: 5.28rem;
  }

  @media (max-width: 680px) {
    h1 {
      margin-top: 30.8rem;
    }
  }
`

export const PartnerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 560px) {
    grid-template-columns: 18rem 18rem;

    a:last-child {
      grid-column: 1 / 3;
      grid-row: 5 / 6;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 18rem;
        max-height: 5.84rem;
      }
    }
  }
`
