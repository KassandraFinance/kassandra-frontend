import styled from 'styled-components'

export const PartnersContainer = styled.div`
  width: 100%;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.6rem; */
`

export const PartnersTitleWrapper = styled.div`
  position: relative;
  height: 37.6rem;

  background: url('/assets/images/blur-divisor-investor.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: 137.8rem 37.6rem;

  div {
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    h1 {
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 5.28rem;
    }

    @media (max-width: 576px) {
      h1 {
        font-size: 4rem;
        line-height: 4rem;
      }
    }
  }
`

export const PartnerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin-top: 5.6rem;

  @media (max-width: 560px) {
    grid-template-columns: 18rem 18rem;

    > div:last-child {
      grid-column: 1 / 3;
      grid-row: 5 / 6;

      display: flex;
      align-items: center;
      justify-content: center;

      a:last-child {
        img {
          max-width: 18rem;
          max-height: 5.84rem;
        }
      }
    }
  }
`
