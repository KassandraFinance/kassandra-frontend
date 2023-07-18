/* eslint-disable prettier/prettier */
import Image from 'next/image'
import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const ArticleList = styled.article`
  ${({ theme }) => css`
    max-width: 192rem;
    border-radius: 8px;

    background-color: rgba(252, 252, 252, 0.08);

    .post-img {
      transition: scale ${theme.transition.default};
    }

    &:hover {
      .post-img {
        transition: scale ${theme.transition.default};
        scale: 110%;
      }
    }
  `}
`

interface IContentProps {
  borderShadow: 'true' | 'false'
  imageLeft?: 'true' | 'false'
  tabletView?: boolean
}

export const Content = styled.div<IContentProps>`
  ${({ borderShadow, imageLeft, theme, tabletView }) => css`
    display: flex;
    justify-content: ${imageLeft ? 'flex-start' : 'space-between'};

    min-height: 22.4rem;
    max-height: fit-content;
    border: ${borderShadow !== 'true'
      ? null
      : '1px solid rgba(252, 252, 252, 0.08)'};
    border-radius: 8px;

    box-shadow: ${borderShadow !== 'true'
      ? null
      : '0px 5px 15px rgba(0, 61, 132, 0.06)'};

    transition: box-shadow ${theme.transition.default};

    &:hover {
      box-shadow: ${borderShadow !== 'true'
        ? null
        : '0rem 0.1rem 2rem rgba(250, 250, 250, 0.08);'};

      cursor: pointer;

      transition: box-shadow ${theme.transition.default};
    }

    @media ${device.tabletLarge} {
      flex-direction: ${tabletView ? 'row' : 'row-reverse'};
      gap: 0;

      height: 100%;
    }
  `}
`

interface ITextContainerProps {
  tabletView?: boolean
}

export const TextContainer = styled.div<ITextContainerProps>`
  ${({ tabletView }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    justify-content: ${tabletView ? 'flex-start' : 'center'};

   ${tabletView ? '' : {width: '90rem'}} 
    padding-inline: 3.2rem;
    padding-block: 1.6rem;

    .pro-tag-mobile {
      position: relative;
      z-index: 2;

      visibility: hidden;
    }

    @media (max-width: 1200px) {
      padding: 1.6rem;
    }

    @media ${device.mobile} {
      .pro-tag-mobile {
        visibility: visible;
      }
    }
  `}
`
export const TextTitlePlusMarketing = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .text-title {
      color: ${theme.colors.snow};
      font: ${theme.font.text.text2xl};
    }

    .text-details {
      display: flex;
      justify-content: space-between;
      align-items: center;

      color: ${theme.colors.snow};
      font: ${theme.font.text.textXs300};
      letter-spacing: 0.048rem;
    }

    .text-summary {
      color: ${theme.colors.snow};
      font: ${theme.font.text.textBase300};
      letter-spacing: 0.016rem;
    }

    @media ${device.mobile} {
      .text-title {
        font: ${theme.font.text.textLg700};
      }

      .text-details {
        font: ${theme.font.text.textXs300};
      }

      .text-summary {
        font: ${theme.font.text.textXs300};
        letter-spacing: 0.048rem;
      }
    }
  `}
`

export const AuthorsImagesWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: start;
  align-items: center;

  width: 2.4rem;
  height: 2.4rem;

  &:not(:first-child) {
    margin-left: -0.8rem;
  }
`

export const AuthorPlusIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.4rem;
    justify-content: start;
    align-items: center;

    .text-footer {
      color: ${theme.colors.snow};
      font: ${theme.font.text.textXs300};
      letter-spacing: 0.048rem;
    }
  `}
`

export const ArticleAuthorImage = styled(Image)`
  border-radius: 99999px;
`

interface IImageContainerProps {
  tabletView?: boolean
}

// eslint-disable-next-line prettier/prettier
export const ImageContainer = styled.div<IImageContainerProps>`
  ${({ tabletView }) => css`
    position: relative;

    width: ${tabletView ? '29rem' : '42.8rem'};
    height: ${tabletView ? '11.4rem' : 'auto'};
    ${tabletView
      ? { marginTop: '1.6rem', marginRight: '1.6rem', marginLeft: '1.6rem' }
      : null}

    span {
      border-radius: 8px;
    }

    .pro-tag {
      position: absolute;
      top: 0;
      z-index: 1;

      margin: 1.6rem;
    }

    @media ${device.tabletLarge} {
      width: 29rem;
      height: 11.4rem;
      margin-top: 1.6rem;
      margin-right: 1.6rem;

      .pro-tag {
        right: 0;

        margin: 0.8rem;
      }
    }

    @media ${device.mobile} {
      display: none;
    }
  `}
`
