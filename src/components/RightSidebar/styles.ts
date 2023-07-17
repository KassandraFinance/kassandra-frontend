import styled, { css, keyframes } from 'styled-components'
import { device } from '../../styles/theme'

interface IRightSidebarProps {
  isContentShowing: boolean
}

export const RightSidebar = styled.aside<IRightSidebarProps>`
  ${({ theme, isContentShowing }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 10;

    overflow-y: auto;

    width: 38rem;
    padding-top: 8.4rem;
    border-left: 0.1rem solid ${theme.colors.neutral95};
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;

    background-color: ${theme.colors.white};
    box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.06);

    transition: margin-top ${theme.transition.default};

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    @media ${device.tabletLarge} {
      left: 0;

      width: 100%;
      margin-top: 0;
      padding-top: 0;

      background-color: ${isContentShowing
        ? 'transparent'
        : theme.colors.white};
      box-shadow: none;

      pointer-events: ${isContentShowing ? 'none' : 'all'};
    }
  `}
`

interface IRightSidebarWrapperProps {
  isContentShowing: boolean
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeInAnimation = css`
  animation: ${fadeIn} 0.3s ease-in-out forwards;
`

// eslint-disable-next-line prettier/prettier
export const RightSidebarWrapper = styled.div<IRightSidebarWrapperProps>`
  ${({ isContentShowing }) => css`
    padding-inline: 3.2rem 6.4rem;

    @media ${device.tabletLarge} {
      display: ${isContentShowing ? 'none' : 'block'};

      padding-inline: 3.2rem;

      ${isContentShowing ? null : fadeInAnimation};
    }

    @media ${device.mobile} {
      padding-inline: 1.6rem;
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    p {
      color: ${theme.colors.dark10};
    }
  `}
`

export const SectionTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.dark10};
    font: ${theme.font.text.textBase500};
    letter-spacing: 0.032rem;
  `}
`

interface IPostsContentProps {
  notAllowed?: boolean
}

export const GoBackWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding-top: 6.8rem;

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

    @media ${device.tabletLarge} {
      padding-top: 16rem;
    }
  `}
`

export const PostsContent = styled.div<IPostsContentProps>`
  ${({ theme, notAllowed }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    align-items: flex-start;

    padding-bottom: 4rem;
    border-bottom: 0.1rem solid ${theme.colors.neutral95};

    .content-title {
      display: flex;
      gap: 0.8rem;
      justify-content: center;
      align-items: center;

      color: ${theme.colors.dark10};
      font: ${theme.font.text.textBase300};
      letter-spacing: 0.032rem;

      .locked-icon {
        width: 2rem;
        height: 2rem;
      }
    }

    .topics-buttons {
      display: flex;
      justify-content: flex-start;

      width: fit-content;

      color: ${notAllowed ? theme.colors.neutral50 : theme.colors.neutral30};
      font: ${theme.font.text.textBase300};
      letter-spacing: 0.032rem;

      &:hover {
        cursor: ${notAllowed ? 'not-allowed' : 'pointer'};
      }
    }

    .post-title {
      display: flex;
      gap: 0.8rem;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      max-width: 24rem;

      font: ${theme.font.text.textBase300};
      text-overflow: ellipsis;

      transition: color ${theme.transition.default};

      line-clamp: 2;

      &:hover {
        color: ${notAllowed ? null : theme.colors.primary50};

        cursor: ${notAllowed ? 'not-allowed' : 'pointer'};
      }

      &.active {
        font: ${theme.font.text.textBase500};
      }
    }

    .unlock-btn {
      display: flex;
      justify-content: flex-start;

      color: ${theme.colors.primary50};

      svg {
        path {
          fill: ${theme.colors.primary50} !important;
        }
      }
    }

    .bulletpoint {
      color: ${theme.colors.primary50};
      font-size: 2.5rem;
    }

    .disabled {
      color: ${theme.colors.neutral80};
    }

    @media ${device.tabletLarge} {
      padding-block: 4rem 4rem;

      .post-title {
        max-width: 100%;
      }
    }

    @media ${device.mobile} {
      padding-block: 2rem 4rem;
    }
  `}
`

export const LinksContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding-bottom: 4rem;
    border-bottom: 1px solid ${theme.colors.neutral95};
  `}
`

export const ShareContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Buttons = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const TagsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  @media ${device.mobile} {
    width: auto;
  }
`

export const CoinContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Coins = styled.div`
  display: flex;
  gap: 1.6rem;

  a {
    transition: all 0.3s ease-in-out;

    img {
      border-radius: 50%;
    }
  }

  a:hover {
    opacity: 0.3;
  }

  .hidden-coin {
    cursor: not-allowed;
  }
`

export const AuthorsContent = styled.div`
  padding-bottom: 5.5rem;

  background-color: transparent;
`
