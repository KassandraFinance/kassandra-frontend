import styled from 'styled-components'

export const Managers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25rem;

  text-align: center;

  h1 {
    max-width: 66.8rem;

    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.52rem;
  }

  span {
    margin-top: 2.4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    padding: 2.4rem;
    margin-top: 20rem;
  }

  @media (max-width: 576px) {
    padding: 0 1.6rem;
    align-items: left;
    text-align: left;

    span {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const Schema = styled.div`
  max-width: 102.8rem;

  margin-top: 4.8rem;

  /* margin-left: auto;
  margin-right: auto; */

  padding: 0 2.4rem;

  img {
    width: 100%;
    height: 100%;
  }

  .connecting {
    display: flex;
    justify-content: space-between;

    text-align: center;

    .description-connecting {
      max-width: 180px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      /* gap: 1.2rem; */

      span {
        margin-top: 3.2rem;

        color: #f79640;
        font-size: 12px;
        line-height: 12px;
        font-weight: 400;
        letter-spacing: 0.3em;
      }

      p {
        margin-top: 1.2rem;
        font-weight: 300;
        font-size: 14px;
        line-height: 17.15px;
      }
    }
  }

  @media (max-width: 992px) {
    max-width: 72rem;
    max-height: 217.68px;

    img {
      max-height: 114.16px;
    }
    .test {
      min-width: 72rem;
      min-height: 217.68px;
    }

    .connecting {
      .description-connecting {
        max-width: 126.07px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;

        span {
          margin-top: 2.1rem;

          color: #f79640;
          font-size: 12px;
          line-height: 12px;
          font-weight: 400;
          letter-spacing: 0.3em;
        }

        p {
          max-width: 126.07px;
          font-weight: 300;
          font-size: 14px;
          line-height: 17.15px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    display: none;
  }
`

export const DescriptionSafety = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
  }
`

export const DescriptionSafetyContent = styled.div`
  max-width: 48.8rem;

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.52rem;
  }

  span:last-child {
    max-width: 31.7rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    max-width: 64.3rem;

    align-items: center;

    h1 {
      width: 100%;

      text-align: center;
    }

    span:last-child {
      max-width: 64.3rem;

      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 300;
    }
  }

  @media (max-width: 576px) {
    min-width: 100%;

    align-items: flex-start;

    h1 {
      width: 100%;

      text-align: left;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    span:last-child {
      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    span:last-child {
      text-align: left;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export const ImageFundSafety = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64.5rem;
  height: 75.6rem;

  @media (max-width: 992px) {
    max-width: 64.5rem;
    max-height: 75.6rem;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
  }
`

export const FundSafety = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20.6rem;
  padding: 0 2.4rem;

  @media (max-width: 992px) {
    width: 100%;

    flex-direction: column;
  }

  @media (max-width: 576px) {
    width: 100%;

    padding: 0 1.6rem;
  }
`

export const Rebalance = styled.div`
  display: flex;
  align-items: center;
  gap: 17.7rem;
  padding: 0 2.4rem;

  @media (max-width: 992px) {
    width: 100%;

    flex-direction: column-reverse;
    justify-content: center;

    gap: 0;
  }

  @media (max-width: 576px) {
    width: 100%;

    padding: 0 1.6rem;
  }
`

export const BenefitsImagesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 4.8rem;

  @media (max-width: 780px) {
    gap: 8.3rem;
  }

  @media (max-width: 580px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22rem;
  text-align: center;

  h1 {
    max-width: 68.8rem;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.52rem;
  }

  span {
    margin-top: 2.4rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    padding: 0 2.4rem;

    h1,
    > span {
      max-width: 66.8rem;
    }
  }

  @media (max-width: 576px) {
    padding: 0 1.6rem;
    align-items: left;
    text-align: left;

    margin-top: 1.2rem;

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    span {
      font-size: 1.4rem;
    }
  }
`

export const BeneficitImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 13.2rem;
  height: 13.2rem;
  border-radius: 50%;

  background: rgba(252, 252, 252, 0.05);
  border: 0.1rem solid rgba(252, 252, 252, 0.15);

  @media (max-width: 580px) {
    width: 10rem;
    height: 10rem;
  }
`

export const BenefitsImagesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 2.4rem;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.22em;
    font-weight: 400;
  }

  .risk-reduction {
    margin-bottom: 1.2rem;
  }

  .network {
    margin-bottom: 1rem;
  }

  @media (max-width: 580px) {
    display: flex;
    flex-direction: row;
    span {
      margin-top: 0;
      margin-left: 2.4rem;
    }

    .delegation {
      width: 5.3rem;
      height: 5.3rem;
    }

    .risk-reduction {
      width: 5.6rem;
      height: 3.3rem;
      margin-bottom: 0.95rem;
    }

    .network {
      width: 5.7rem;
      height: 4.85rem;
      margin-bottom: 1.05rem;
    }
  }
`

export const Span = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.4em;
  color: #ffbf00;
`

export const ImageRebalance = styled.div`
  width: 48.5rem;
  height: 55.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    max-width: 48.5rem;
    max-height: 55.3rem;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }
`

export const DescriptionRebalance = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 580px) {
    justify-content: center;
    margin-top: 0;
  }
`

export const DescriptionRebalanceContent = styled.div`
  max-width: 38.3rem;
  display: flex;

  flex-direction: column;

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.52rem;
  }

  span:last-child {
    max-width: 31.7rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    max-width: 64.3rem;

    align-items: center;

    h1 {
      width: 100%;
      text-align: center;
    }

    span:last-child {
      max-width: 64.3rem;

      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 300;
    }
  }

  @media (max-width: 576px) {
    min-width: 100%;

    align-items: flex-start;

    h1 {
      width: 100%;
      text-align: left;

      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    span:last-child {
      text-align: left;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export const DescriptionAutonomy = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 992px) {
    justify-content: center;
  }
`

export const DescriptionAutonomyContent = styled.div`
  max-width: 39.2rem;

  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    font-weight: 700;
    font-size: 3.2rem;
    line-height: 3.52rem;
  }

  span:last-child {
    max-width: 31.7rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 992px) {
    max-width: 64.3rem;

    align-items: center;

    h1 {
      width: 100%;

      text-align: center;
    }

    span:last-child {
      max-width: 64.3rem;

      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 300;
    }
  }

  @media (max-width: 576px) {
    min-width: 100%;

    align-items: flex-start;

    h1 {
      width: 100%;

      text-align: left;
      font-size: 2.4rem;
      line-height: 3.2rem;
    }

    span:last-child {
      text-align: center;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }

    span:last-child {
      text-align: left;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export const ImageFundAutonomy = styled.div`
  max-width: 67.8rem;
  max-height: 51.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    max-width: 64.5rem;
    max-height: 75.6rem;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 680px) {
    margin-top: 0;
  }
`

export const FundAutonomy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5.4rem;
  padding: 0 2.4rem;

  @media (max-width: 992px) {
    width: 100%;

    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 576px) {
    width: 100%;

    padding: 0 1.6rem;
    margin-top: 0;
  }
`
