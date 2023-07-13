import Image from 'next/image'
import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const ArticleLink = styled.a`
  ${({ theme }) => css`
    position: relative;

    width: auto;
    text-decoration: none;

    .pro-tag {
      position: absolute;
      left: 0;
      z-index: 1;

      margin: 1.4rem 1.6rem;
    }

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

export const ArticleCard = styled.div`
  ${({ theme }) => css`
    overflow: hidden;

    border-radius: 8px;

    background-color: rgb(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.06);

    transition: box-shadow ${theme.transition.default};

    :hover {
      box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.2);

      transition: box-shadow ${theme.transition.default};
    }

    @media ${device.tabletSmall} {
      width: 100%;
    }
  `}
`

export const BannerImage = styled(Image)``

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.6rem;
`

export const ArticleTitle = styled.p`
  ${({ theme }) => css`
    display: -webkit-box;
    overflow: hidden;

    color: ${theme.colors.snow};
    font: ${theme.font.text.textLg700};
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  `}
`

export const Tags = styled.div`
  display: flex;
  gap: 0.8rem;

  margin-top: 1.6rem;

  .number-tags {
    padding: 0.2rem 0.8rem;
  }
`

export const ArticleDate = styled.span`
  ${({ theme }) => css`
    padding-bottom: 0.8rem;

    color: ${theme.colors.snow};
    font: ${theme.font.text.textXs300};
    letter-spacing: 0.048rem;
  `}
`
