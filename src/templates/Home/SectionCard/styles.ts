import styled, { css } from 'styled-components'

type Container = {
  reverseLayout: boolean
}
export const Container = styled.article<Container>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  gap: 3.2rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }

  ${({ reverseLayout }) =>
    reverseLayout &&
    css`
      flex-direction: row-reverse;
    `}
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > h2 {
    margin-bottom: 1.6rem;
  }

  > h3 {
    max-width: 55rem;
    margin-bottom: 2.4rem;
  }

  > p {
    max-width: 47.7rem;
    margin-bottom: 3.2rem;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 992px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    a {
      width: 100%;
    }

    h3,
    p {
      max-width: 100%;
      text-align: left;
    }
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

export const ButtonWrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 3.2rem;

    .btn {
      flex-direction: row-reverse;
    }

    @media (max-width: 992px) {
      width: 100%;

      .btn {
        width: 100%;
      }
    }

    @media (max-width: 576px) {
      flex-direction: column;
      gap: 1.6rem;
    }
  `}
`
