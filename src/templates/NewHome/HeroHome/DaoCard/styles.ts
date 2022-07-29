import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const DaoCardContainer = styled.div`
  position: relative;
  top: -2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  max-width: 28.6rem;
  height: 13.6rem;
  padding: 3.2rem;

  background: rgba(255, 255, 255, 0.04);
  border-radius: 1.72222rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(0.55rem);
  opacity: 0;

  animation-timing-function: ease;
  animation: staggered 1s forwards;
  animation-delay: 1s;

  @supports not (
    (backdrop-filter: blur(3rem)) or (-webkit-backdrop-filter: blur(3rem))
  ) {
    background: rgba(31, 41, 55, 0.6);
  }

  @media (max-width: 693px) {
    height: fit-content;
    padding: 1.6rem;
  }

  @keyframes staggered {
    0% {
      top: -2rem;
      opacity: 0;
    }
    100% {
      top: 0;
      opacity: 1;
    }
  }
`

export const Value = styled.span`
  display: inline-block;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.normal};
  font-size: clamp(${theme.font.sizes.font20}, 5vw, ${theme.font.sizes.font40});
  line-height: 100%;
  letter-spacing: 0.05em;
`

export const Title = styled.span`
  display: inline-block;

  color: ${theme.colors.magenta};
  font-weight: ${theme.font.weight.normal};
  font-size: clamp(
    ${theme.font.sizes.font12},
    2.5vw,
    ${theme.font.sizes.font14}
  );
  line-height: ${theme.font.sizes.font16};
  letter-spacing: 0.21em;
  text-transform: uppercase;
`
