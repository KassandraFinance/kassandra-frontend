import styled, { css } from 'styled-components'

interface ICircleGradientProps {
  height: number
  width: number
}

export const CircleGradient = styled.div<ICircleGradientProps>`
  ${({ height, width }) => css`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    height: ${height}rem;
    width: ${width}rem;

    border-radius: 8rem;
    background: linear-gradient(
      134deg,
      rgba(232, 67, 196, 0.08) 0%,
      rgba(12, 61, 220, 0.08) 100%
    );

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 50%;
      border: 0.1rem solid transparent;

      background: linear-gradient(93.84deg, #e843c4 0.12%, #0c3ddc 100%)
        border-box;

      -webkit-mask: linear-gradient(#fff 0 0) padding-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: destination-out;
      mask-composite: exclude;
    }
  `}
`

export const text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.medium};
    line-height: ${theme.spacings.space32};
  `}
`
