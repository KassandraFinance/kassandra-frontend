import styled from "styled-components";
import theme from '../../../styles/theme'

// ========== FORM ==========
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px;
  max-height: 100%;
`

// ========== DEFAULT INPUT ALL ==========

interface IPayWithProps {
  inputHeim?: boolean
}


export const PayWith = styled.div<IPayWithProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 100%;

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 100%;
  height: 100%;

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
  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.medium};

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

interface ISpanProps {
  total?: boolean
}

export const Span = styled.span<ISpanProps>`
  color: ${props => props.total ? theme.colors.amber : "#fff" };
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
  letter-spacing: .3px;
  height: 17px;
  @media(max-width: 380px) {
    font-size: 13px;
  }
  @media(max-width: 350px) {
    font-size: 10.7px;
  }

`

interface ISymbolProps {
  bestValue?: boolean
}

export const Symbol = styled.h3<ISymbolProps>`
  font-size: ${props => props.bestValue ? 
    theme.font.sizes.font16 : theme.font.sizes.font20};
  font-weight: ${theme.font.weight.normal};

  margin: ${props => props.bestValue ? '16px 0 8px' : '8px 0'};
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
  border: 1px solid ${theme.colors.gray};
  border-radius: 3px;
  background: ${props => props.isMax ? '#26DBDB' : 'transparent'};
  color: ${props => props.isMax ? '#000' : '#fff'};
  font-size: 12px;
  line-height: 12px;
  font-weight: 300;
  letter-spacing: .7px;

  width: 40px;
  height: 20px;
  padding: 4px 8px;

  cursor: pointer;
  transition: 100ms;
  &:hover {
    background: #26DBDB;
    border: 1px solid ${theme.colors.cyan};
    color: #000;
  }
`


// ========== INPUT TOKENS ==========

export const InputTokensContainer = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: flex-start;

  width: 100%;
  height: 104px;
  padding: 10px 16px;
  @media(max-width: 504px) {
    grid-template-columns: 1fr 60px 1fr;
  }
  @media(max-width: 430px) {
    grid-template-columns: 1fr 40px 1fr;
  }
`

export const Select = styled.select`
  background-color: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 4px;
  color: #fff;
  display: block;
  font-size: ${theme.font.sizes.font20};
  text-transform: uppercase;

  margin: 5px 0;
  padding-right: 4px;
  outline: none;
  max-width: 110px;
  height: 30px;
  option {
    background-color: #030102;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-size: ${theme.font.sizes.font20};
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
  background: rgba(31, 31, 31, 0.72);
  border-radius: 16px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  height: 94px;
  padding: 10px 16px;
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

export const InputBestValue = styled.div`
  background: rgba(31, 31, 31, 0.72);
  border-radius: 10px;

  width: 100%;
  padding: 16px 8px 16px 16px;
  margin-bottom: 40px;

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
    max-height: 140px;
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