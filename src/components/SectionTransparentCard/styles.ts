import styled, { css } from 'styled-components'

export const SectionTransparentCard = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 2.4rem;
    padding: 4rem 1.6rem;

    border-radius: 8px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    > p {
      max-width: 62rem;
      text-align: center;
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.6rem;

    @media (max-width: 576px) {
      flex-direction: column;

      .card-button {
        width: 100%;
      }
    }
  `}
`
