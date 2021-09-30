import styled, { css } from 'styled-components'

export const HeimOperationsContainer = styled.div`
  max-width: 440px;
  @media (max-width: 900px) {
    margin: 0 auto;
    display: block;
  }
`

export const SelectOperator = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
`

export const Input = styled.input`
  ${({ theme }) => css`
    display: none;
    &[type="radio"] + label {
      border: 1px solid ${theme.colors.cyan};
      color: #fff;
      &:hover {
        color: ${theme.colors.cyan};
      }
    }

    &[type="radio"]:checked + label {
      background-color: ${theme.colors.cyan};
      border: 2px solid ${theme.colors.cyan};
      color: ${theme.colors.darkPurple};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.cyan};
    border-radius: ${theme.border.radius};
    color: #fff;
    font-size: ${theme.font.sizes.font20};
    text-align: center;
    text-transform: capitalize;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    height: 40px;
    @media (max-width: 375px) {
      font-size: 13px;
      padding: 10px 18px;
    }
    @media (max-width: 330px) {
      font-size: ${theme.font.sizes.font12};
      padding: 8px 14px;
    }
  `}
`
