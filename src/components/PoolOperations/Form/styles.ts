import styled, { css } from 'styled-components'
import theme from '../../../styles/theme'
import Tippy from '@tippyjs/react'

export const ErrorTippy = styled(Tippy)`
  margin-bottom: -1.5rem;

  background-color: rgba(31, 31, 31, 0.82);
  border: 0.1rem solid #e8372c;
  border-bottom: 0.3rem solid #e8372c;

  &[data-placement^='top'] > .tippy-arrow::before {
    margin-bottom: -0.1rem;
    border-top-color: #e8372c;
  }
`

// ========== FORM ==========
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: 100%;
  padding-top: 2rem;
  padding-right: 3.2rem;
  padding-bottom: 3.2rem;
  padding-left: 3.2rem;

  .btn-submit {
    margin-top: 2rem;
  }

  @media (max-width: 500px) {
    padding: 2rem;
  }
`

export const SwapButton = styled.button`
  margin: 0;
  padding: 0;

  background: none;
  border: none;

  cursor: pointer;

  img {
    margin: 1.2rem 0;
    transition: transform 300ms;
  }

  img:last-child {
    margin-top: 1.2rem;
    margin-right: 0;
    margin-bottom: 1.2rem;
    margin-left: 0.8rem;

    transform: rotate(180deg);
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
    border-radius: 0.5rem;
    outline: 0.1rem solid ${theme.colors.snow};
  }
`

export const ExchangeRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 0.8rem;
`

export const TransactionSettingsOptions = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 0.6rem;
`

export const TransactionSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: ${theme.font.sizes.font14};
  text-align: center;

  button {
    position: relative;
    display: flex;
    align-items: center;

    margin-left: 0.4rem;

    border: none;
    background-color: transparent;

    cursor: pointer;
    transition: transform 300ms ease;

    :hover {
      transform: rotate(-180deg);
    }
  }

  label {
    display: flex;

    color: ${theme.colors.grayDisabled};
    font-size: ${theme.font.sizes.font14};
    font-weight: 300;

    > span {
      margin-left: 0.4rem;
    }

    @media (max-width: 360px) {
      font-size: 1.07rem;
    }
  }

  fieldset {
    position: absolute;
    right: 0.1rem;
    bottom: 3rem;

    padding: 2rem;

    background-color: #1f2937;
    border-radius: 1rem;
    border: 0.1rem solid rgba(255, 255, 255, 0.3);

    animation: OpenModalSettings 600ms ease;
    z-index: 22;

    @keyframes OpenModalSettings {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @media (max-width: 960px) {
      padding: 1.6rem;
    }

    @media (max-width: 360px) {
      padding: 1.2rem;
      right: -2rem;
    }
  }
`

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  z-index: 20;
`

export const TransactionContentOptions = styled.div`
  position: relative;

  display: flex;
  align-items: center;
`

export const TransactionOptions = styled.div`
  display: flex;
  gap: 1.1rem;

  @media (max-width: 550px) {
    gap: 0.8rem;
  }
