import styled, { css } from 'styled-components'
import { Wrapper } from '../Header/styles'

interface IEventBannerProps {
  isShowBanner: boolean
  isBlog: boolean
}

export const EventBanner = styled.div<IEventBannerProps>`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.blue};
    z-index: 10;

    ${Wrapper} {
      top: 5.6rem;
      transition: top 600ms ease-in-out;
    }
  `}

  ${({ isBlog }) =>
    isBlog &&
    css`
      @media (max-width: 992px) {
        position: sticky;
        position: -webkit-sticky;
        height: 6.4rem;
      }
    `}

  ${({ isShowBanner }) =>
    !isShowBanner &&
    css`
      ${Wrapper} {
        top: 0 !important;
      }

      ${EventBannerContent} {
        margin-top: -10rem;

        transition: margin-top 600ms ease-in-out;
      }
    `}
`

export const EventBannerContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 124rem;
    margin-top: 0;
    padding-inline: 2.4rem;
    padding-block: 1.6rem;

    .textMobile {
      display: none;
    }

    > img {
      margin-left: 1.6rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      padding-block: 0.8rem;
    }

    @media (max-width: 576px) {
      .textDesktop {
        display: none;
      }
      .textMobile {
        display: block;
      }
    }
  `}
`

export const BannerLink = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    width: 100%;

    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
    line-height: 2.4rem;
    letter-spacing: 0.64px;

    cursor: pointer;

    @media (max-width: 796px) {
      text-align: center;
    }

    @media (max-width: 576px) {
      font-size: ${theme.font.sizes.font14};
      line-height: 2rem;
    }
  `}
`
