import styled, { css } from 'styled-components'
import { CardLinkWrapper } from '../LinkCard/styles'
import { SocialMidiaContent } from '@/components/SocialMidia/styles'

interface ICardWrapperProps {
  openCard: boolean
  height: number
}

export const NavSectionModalWrapper = styled.div<ICardWrapperProps>`
  ${() => css`
    position: absolute;
    top: 6rem;
    left: -6rem;

    display: flex;
    gap: 3.2rem;
    max-height: 0;

    opacity: 0;
    padding: 3.2rem;
    border-radius: 4px;
    border: 0.1rem solid rgba(252, 252, 252, 0.05);
    background: linear-gradient(164.99deg, #1b1d22 19.85%, #333437 116.33%);

    -webkit-box-shadow: 0px -2px 51px 10px rgba(0, 0, 0, 0.47);
    -moz-box-shadow: 0px -2px 51px 10px rgba(0, 0, 0, 0.47);
    box-shadow: 0px -2px 51px 10px rgba(0, 0, 0, 0.47);

    z-index: -1;

    overflow: hidden;

    transition-duration: 350ms;
    transition-timing-function: ease-in-out;
    transition-property: max-height opacity;

    @media (max-width: 1600px) {
      left: auto;
      right: 0;
    }

    @media (max-width: 1200px) {
      right: -4rem;
    }

    @media (max-width: 992px) {
      display: none;
    }

    ${SocialMidiaContent} + ${CardLinkWrapper} {
      pointer-events: none;
      z-index: -1;
    }
  `}

  ${({ openCard, height }) =>
    openCard &&
    css`
      max-height: ${height / 10}rem;
      z-index: 1041;
      opacity: 1;
    `}
`

export const SideRight = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 2;
  `}
`

export const SideLeft = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`
export const FollowUsWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `}
`

export const FollowUs = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal};
    line-height: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
  `}
`

export const CardTitleWrapper = styled.div`
  ${({ theme }) => css`
    text-align: start;
    width: 27.6rem;

    @media (max-width: 992px) {
      width: 100%;
    }

    p {
      margin-bottom: 0.8rem;

      font-size: ${theme.font.sizes.font24};
      font-weight: ${theme.font.weight.medium};
    }

    span {
      color: ${theme.colors.grayDisabled};
      font-size: ${theme.font.sizes.font16};
      font-weight: ${theme.font.weight.light};
    }
  `}
`

export const Line = styled.div`
  ${() => css`
    width: 0.2rem;
    background: #ffffff15;
  `}
`
