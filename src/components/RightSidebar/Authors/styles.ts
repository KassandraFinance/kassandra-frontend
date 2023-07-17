import styled, { css } from 'styled-components'
import { device } from '../../../styles/theme'

export const AuthorsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 1.6rem;

    .back_button {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      margin-top: 4rem;
      padding-inline: 0.8rem;
      padding-top: 4rem;
      border-top: 1px solid ${theme.colors.neutral95};

      color: ${theme.colors.neutral30};
      font-weight: ${theme.font.weight.light};

      transition: color ${theme.transition.default};

      svg {
        width: 1.2rem;
        height: 1.2rem;

        path {
          fill: ${theme.colors.neutral30};
        }
      }

      &:hover {
        color: ${theme.colors.primary50};

        svg {
          path {
            fill: ${theme.colors.primary50};
          }
        }
      }
    }

    @media ${device.tabletLarge} {
      position: static;

      display: grid;
      grid-template-columns: repeat(2, 1fr);

      margin-right: 0;
      padding-bottom: 0;

      .back_button {
        margin-top: 3.2rem;
        padding-top: 0;
        border-top: none;
      }
    }

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    padding: 1.6rem;
    border: 1px solid ${theme.colors.neutral95};
    border-radius: 8px;

    background-color: white;
    box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.06);

    .author-biography {
      color: ${theme.colors.neutral30};
      font: ${theme.font.text.textXs300};
      letter-spacing: 0.048rem;
    }
  `}
`

export const AuthorHeader = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  span {
    max-height: 4rem;
    border-radius: 50%;

    img {
      object-fit: cover;
    }
  }
`

export const AuthorTitle = styled.div`
  ${({ theme }) => css`
    .author-name {
      color: ${theme.colors.neutral30};
      font-size: 1.8rem;
      line-height: 2.4rem;
      letter-spacing: 0.016rem;
    }

    .author-handle {
      color: ${theme.colors.neutral30};
      font: ${theme.font.text.textXs300};
      letter-spacing: 0.048rem;
    }
  `}
`
export const Socials = styled.div`
  display: flex;
  gap: 0.8rem;
`
