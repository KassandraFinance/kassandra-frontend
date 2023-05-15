import styled, { css } from 'styled-components'

export const Container = styled.article`
  display: flex;
  align-items: center;

  margin-top: 23.2rem;
  margin-bottom: 11.241rem;

  @media (max-width: 992px) {
    flex-direction: column;

    margin-top: 15rem;
    margin-bottom: 13.7rem;
  }

  @media (max-width: 576px) {
    margin-top: 4.8rem;
    margin-bottom: 5.6rem;
  }
`

export const TextContainer = styled.div`
  > h2 {
    margin-bottom: 1.6rem;
  }

  > h3 {
    width: 55rem;
    margin-bottom: 2.4rem;

    @media (max-width: 992px) {
      width: 100%;
      text-align: center;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }

  > p {
    width: 47.7rem;
    margin-bottom: 3.2rem;
    @media (max-width: 992px) {
      text-align: center;
      width: 100%;
    }
    @media (max-width: 576px) {
      text-align: left;
    }
  }
  a {
    text-decoration: none;
  }

  .btn {
    flex-direction: row-reverse;
  }

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 64.4rem;
  }

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`

interface ILineProps {
  color: string
}

export const Line = styled.div`
  ${({ color }: ILineProps) => css`
    width: 6.4rem;
    height: 0.1rem;
    margin-right: 1.9rem;
    margin-left: 1.6rem;

    background-color: ${color};
    border-radius: 0.4rem;
  `}
`
