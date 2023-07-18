import styled, { css, keyframes } from 'styled-components'
import { device } from '../../styles/theme'

export const Article = styled.article`
  max-width: 118.8rem;
  width: 100%;
  margin-inline: auto;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin-top: 8rem;
  padding-inline: 2.4rem;

  @media ${device.tabletLarge} {
    padding-left: 0;
    position: relative;
    top: 7rem;
    bottom: 0;
    z-index: 1;

    overflow-y: auto;
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

      background-color: ${theme.colors.neutral30};
    }

    .progress-fill {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;

      height: 0.4rem;
      margin-top: 0;

      background-color: ${theme.colors.amber};
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
    padding-right: 6.4rem;
    margin-left: auto;
    @media ${device.tabletLarge} {
      width: 100%;
      display: block;
      overflow-y: ${!isContentShowing ? 'hidden' : 'auto'};

      max-width: auto;
      margin-right: 0;
      padding-inline: 2.4rem;

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
        color: ${theme.colors.snow};
        font: ${theme.font.text.text3xl};
        letter-spacing: -0.016rem;
        scroll-margin-top: 12.8rem;

        @media ${device.tabletLarge} {
          scroll-margin-top: 18rem;
        }
      }

      h3 {
        color: ${theme.colors.snow};
        font: ${theme.font.text.text2xl};
      }

      h4 {
        color: ${theme.colors.snow};
        font: ${theme.font.text.textLg500};
      }

      p {
        color: ${theme.colors.snow};
        font: ${theme.font.text.textBase300};
        letter-spacing: 0.032rem;
      }

      ul,
      ol {
        margin-left: 1rem;
        padding-left: 2rem;

        color: ${theme.colors.snow};
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

export const PostTopLeftLight = styled.div`
  position: absolute;
  top: 570px;
  left: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const PostBottomLeftLight = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const PostMiddleLeftLight = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const PostMiddleRightLight = styled.div`
  position: absolute;
  top: 15%;
  right: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const PostMiddleBottomRightLight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 0px;

  z-index: -1;

  @media ${device.tabletLarge} {
    display: none;
  }
`

export const Background = styled.div`
  position: absolute;
  top: var(--header-height);
  left: 0px;
  right: 0px;
  bottom: 0px;

  z-index: -1;

  background-image: url('/assets/images/backgroundBlog/background.svg');
  background-size: contain;

  @media ${device.tabletLarge} {
    display: none;
  }
`
