import { Tag } from '@/components/Blog/Tag'
import { device } from '@/styles/theme'
import styled, { css } from 'styled-components'

export const GoBackWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    .back-button {
      color: ${theme.colors.neutral30};
      font: ${theme.font.text.textBase300};

      svg {
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
  `}

  @media ${device.tabletLarge} {
    display: flex;
  }
`

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3.6rem;

    margin-bottom: 3.2rem;
    padding-block: 8.4rem 3.2rem;
    border-bottom: 1px solid ${theme.colors.neutral95};

    img {
      object-fit: cover;

      border-radius: 8px;

      cursor: pointer;
    }

    h1 {
      color: ${theme.colors.snow};
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 3.52rem;
    }

    p {
      color: ${theme.colors.snow};
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
    }

    @media ${device.tabletLarge} {
      padding-top: 3rem;
    }

    @media ${device.mobile} {
      h1 {
        font: ${theme.font.text.text2xl};
      }

      p {
        font: ${theme.font.text.textSm300};
        letter-spacing: 0.048rem;
      }
    }
  `}
`

export const BackTags = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .back-button {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      padding-inline: 0.8rem;

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
  `}
`

export const Authors = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    justify-content: flex-start;
    align-items: center;

    span {
      color: ${theme.colors.grayDisabled};
    }
  `}
`

export const WritersImages = styled.div`
  white-space: nowrap;
  ${({ theme }) => css`
    > * {
      border-radius: 9999px;

      &:not(:first-child) {
        margin-left: -0.8rem !important;
      }

      &:not(:last-child) {
        border: 1px solid ${theme.colors.neutral80} !important;
      }
    }

    img {
      border-radius: 99999px;
    }
  `}
`

export const WritersNames = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral30};
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    letter-spacing: 0.048rem;
  `}
`

export const MetadataWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: flex-start;
  align-items: center;

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const PostMetadata = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral30};
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2rem;
    letter-spacing: 0.264rem;
    text-transform: uppercase;
  `}
`

export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const StyledTag = styled(Tag)`
  ${({ theme }) => css`
    @media ${device.mobile} {
      gap: 0.4rem;

      padding: 0.4rem 1.6rem;

      font: ${theme.font.text.textSm500};
    }
  `}
`
