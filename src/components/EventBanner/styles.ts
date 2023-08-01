import styled, { css } from 'styled-components'
import { Wrapper } from '../Header/styles'

interface IEventBannerProps {
  isShowBanner: boolean
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

      @media (max-width: 576px) {
        top: 6.6rem;
      }
    }
  `}

  ${({ isShowBanner }) =>
    !isShowBanner &&
    css`
      ${Wrapper} {
        top: 0;
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
    width: 114rem;
    margin-top: 0;
    margin-inline: 2.4rem;
    padding-block: 1.6rem;

    > img {
      margin-left: 1.6rem;
      cursor: pointer;
    }

    @media (max-width: 768px) {
      padding-block: 0.8rem;
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
