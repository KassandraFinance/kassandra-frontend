import styled from 'styled-components'
import theme from '../../../styles/theme'
import Tippy from '@tippyjs/react'

export const ErrorTippy = styled(Tippy)`
  margin-bottom: -15px;
  border: 1px solid #e8372c;
  border-bottom: 3px solid #e8372c;
  background: rgba(31, 31, 31, 0.82);

  &[data-placement^='top'] > .tippy-arrow::before {
    margin-bottom: -1px;
    border-top-color: #e8372c;
  }
`

// ========== FORM ==========
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 40px 40px;
  max-height: 100%;

  .btn-submit {
    margin-top: 20px;
  }

  @media (max-width: 500px) {
    padding: 20px;
  }
`

export const SwapButton = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;

  img {
    transition: transform 300ms;
    margin: 12px 0;
  }
  img:last-child {
    transform: rotate(180deg);
    margin: 12px 0 12px 8px;
  }

  :hover,
  :focus {
    img:first-child {
      transform: rotate(-180deg);
    }
    img:last-child {
      transform: rotate(0deg);
    }
  }

  :focus {
    outline: 1px solid ${theme.colors.snow};
    border-radius: 5px;
  }
`

export const ExchangeRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`

export const TransactionSettings = styled.div`
  font-size: ${theme.font.sizes.font14};
  width: 100%;
  position: relative;
  margin-bottom: 10px;
  text-align: center;

  .settings {
    cursor: pointer;
    font-weight: ${theme.font.weight.light};
    padding-right: 5px;
  }

  #settingsBox {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    opacity: 0;
  }

  #settingsBox + img {
    transform: rotate(-180deg);
    transition: transform 300ms ease;
  }

  #settingsBox:focus + img {
    outline: 1px solid ${theme.colors.snow};
  }

  #settingsBox:checked + img {
    transform: rotate(0);
  }

  #settingsBox:checked + img + fieldset {
    display: block;
  }

  fieldset {
    text-align: left;
    display: none;
    margin-top: 15px;
    padding-bottom: 15px;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    legend {
      font-weight: ${theme.font.weight.light};
      margin-bottom: 16px;
    }

    .options {
      display: flex;
      gap: 8px;
    }

    .option {
      flex: 1;
      position: relative;

      span {
        color: ${theme.colors.snow};
        pointer-events: none;
        position: absolute;
        top: 10px;
        right: 18px;
      }

      &:last-child {
        flex: 2;

        label {
          position: absolute;
          width: 0;
          height: 0;
          border: none;
          padding: 0;
          opacity: 0;
          overflow: hidden;
        }
      }

      & > input:not(.custom) {
        opacity: 0;
        display: block;
        height: 0;
        width: 0;
      }
    }

    .custom,
    label {
      font-size: ${theme.font.sizes.font14};
      cursor: pointer;
      padding: 8px 18px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 3px;
      display: block;
      width: 100%;
      text-align: center;
    }

    .custom {
      cursor: auto;
      text-align: right;
      background: rgba(255, 255, 255, 0.15);
      color: ${theme.colors.snow};
      height: 100%;
      padding: 0 30px 0 18px;

      &::placeholder {
        color: ${theme.colors.snow};
      }

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      -moz-appearance: textfield;
      appearance: textfield;
    }

    input:checked + label,
    input:checked + .custom {
      background: ${theme.colors.snow};
      color: ${theme.colors.darkPurple};
      border-color: ${theme.colors.snow};

      &::placeholder {
        color: #948499;
      }
    }

    input:checked + .custom + span {
      color: ${theme.colors.darkPurple};
    }

    input:focus + label,
    input:focus + .custom:not(:focus) {
      outline: 1px solid ${theme.colors.snow};
      outline-offset: 1px;
    }

    .custom:focus {
      outline: none;
    }
  }
