import styled from 'styled-components'

export const PartnersContainer = styled.div`
  width: 100%;
`

export const PartnersTitleWrapper = styled.div`
  div {
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
  align-items: center;
  justify-items: center;

  max-width: 1028px;
  margin-inline: auto;
  margin-top: 5.6rem;

  @media (max-width: 560px) {
    grid-template-columns: 1fr 1fr;

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
