import styled, { css } from 'styled-components'
import * as RadixSwitch from '@radix-ui/react-switch'

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 1.6rem;
    padding-bottom: 1.6rem;
    border-bottom: 1px solid rgba(252, 252, 252, 0.08);
  }
`

export const FilterSectionTitle = styled.h5`
  ${({ theme }) => css`
    padding: 0.8rem 2.4rem;

    color: ${theme.colors.snow};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.8rem; /* 128.571% */
  `}
`

export const FilterItem = styled.li``

export const ItemLabel = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex: 1 1 0%;
    gap: 1.2rem;
    justify-content: flex-start;
    align-items: center;

    padding: 1.2rem 2.4rem;

    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 300;
    line-height: 100%; /* 1.6rem */

    cursor: pointer;

    transition: ${theme.transition.default};

    image {
      border-radius: 999999px;
    }

    &:hover,
    &:has(> button[role='checkbox']:focus-visible) {
      /* background-color: ${theme.colors.darkPurple}; */

      /* > button[role='checkbox'][data-state='unchecked'] {
        border-color: ${theme.colors.magenta};
      } */
    }
  `}
`

export const CoinItem = styled.li`
  ${({ theme }) => css`
    span {
      color: ${theme.colors.neutral50};
    }
  `}
`

export const SearchInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 0.8rem 3.8rem;
    border: none;
    border: 2px solid ${theme.colors.neutral95};
    border-radius: 8px;

    color: ${theme.colors.neutral50};
    font-weight: ${theme.font.weight.light};
    font-size: 1.6rem;
    line-height: 2.4rem;

    background-color: ${theme.colors.neutral95};

    transition: ${theme.transition.default};

    &::placeholder {
      color: ${theme.colors.neutral50};
    }

    &:hover:not(:disabled) {
      border: 2px solid ${theme.colors.neutral80};

      background-color: ${theme.colors.neutral80};
    }

    &:focus-visible:not(:disabled) {
      border: 2px solid ${theme.colors.primary50};

      color: ${theme.colors.dark10};

      background-color: ${theme.colors.white};
      outline: none;

      svg {
        fill: ${theme.colors.primary50};
      }
    }
  `}
`
export const NameContainer = styled.div`
  ${({ theme }) => css`
    flex: 1 1 0%;

    color: ${theme.colors.grayDisabled};

    span {
      color: ${theme.colors.snow};
    }
  `}
`

export const ProWrapper = styled.label`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 1.6rem;
    padding-block: 0.8rem;
    padding-right: 1.6rem;
    border-bottom: 1px solid ${theme.colors.neutral95};

    color: ${theme.colors.neutral30};
    font-weight: ${theme.font.weight.light};

    cursor: pointer;

    transition: ${theme.transition.default};

    &:hover,
    &:focus-within {
      color: ${theme.colors.primary50};

      background-color: ${theme.colors.primary95};
    }
  `}
`

export const Toggle = styled(RadixSwitch.Root)`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;

    width: 3.9rem;
    height: 2.4rem;
    padding: 0.1rem;
    border: 1.5px solid #808e9d;
    border-radius: 75px;

    background-color: ${theme.colors.neutral95};

    cursor: pointer;

    &[data-state='checked'] {
      border: 1.5px solid ${theme.colors.primary50};

      background-color: ${theme.colors.primary50};
    }
  `}
`

export const Thumb = styled(RadixSwitch.Thumb)`
  ${({ theme }) => css`
    display: flex;
    justify-content: end;

    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;

    background-color: ${theme.colors.neutral50};

    transition: transform 100ms;

    &[data-state='checked'] {
      background-color: ${theme.colors.white};

      transform: translateX(1.7rem);
    }
  `}
`

export const SearchInputWrapper = styled.div`
  position: relative;

  max-width: 100%;
  margin-block: 0.8rem 1.6rem;
  padding-inline: 2.4rem;

  input {
    max-width: 100%;
    margin-inline: 0 !important;
    margin-left: 0 !important;
    padding-left: 3.6rem;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 3.2rem;
    z-index: 2;

    transform: translateY(-50%);
  }
`
