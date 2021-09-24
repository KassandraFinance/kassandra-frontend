import styled from "styled-components";
import theme from '../../../styles/theme'

// ========== FORM ==========
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  height: 100%;
`

// ========== DEFAULT INPUT ALL ==========

interface IPayWithProps {
  inputHeim?: boolean
}

export const PayWith = styled.div<IPayWithProps>`
  text-align: left;
  position: relative;
  width: 190px;
  height: ${props => props.inputHeim ? '100px' : '94px'};

  @media (max-width: 504px) {
    width: 160px;
  }
  @media (max-width: 430px) {
    width: 130px;
  }
`

interface IAmountProps {
  inputHeim?: boolean
}

export const Amount = styled.div<IAmountProps>`
  text-align: right;
  position: relative;
  width: 190px;
  height: ${props => props.inputHeim ? '100px' : '94px'};
  padding-right: 12px;

  @media (max-width: 504px) {
    width: 160px;
  }
  @media (max-width: 430px) {
    width: 130px;
  }
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: ${theme.font.sizes.font24};

  text-align: right;
  width: 100%;
  margin: 8px 0;

  outline: none;

  @media(max-width: 380px) {
    font-size: 22px;
  }
  @media(max-width: 350px) {
    font-size: ${theme.font.sizes.font20};
  }

  &::placeholder {
    color: #fff;
  }

  &[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
`
export const Line = styled.div`
  content: '';
  display: block;
  width: 190px;
  height: 2px;
  background-color: ${theme.colors.cyan};
  box-shadow: 1px 1px 5px ${theme.colors.cyan};
  bottom: 0;
  position: absolute;
  @media (max-width: 504px) {
    width: 160px;
  }
  @media (max-width: 430px) {
    width: 130px;
  }
`

export const Span = styled.span`
  font-size: 14px;
  height: 17px;
  padding-left: 12px;
  @media(max-width: 380px) {
    font-size: 13px;
  }
  @media(max-width: 350px) {
    font-size: 10.7px;
    padding-left: 12px;
  }
`

export const SpanLight = styled.span`
  font-size: ${theme.font.sizes.font14};
  height: 17px;
  font-weight: ${theme.font.weight.light};
  letter-spacing: .3px;
  padding-left: 12px;
  @media(max-width: 380px) {
    font-size: 13px;
  }
  @media(max-width: 350px) {
    font-size: 10.7px;
  }

`

export const Symbol = styled.h3`
  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.normal};

  margin: 8px 0;
  padding-left: 12px;
  @media(max-width: 380px) {
    font-size: 22px;
  }
  @media(max-width: 350px) {
    font-size: ${theme.font.sizes.font20};
  }
`

export const ImgArrowLong = styled.img`
  margin: 76px auto 0 auto;
`

interface IButtonMax {
  isMax?: boolean
}

export const ButtonMax = styled.button<IButtonMax>`
  border: 1px solid #26DBDB;
  border-radius: 16px;
  background: ${props => props.isMax ? '#26DBDB' : 'transparent'};
  color: ${props => props.isMax ? '#000' : '#fff'};
  font-size: 12px;
  line-height: 12px;
  font-weight: 300;
  letter-spacing: .7px;

  width: 56px;
  height: 20px;
  padding: 4px 16px;

  cursor: pointer;
  transition: 100ms;
  &:hover {
    background: #26DBDB;
    color: #000;
  }
`


// ========== INPUT TOKENS ==========

export const InputTokensContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px 1fr;
  justify-content: space-around;
  align-items: flex-start;

  width: 100%;
  height: 94px;
  margin-top: 8px;
  @media(max-width: 504px) {
    grid-template-columns: 1fr 60px 1fr;
  }
  @media(max-width: 430px) {
    grid-template-columns: 1fr 40px 1fr;
  }
`

export const Select = styled.select`
  background-color: transparent;
  border: none;
  color: #fff;
  display: block;
  font-size: ${theme.font.sizes.font24};
  text-transform: uppercase;

  margin: 5px 0;
  padding-right: 4px;
  padding-left: 8px;
  outline: none;
    option {
    background-color: #030102;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-size: ${theme.font.sizes.font24};
    text-transform: uppercase;
    letter-spacing: .3px;

    height: 40px;
  }
`


// ========== INPUT HEIM ON WITHDRAW ==========

interface IInputHeimContainerProps {
  inputHeim?: boolean
}

export const InputHeimContainer = styled.div<IInputHeimContainerProps>`
  border: 2px solid #FFBF00;
  box-shadow: 1px 1px 5px #FFBF00;

  border-radius: 6px;
  display: grid;
  grid-template-columns: 190px 60px 190px;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: ${props => props.inputHeim ? '102px' : '94px'};
  padding: 0;
  @media(max-width: 504px) {
    grid-template-columns: 160px 60px 160px;
  }
  @media(max-width: 430px) {
    grid-template-columns: 130px 40px 130px;
  }
`

// ========== INPUT WITHDRAW ==========


export const InputWithdrawContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;

  width: 100%;
  height: 94px;
  margin-top: 16px;
  position: relative;
  `

export const Info = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`


// ========== INPUT DEFAULT ==========

export const InputDefaultContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;

  width: 100%;
  height: 94px;
  margin-top: 16px;
  margin-bottom: 16px;
  position: relative;
  `


export const AmountDefault = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  position: relative;
  width: 100%;
  height: 94px;

  padding-right: 12px;
`

export const LineDefault = styled.div`
  content: '';
  display: block;
  min-width: 100%;
  max-width: 100%;
  height: 2px;
  background-color: ${theme.colors.cyan};
  box-shadow: 1px 1px 5px ${theme.colors.cyan};
  bottom: 0;
  position: absolute;
  @media (max-width: 504px) {
    max-width: 384px;
  }
`

export const ExchangeRate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`
