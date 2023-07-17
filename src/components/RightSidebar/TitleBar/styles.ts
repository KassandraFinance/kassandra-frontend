import styled, { css } from 'styled-components'
import { device } from '../../../styles/theme'

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

    background-color: ${theme.colors.white};
    box-shadow: 0 0.5rem 1.5rem rgb(0 61 132 / 0.06);

    opacity: 0;
    cursor: pointer;
    pointer-events: none;

    .title {
      color: ${theme.colors.primary50};
      font-weight: ${theme.font.weight.medium};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4rem;
    }

    .content {
      color: ${theme.colors.primary50};
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font12};
      line-height: 2.4rem;
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
  padding-inline: 3.2rem;
  padding-block: 0.8rem;

  @media ${device.mobile} {
    padding-inline: 1.6rem;
  }
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

// eslint-disable-next-line prettier/prettier
export const TitleBarButton = styled.div<ITitleBarButtonProps>`
  ${({ theme, rotated }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    border: none;

    background-color: transparent;
    outline: none;

    svg {
      min-width: 2.4rem;
      min-height: 2.4rem;

      cursor: pointer;

      transition: rotate ${theme.transition.default};

      rotate: ${rotated ? '180deg' : '0'};
    }
  `}
`
