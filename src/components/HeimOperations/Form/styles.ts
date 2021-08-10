import styled from "styled-components";

// ========== FORM ==========

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  height: 100%;
`

export const Button = styled.button`
  background: linear-gradient(87.48deg, #FFBF00 -70.27%, #E843C4 154.78%);
  border: none;
  border-radius: 6px;
  color: #211426;
  font-size: 20px;

  width: 100%;
  height: 44px;
  margin: 16px 0;
  outline: none;
  cursor: pointer;
`

// ========== DEFAULT INPUT ALL ==========

export const PayWith = styled.div`
  text-align: left;
  position: relative;
  width: 190px;
  height: 94px;

  @media (max-width: 504px) {
    width: 160px;
  }
  @media (max-width: 430px) {
    width: 130px;
  }
`

export const Amount = styled.div`
  text-align: right;
  position: relative;
  width: 190px;
  height: 100%;
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
  font-size: 24px;

  text-align: right;
  max-width: 100%;
  margin: 8px 0;

  outline: none;

  @media (max-width: 380px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
    font-size: 20px;
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
  background-color: #26DBDB;
  box-shadow: 1px 1px 5px #26DBDB;
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
  @media (max-width: 380px) {
    font-size: 13px;
  }
  @media (max-width: 350px) {
    font-size: 10.7px;
    padding-left: 12px;
  }
`

export const SpanLight = styled.span`
  font-size: 14px;
  height: 17px;
  font-weight: 300;
  letter-spacing: .3px;
  padding-left: 12px;
  @media (max-width: 380px) {
    font-size: 13px;
  }
  @media (max-width: 350px) {
    font-size: 10.7px;
  }
`

export const Symbol = styled.h3`
  font-size: 24px;
  font-weight: 400;
  margin: 8px 0;
  padding-left: 12px;
  @media (max-width: 380px) {
    font-size: 22px;
  }
  @media (max-width: 350px) {
    font-size: 20px;
  }
`

export const ImgArrowLong = styled.img`
  margin: 48px auto 0 auto;
`

export const ButtonMax = styled.button`
  border: 1px solid #26DBDB;
  border-radius: 16px;
  background: transparent;
  color: #fff;
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
  grid-template-columns: 190px 60px 190px;
  justify-content: space-around;
  align-items: flex-start;
  
  width: 100%;
  height: 94px;
  @media (max-width: 504px) {
    grid-template-columns: 160px 60px 160px;
  }
  @media (max-width: 430px) {
    grid-template-columns: 130px 40px 130px;
  }
`

export const Select = styled.select`
  background-color: transparent;
  border: none;
  color: #fff;
  display: block;
  font-size: 24px;
  text-transform: uppercase;

  height: 28px;
  margin: 8px 0;
  padding-right: 4px;
  padding-left: 12px;
  outline: none;
  option {
    background-color: #030102;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: .3px;

    height: 40px;
  }
`


// ========== INPUT HEIM ON WITHDRAW ==========


export const InputHeimContainer = styled.div`
  border: 2px solid #FFBF00;
  box-shadow: 1px 1px 5px #FFBF00;

  border-radius: 6px;
  display: grid;
  grid-template-columns: 190px 60px 190px;
  justify-content: space-around;
  align-items: flex-start;
  
  width: 100%;
  min-height: 94px;
  max-height: 96px;
  padding: 0;
  @media (max-width: 504px) {
    grid-template-columns: 160px 60px 160px;
  }
  @media (max-width: 430px) {
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
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  
  width: 100%;
  height: 94px;
  margin-top: 16px;
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
  background-color: #26DBDB;
  box-shadow: 1px 1px 5px #26DBDB;
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
`