`
export const TransactionOption = styled.div`
  position: relative;
  flex: 1;

  span {
    position: absolute;
    top: 1rem;
    right: 1.8rem;

    color: ${theme.colors.snow};
    pointer-events: none;
  }

  &:last-child {
    flex: 2;

    label {
      position: absolute;

      width: 0;
      height: 0;
      padding: 0;

      border: none;
      opacity: 0;
      overflow: hidden;
    }
  }

  & > input:not(.custom) {
    display: block;
    height: 0;
    width: 0;

    opacity: 0;
  }

  .custom,
  label {
    display: block;
    width: 7.2rem;
    padding: 0.8rem 1.8rem;

    font-size: ${theme.font.sizes.font14};
    text-align: center;

    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    border-radius: 0.3rem;

    cursor: pointer;

    @media (max-width: 550px) {
      width: 6rem;
    }
  }

  .custom {
    width: 9.2rem;
    height: 100%;

    padding-top: 0;
    padding-right: 3.2rem;
    padding-bottom: 0;
    padding-left: 1.8rem;

    color: ${theme.colors.snow};
    text-align: right;

    background-color: rgba(255, 255, 255, 0.15);
    cursor: auto;

    &::placeholder {
      color: ${theme.colors.snow};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    -moz-appearance: textfield;
    appearance: textfield;

    @media (max-width: 550px) {
      width: 7.5rem;
    }
  }

  input:checked + label,
  input:checked + .custom {
    font-weight: 450;
    color: ${theme.colors.darkPurple};

    background-color: ${theme.colors.snow};
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
    outline: 0.1rem solid ${theme.colors.snow};
    outline-offset: 0.1rem;
  }

  .custom:focus {
    outline: none;
  }
`

// ========== DEFAULT INPUT ALL ==========

export const InputTokensContainer = styled.div`
  display: flex;

  width: 100%;
  padding: 1rem 1.6rem;

  background: rgba(31, 31, 31, 0.72);
  border-radius: 1.6rem;
`

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  width: 100%;
`

export const Top = styled.div`
  display: flex;
  align-items: flex-end;

  width: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
`

export const Amount = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  /* justify-content: space-between; */

  width: 100%;
  /* height: 100%; */

  .price-dolar {
    margin-top: 0.2rem;

    color: #c4c4c4;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
  }
`

interface ISpanProps {
  color: 'red' | 'white' | 'amber';
}

const colors = {
  red: '#E8372C',
  white: '#ffffff',
  amber: '#FFBF00'
}

// prettier-ignore
export const Span = styled.span<ISpanProps>`
  color: ${({color}) => colors[color]};
  font-size: ${theme.font.sizes.font12};

  @media(max-width: 380px) {
    font-size: 1.3rem;
  }

  @media(max-width: 360px) {
    padding-left: 1.2rem;
    font-size: 1.07rem;
  }
`

export const SpanLight = styled.span`
  height: 1.7rem;

  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.03rem;

  @media (max-width: 380px) {
    font-size: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.07rem;
  }
`

interface IPriceImpactWrapperProps {
  price: string | number;
}

// prettier-ignore
export const PriceImpactWrapper = styled.span<IPriceImpactWrapperProps>`
  height: 1.7rem;

  ${( {  price }) => css`
    color: ${price <= 1 ? '#5EE56B' : price <= 2 ? '#bdbdbd' : price <= 5 ?'orange' : '#E8372C'};
  `}

  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  letter-spacing: 0.03rem;

  @media (max-width: 380px) {
    font-size: 1.3rem;
  }

  @media (max-width: 360px) {
    font-size: 1.07rem;
  }
`

interface ISymbolProps {
  bestValue?: boolean;
}

// prettier-ignore
export const Symbol = styled.h3<ISymbolProps>`
  display: flex;
  align-items: center;

  ${props =>
    props.bestValue
      ? `
    line-height: ${theme.font.sizes.font16};
    margin: 0.8rem 0;

    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.normal};

    .image {
      margin-right: 0.8rem !important;

      img {
        border-radius: 50%;
      }
    }

    @media(max-width: 380px) {
      font-size: 2.2rem;
    }

    @media(max-width: 360px) {
      font-size: ${theme.font.sizes.font16};
    }`
      : `
      line-height: ${theme.font.sizes.font20};
      font-size: ${theme.font.sizes.font20};
      font-weight: ${theme.font.weight.normal};

      margin: 0.8rem 0;

      .img {
        margin-top: 0.2rem;
        margin-right: 0.8rem;
      }

      span {
        margin-left: 0.8rem;
      }

      @media(max-width: 380px) {
        font-size: ${theme.font.sizes.font16};
      }
      @media(max-width: 360px) {
        font-size: ${theme.font.sizes.font14};
      }
  `}
`

interface IButtonMax {
  isMax?: boolean;
  maxActive?: boolean;
}

// prettier-ignore
export const ButtonMax = styled.button<IButtonMax>`
  width: 4rem;
  height: 2rem;
  padding: 0.3rem 0.8rem;

  color: ${props => (props.maxActive ? '#000' : '#fff')};
  font-size: ${theme.font.sizes.font12};
  line-height: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.07rem;

  background-color: ${props => (props.maxActive ? '#fff' : 'transparent')};
  border: 0.1rem solid ${theme.colors.gray};
  border-radius: 0.3rem;

  cursor: pointer;
  transition: 100ms;

  &:hover {
    color: #000;

    background: ${theme.colors.snow};
    border: 0.1rem solid ${theme.colors.snow};
  }
`

// ========== DEFAULT INPUT ALL ==========

interface IInputProps {
  bestValue?: boolean;
}

// prettier-ignore
export const Input = styled.input<IInputProps>`
  width: 100%;
  margin: 0.8rem 0;

  color: #fff;
  font-weight: ${theme.font.weight.normal};
  font-family: ${theme.font.family};
  text-align: right;
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

  background-color: transparent;
  border: none;

  outline: none;

  @media (max-width: 380px) {
    font-size: 2.2rem;
  }

  @media (max-width: 360px) {
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
  width: 100%;
  margin-bottom: 0.8rem;
  padding-top: 1.6rem;
  padding-right: 0.8rem;
  padding-bottom: 1.6rem;
  padding-left: 1.6rem;

  background-color: rgba(31, 31, 31, 0.72);
  border-radius: 1rem;
`

export const IntroBestValue = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 0.8rem;
  padding-bottom: 1.6rem;
`

export const AllInput = styled.div`
  max-height: 23rem;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
  @media (max-height: 800px) {
    max-height: 10rem;
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
  height: 7.4rem;
`
