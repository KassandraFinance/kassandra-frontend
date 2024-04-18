import styled, { css } from 'styled-components'

export const CallToActionEndPage = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.6rem;

    > p {
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font32};
      line-height: ${theme.font.sizes.font36};
      text-align: center;
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
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

export const SocialButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`

const colors = {
  discord: '#5865F2',
  telegram: '#30A3E6'
}

interface ButtonProps {
  variant: 'discord' | 'telegram'
}

export const SocialButton = styled.a<ButtonProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1.6rem 3.2rem;

    height: 4.8rem;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0.4rem;
    background-color: ${colors[variant]};
    border: 0.1rem solid ${colors[variant]};

    span {
      color: ${theme.colors.white};
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font14};
    }

    @media (max-width: 576px) {
      width: 100%;
    }
  `}
`
