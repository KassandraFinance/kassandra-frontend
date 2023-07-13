import styled, { css } from 'styled-components'
import { device } from '@/styles/theme'

export const AppliedFilters = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  min-width: max-content;
  height: 100%;

  @media ${device.mobile} {
    gap: 0.8rem;
  }
`

export const FilterTag = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    align-items: center;

    padding-block: 0.4rem;

    cursor: default;

    &:hover {
      span {
        color: ${theme.colors.snow};
      }
    }
  `}
`
interface IFilterTagTextProps {
  initiallyHiddenText?: string
}

export const FilterTagText = styled.span<IFilterTagTextProps>`
  ${({ theme, initiallyHiddenText }) => css`
    position: relative;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    border: 1px solid transparent;

    font: ${theme.font.text.textSm400};
    color: ${theme.colors.snow};
    letter-spacing: 0.048rem;

    overflow: hidden;

    ${initiallyHiddenText &&
    css`
      &::before {
        content: '${initiallyHiddenText}';
        position: relative;

        display: inline-block;
        overflow: hidden;

        max-width: 1px;

        white-space: nowrap;

        transition: 400ms ease-in-out;
        transition-property: max-width, opacity, transform;
        transform: translateX(-100%);
      }

      &:hover,
      &:focus-within {
        color: ${theme.colors.snow};

        &::before {
          content: '${initiallyHiddenText}';

          max-width: 300px;
          padding-right: 0.4rem;

          white-space: nowrap;

          transform: translateX(0);
        }
      }
    `}
  `}
`

export const FilterClearButton = styled.button`
  ${({ theme }) => css`
    border: none;
    background: transparent;
    color: ${theme.colors.snow};

    cursor: pointer;
  `}
`
