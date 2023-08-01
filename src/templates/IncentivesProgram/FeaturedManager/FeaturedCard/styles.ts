import styled, { css } from 'styled-components'

export const FeaturedCard = styled.div`
  ${() => css`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-block: 3.2rem;
    padding-inline: 2.4rem;
    gap: 2.4rem;
    border-radius: 0.8rem;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(255, 255, 255, 0.04) 100%
    );
    backdrop-filter: blur(2rem);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      border-radius: 0.8rem;
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

export const CardTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font24};
    line-height: 3.2rem;
    text-transform: uppercase;
  `}
`

export const CardParagraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayDisabled};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font16};
    line-height: 2.4rem;
  `}
`
