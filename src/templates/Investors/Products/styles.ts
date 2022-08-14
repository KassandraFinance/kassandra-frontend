import styled from 'styled-components'

export const Products = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30.7rem;
  padding: 0 2.4rem;

  > h1 {
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

  @media (max-width: 992px) {
    padding-right: 2.4rem;
    padding-left: 2.4rem;
    margin-top: 7.6rem;
  }

  @media (max-width: 576px) {
    padding-right: 1.6rem;
    padding-left: 1.6rem;

    h1 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 700;
    }

    span {
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 300;
    }
  }
`

export const FundsCards = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5.6rem;
  gap: 3.65rem;

  @media (max-width: 690px) {
    flex-direction: column;
  }
`

export const Protocol = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  margin-top: 14.95rem;
  gap: 7.7rem;

  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`

export const DescriptionProtocol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > span:first-child {
    margin-bottom: 0;
  }

  max-width: 32rem;

  span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;
  }

  h1 {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;

    font-size: 3.2rem;
    line-height: 3.5rem;
    font-weight: 700;
  }

  a {
    margin-top: 3.2rem;
  }

  @media (max-width: 1080px) {
    max-width: 64.2rem;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 576px) {
    min-width: 33.1rem;

    align-items: flex-start;

    text-align: left;

    span {
      font-size: 1.4rem;
      letter-spacing: 0.05em;
    }
  }
`

export const DetailsProtocol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 680px) {
    padding: auto;
  }
`

export const Detail = styled.div`
  max-width: 63.2rem;
  min-height: 12.1rem;
  min-width: 33.1rem;
  max-height: 15.6rem;

  padding: 0 2.4rem;

  display: flex;
  align-items: center;
  gap: 3.3rem;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0) 100%
  );

  backdrop-filter: blur(18.6574px);
  border-radius: 1.7rem;

  @media (max-width: 680px) {
    /* width: 33.1rem;
    height: 15.6rem; */

    align-items: flex-start;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`

export const Icon = styled.div`
  min-width: 7.2rem;
  min-height: 7.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(252, 252, 252, 0.05);

  @media (max-width: 680px) {
    min-width: 4.7rem;
    min-height: 4.7rem;

    img {
      max-width: 2.8rem;
      max-height: 2.3rem;
    }
  }
`
export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    color: #ffbf00;
  }

  p {
    margin-top: 0.8rem;

    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 300;

    a {
      color: #fcfcfc;
      font-size: 1.6rem;
      line-height: 2.4rem;
      font-weight: 300;
      text-decoration: none;
    }

    a:hover {
      color: #26dbdb;
    }
  }

  @media (max-width: 680px) {
    span {
      font-size: 1.2rem;
      letter-spacing: 0.05em;
    }

    p {
      font-size: 1.4rem;
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
