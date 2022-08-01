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
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 680px) {
    padding: 0 1.3rem;
    align-items: left;
    text-align: left;

    span {
      font-size: 1.4rem;
    }
  }
`

export const Schema = styled.div`
  max-width: 102.8rem;
  min-height: 27.8rem;

  margin-top: 4.8rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const DescriptionSafety = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 1050px) {
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

  @media (max-width: 1050px) {
    min-width: 64.3rem;

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

  @media (max-width: 680px) {
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
  width: 929px;
  height: 516px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  @media (max-width: 1050px) {
    width: 50%;
  }
`

export const FundSafety = styled.div`
  max-width: 1028px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30.8rem;

  @media (max-width: 1050px) {
    width: 100%;

    flex-direction: column;
  }

  @media (max-width: 680px) {
    width: 100%;

    padding: 0 1.3rem;
  }
`

export const Rebalance = styled.div`
  width: 1028px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 17rem;
  margin-bottom: -30.8rem;

  @media (max-width: 1050px) {
    width: 100%;

    flex-direction: column-reverse;
  }

  @media (max-width: 680px) {
    width: 100%;

    padding: 0 1.3rem;
  }
`

export const BenefitsImagesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 18.7rem;
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
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 780px) {
    h1,
    > span {
      max-width: 66.8rem;
    }
  }

  @media (max-width: 680px) {
    padding: 0 1.3rem;
    align-items: left;
    text-align: left;

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
  border: 1px solid rgba(252, 252, 252, 0.15);
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
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
  }

  @media (max-width: 1050px) {
    width: 50%;
  }
`

export const DescriptionRebalance = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: flex-end;

  @media (max-width: 1050px) {
    justify-content: center;
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

  @media (max-width: 1050px) {
    min-width: 64.3rem;

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

  @media (max-width: 680px) {
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
