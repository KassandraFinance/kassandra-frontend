import styled, { css } from 'styled-components'

export const SocialMidia = styled.ul`
  ${() => css`
    display: flex;
    gap: 1.4rem;
  `}
`

export const SocialMidiaContent = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 3.2rem;

    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0);

    transition: border ${theme.transition.default};

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  `}
`
