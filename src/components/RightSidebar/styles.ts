import styled, { css, keyframes } from 'styled-components'
import { device } from '@/styles/theme'

interface IRightSidebarProps {
  isContentShowing: boolean
}

export const RightSidebar = styled.aside<IRightSidebarProps>`
  ${({ theme, isContentShowing }) => css`
    min-width: 28.6rem;
    max-width: min(38rem, 100%);
    width: 100%;
    position: sticky;
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    z-index: 10;
    flex: 1 1 70%;
    padding-top: 4.8rem;
    height: 100vh;

    overflow-y: auto;

    width: 38rem;

    border-left: 0.1rem solid transparent;
    border-bottom-right-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;

    background-color: transparent;

    transition: margin-top ${theme.transition.default};

    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }

    @media ${device.tabletLarge} {
      position: fixed;
      left: 0;
      width: 100%;
      max-width: 100%;
      margin-top: 0;
      padding-top: 14.8rem;
      overflow-y: auto;
      max-height: calc(100vh);

      background-color: ${isContentShowing ? 'transparent' : '#151117'};
      box-shadow: none;

      pointer-events: ${isContentShowing ? 'none' : 'all'};
    }

    @media ${device.mobile} {
      max-height: calc(100vh - 68px);
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

export const RightSidebarWrapper = styled.div<IRightSidebarWrapperProps>`
  ${({ isContentShowing }) => css`
    padding-right: 2.4rem;

    @media ${device.tabletLarge} {
      display: ${isContentShowing ? 'none' : 'block'};

      padding-inline: 2.4rem;

      ${isContentShowing ? null : fadeInAnimation};
    }
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const SectionTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font16};
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem; /* 150% */
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

    padding-top: 3.2rem;

    .back-button {
      color: ${theme.colors.snow};
      font: ${theme.font.text.textBase300};

      svg {
        path {
          fill: ${theme.colors.neutral40};
        }
      }

      &:hover {
        color: ${theme.colors.snow};

        svg {
          path {
            fill: ${theme.colors.snow};
          }
        }
      }
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
      text-decoration: none;
      display: flex;
      gap: 0.8rem;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      max-width: 24rem;

      color: rgba(252, 252, 252, 0.5);
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 300;
      line-height: 2.4rem;
      letter-spacing: 0.032rem;
      text-overflow: ellipsis;

      transition: color ${theme.transition.default};

      line-clamp: 2;

      &:hover {
        color: ${notAllowed ? theme.colors.grayDisabled : theme.colors.amber};

        cursor: ${notAllowed ? 'not-allowed' : 'pointer'};
      }

      &.active {
        &:hover {
          color: ${theme.colors.amber};
        }
        color: ${theme.colors.snow};
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
      color: ${theme.colors.amber};
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

export const RightSidebarLight = styled.div`
  position: absolute;
  bottom: 240px;
  left: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`
