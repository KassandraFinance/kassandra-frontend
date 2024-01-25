import { FadeInVerticalContainer } from '@/components/Animations/FadeInVertical/styles'
import { Paragraph } from '@/components/Paragraph/styles'
import { Subtitle } from '@/components/Subtitle/styles'
import styled, { css } from 'styled-components'

export const DaoCardWrapper = styled.div`
  ${() => css``}
`

export const InteractionDao = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  margin-top: 10rem;
  width: 100%;

  align-items: center;
  gap: 12rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 6rem;
  }
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    ${Subtitle} {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font32};
      line-height: 35.2px;
    }

    ${Paragraph} {
      color: ${theme.colors.grayDisabled};
    }

    .btn {
      margin-top: 3.4rem;
      max-width: 28rem;
    }

    @media (max-width: 992px) {
      order: 1;

      ${Subtitle} {
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.sizes.font24};
      }
    }

    @media (max-width: 576px) {
      ${Subtitle} {
        font-weight: ${theme.font.weight.medium};
        font-size: ${theme.font.sizes.font24};
      }

      .btn {
        margin-top: 1.6rem;
        max-width: 100%;
      }
    }
  `}
`

export const CardsWrapper = styled.div`
  ${() => css`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 0.5fr 0.5fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'compliant compliant compliant compliant compliant'
      'transparency transparency infrastructure infrastructure infrastructure'
      'custody custody custody fundAdmin fundAdmin';
    gap: 2rem;

    ${FadeInVerticalContainer}:nth-child(1) {
      grid-area: compliant;
    }
    ${FadeInVerticalContainer}:nth-child(2) {
      grid-area: transparency;
    }
    ${FadeInVerticalContainer}:nth-child(3) {
      grid-area: infrastructure;
    }
    ${FadeInVerticalContainer}:nth-child(4) {
      grid-area: custody;
    }
    ${FadeInVerticalContainer}:nth-child(5) {
      grid-area: fundAdmin;
    }

    @media (max-width: 992px) {
      order: 2;
    }

    @media (max-width: 576px) {
      display: flex;
      flex-direction: column;
      gap: 5.6rem;
    }
  `}
`
