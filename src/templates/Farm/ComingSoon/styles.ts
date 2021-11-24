import styled from 'styled-components'
import theme from '../../../styles/theme'

export const BorderGradient = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 6px;

  position: relative;
  width: 295px;
  max-height: 474px;
  z-index: 1;

  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 270px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${theme.border.radius};
    padding: 1px;
    background: linear-gradient(
      -45deg,
      ${theme.colors.blue} 0%,
      ${theme.colors.cyan} 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`

export const ComingSoon = styled.div`
  background: linear-gradient(
    95.32deg,
    rgba(38, 219, 219, 0.18) 0%,
    rgba(12, 61, 220, 0.18) 100%
  );
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  h2 {
    font-size: ${theme.font.sizes.font24};
    font-weight: ${theme.font.weight.normal};
    text-transform: uppercase;
  }
`
