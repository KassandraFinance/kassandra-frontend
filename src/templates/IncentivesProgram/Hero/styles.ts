import styled, { css } from 'styled-components'

export const HeroWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-block: 6.4rem;

    text-align: center;

    .heroParagraph {
      max-width: 81.6rem;
      margin-top: 1.6rem;
    }

    .heroButton {
      margin-top: 3.2rem;

      @media (max-width: 576px) {
        width: 100%;
      }
    }

    @media (max-width: 992px) {
      padding-inline: 2.4rem;
    }

    @media (max-width: 576px) {
      padding-inline: 0;
    }
  `}
`
export const Title = styled.h1`
  ${({ theme }) => css`
    margin-top: 0.8rem;
    max-width: 97.2rem;

    color: ${theme.colors.white};
    font-weight: ${theme.font.weight.black};
    font-size: ${theme.font.sizes.font64};
    line-height: 7.2rem;

    @media (max-width: 992px) {
      font-size: ${theme.font.sizes.font40};
      line-height: ${theme.font.sizes.font40};
    }

    @media (max-width: 576px) {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font36};
      line-height: ${theme.font.sizes.font40};
    }
  `}
`

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.amber};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};
    line-height: ${theme.font.sizes.font20};
    letter-spacing: 0.4em;
    text-transform: Uppercase;

    @media (max-width: 992px) {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font14};
      line-height: ${theme.font.sizes.font16};
    }
  `}
`
