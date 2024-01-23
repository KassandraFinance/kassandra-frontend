import styled, { css } from 'styled-components'

export const TransparentCard = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 1.6rem;
    gap: 1.6rem;

    border-radius: 16px;
    border-bottom: none;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.bold};
    line-height: 120%;
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDisabled};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    line-height: 150%;
  `}
`
