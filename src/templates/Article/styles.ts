import styled, { css, keyframes } from 'styled-components'
import { device } from '../../styles/theme'

export const Article = styled.article`
  position: relative;

  display: flex;
  justify-content: center;

  padding-bottom: 45rem;
  margin-top: 8rem;

  @media (max-width: 1440px) {
    padding-inline: 0.8rem;
    padding-bottom: 75rem;
  }

  @media ${device.tabletLarge} {
    position: relative;
    top: 7rem;
    bottom: 0;
    z-index: 1;

    overflow-y: auto;

    padding-bottom: 75rem;
  }

  @media ${device.tabletSmall} {
    padding-bottom: 112rem;
  }

  @media ${device.mobile} {
    padding-bottom: 115rem;
  }
`

export const ArticleProgressBar = styled.div`
  ${({ theme }) => css`
    transition: opacity ${theme.transition.default};

    .progress-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 98;

      width: 100%;
      height: 0.4rem;

      background-color: ${theme.colors.neutral80};
    }

    .progress-fill {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;

      height: 0.4rem;
      margin-top: 0;

      background-color: ${theme.colors.primary50};
    }

    @media ${device.tabletLarge} {
      .progress-backdrop,
      .progress-fill {
        top: calc(var(--header-height) + 6.4rem);

        opacity: 1;
      }
    }
  `}
`

interface IContentProps {
  isContentShowing: boolean
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const fadeInAnimation = css`
  animation: ${fadeIn} 0.3s ease-in-out forwards;
`

export const Content = styled.div<IContentProps>`
  ${({ isContentShowing }) => css`
    width: min(75.8rem, 100%);
    margin-right: 38rem;

    @media ${device.tabletLarge} {
      display: block;
      overflow-y: ${!isContentShowing ? 'hidden' : 'auto'};

      max-width: auto;
      margin-right: 0;
      padding-inline: 3.2rem;

      ${isContentShowing ? fadeInAnimation : null};
      transition-duration: ${isContentShowing ? '0.3s' : '0'};
    }

    @media ${device.mobile} {
      padding-inline: 1.6rem;
    }
  `}
`

export const Main = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    max-width: 100%;

    .markdown-content-wrapper {
      position: relative;

      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      max-width: 100%;

      transition: color ${theme.transition.default};

      figcaption {
        margin-top: 1rem;

        font: ${theme.font.text.textXs500};
        font-weight: 400;
      }

      h2 {
        color: ${theme.colors.white};
        font: ${theme.font.text.text3xl};
        letter-spacing: -0.016rem;
        scroll-margin-top: 1.6rem;

        @media ${device.tabletLarge} {
          scroll-margin-top: 14rem;
        }
      }

      h3 {
        color: ${theme.colors.white};
        font: ${theme.font.text.text2xl};
      }

      h4 {
        color: ${theme.colors.white};
        font: ${theme.font.text.textLg500};
      }

      p {
        color: ${theme.colors.white};
        font: ${theme.font.text.textBase300};
        letter-spacing: 0.032rem;
      }

      ul,
      ol {
        margin-left: 1rem;
        padding-left: 2rem;

        color: ${theme.colors.white};
        font-weight: ${theme.font.weight.light};
        font-size: ${theme.font.sizes.font18};
        line-height: 3.2rem;

        list-style: disc;
        list-style-position: outside;
      }

      ol {
        list-style: decimal;
      }

      img {
        object-fit: cover;

        width: 100%;
      }

      a {
        color: ${theme.colors.primary50};

        transition: color ${theme.transition.default};

        &:hover {
          color: ${theme.colors.primary30};
        }

        &:visited {
          color: ${theme.colors.purple60};
        }
      }

      .content-quote {
        padding: 4rem;
      }

      @media ${device.mobile} {
        h2 {
          font: ${theme.font.text.text2xl};
        }

        h3 {
          font: ${theme.font.text.textXl};
        }

        h4 {
          font: ${theme.font.text.textBase500};
        }

        p,
        ul,
        li,
        span,
        em {
          font: ${theme.font.text.textSm300};
          letter-spacing: 0.048rem;
        }
      }
    }
  `}
`
