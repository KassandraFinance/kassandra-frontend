import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const TitleBar = styled.button`
  ${({ theme }) => css`
    position: fixed;
    top: var(--header-height);
    z-index: 100;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    border: none;
    height: 6.4rem;

    background: #151117;

    opacity: 0;
    cursor: pointer;
    pointer-events: none;

    .title {
      color: ${theme.colors.snow};
      leading-trim: both;
      text-edge: cap;
      font-size: 1.6rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2.4rem; /* 150% */
      letter-spacing: 0.032rem;
    }

    .content {
      color: rgba(252, 252, 252, 0.8);
      leading-trim: both;
      text-edge: cap;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 300;
      line-height: 1.6rem; /* 133.333% */
      letter-spacing: 0.036rem;
    }

    @media ${device.tabletLarge} {
      opacity: 1;
      pointer-events: auto;
    }
  `}
`

export const TitleBarTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding-inline: 2.4rem;
  padding-block: 0.8rem;
`

export const TitleBarText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 90%;
  height: 100%;

  .title {
    overflow: hidden;

    width: 90%;

    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

interface ITitleBarButtonProps {
  rotated: boolean
}

export const TitleBarButton = styled.div<ITitleBarButtonProps>`
  ${({ theme, rotated }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: none;

    outline: none;

    svg {
      min-width: 2.4rem;
      min-height: 2.4rem;

      cursor: pointer;

      transition: rotate ${theme.transition.default};

      rotate: ${rotated ? '0' : '180deg'};
    }
  `}
`
