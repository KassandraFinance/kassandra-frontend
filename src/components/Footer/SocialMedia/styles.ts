import styled, { css } from 'styled-components'

export const SocialMedia = styled.ul`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 2rem;
  `}
`

export const SocialWrapper = styled.a`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: border 300ms;

    cursor: pointer;

    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
  `}
`

export const IconWrapper = styled.div`
  ${() => css`
    position: relative;
    width: 2rem;
    height: 2rem;
  `}
`