`

// ========== DEFAULT INPUT ALL ==========

export const InputTokensContainer = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 16px;
  display: flex;
  width: 100%;
  padding: 10px 16px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const Amount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`

interface ISpanProps {
  total?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Span = styled.span<ISpanProps>`
  color: ${props => (props.total ? theme.colors.amber : '#fff')};
  font-size: 14px;
  height: 17px;
  @media(max-width: 380px) {
    font-size: 13px;
  }
  @media(max-width: 350px) {
    font-size: 10.7px;
    padding-left: 12px;
  }
`

export const SpanLight = styled.span`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.3px;
  height: 17px;
  @media (max-width: 380px) {
    font-size: 13px;
  }
  @media (max-width: 350px) {
    font-size: 10.7px;
  }
`

interface ISymbolProps {
  bestValue?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Symbol = styled.h3<ISymbolProps>`
  display: flex;
  align-items: center;

  ${props =>
    props.bestValue
      ? `
    line-height: ${theme.font.sizes.font16};
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};
  
    margin: 8px 0;

    .image {
      margin-right: 8px !important;
    }
    
    @media(max-width: 380px) {
      font-size: 22px;
    }
    @media(max-width: 350px) {
      font-size: ${theme.font.sizes.font20};
    }`
      : `
      line-height: ${theme.font.sizes.font20};
      font-size: ${theme.font.sizes.font20};
      font-weight: ${theme.font.weight.normal};

      margin: 8px 0;

      .img {
        margin: 2px 8px 0 0;
      }

      span {
        margin-left: 8px;
      }

      @media(max-width: 380px) {
        font-size: ${theme.font.sizes.font16};
      }
      @media(max-width: 350px) {
        font-size: ${theme.font.sizes.font14};
      }
  `}
`

interface IButtonMax {
  isMax?: boolean;
  maxActive?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ButtonMax = styled.button<IButtonMax>`
  border: 1px solid ${theme.colors.gray};
  border-radius: 3px;
  /* background: ${props => (props.isMax ? '#26DBDB' : 'transparent')}; */
  /* color: ${props => (props.isMax ? '#000' : '#fff')}; */
  background: ${props => (props.maxActive ? '#fff' : 'transparent')};
  color: ${props => (props.maxActive ? '#000' : '#fff')};
  font-size: 12px;
  line-height: 12px;
  font-weight: 300;
  letter-spacing: .7px;

  width: 40px;
  height: 20px;
  padding: 3px 8px;

  cursor: pointer;
  transition: 100ms;
  &:hover {
    background: ${theme.colors.snow};
    border: 1px solid ${theme.colors.snow};
    color: #000;
  }
`

// ========== DEFAULT INPUT ALL ==========

interface IInputProps {
  bestValue?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Input = styled.input<IInputProps>`
  background-color: transparent;
  border: none;
  color: #fff;

  font-weight: ${theme.font.weight.normal};
  font-family: ${theme.font.family};

  ${props =>
    props.bestValue
      ? `
      line-height: ${theme.font.sizes.font14};
      font-size: ${theme.font.sizes.font14};
  `
      : `
      line-height: ${theme.font.sizes.font20};
      font-size: ${theme.font.sizes.font20};
  `}

  text-align: right;
  width: 100%;
  margin: 8px 0;

  outline: none;

  @media (max-width: 380px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
    font-size: ${theme.font.sizes.font20};
  }

  &::placeholder {
    color: #fff;
  }

  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`

// ========== INPUT DEFAULT ==========

export const InputBestValue = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 10px;

  width: 100%;
  padding: 16px 8px 16px 16px;
  margin-bottom: 8px;
`

export const IntroBestValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 8px;
  padding-bottom: 16px;
`

export const AllInput = styled.div`
  max-height: 230px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
  @media (max-height: 800px) {
    max-height: 100px;
  }
`

export const InputBestValueGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-start;
`

export const BestValueItem = styled.div`
  width: 100%;
  height: 74px;
`
