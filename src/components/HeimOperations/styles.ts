import styled from 'styled-components'

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
  display: none;
  &[type="radio"] + label {
    border: 1px solid #26DBDB;
    color: #fff;
  }

  &[type="radio"]:checked + label {
    background-color: #26DBDB;
    border: 2px solid #26DBDB;
    color: #fff;
  }
`

export const Label = styled.label`
  border: 1px solid #26DBDB;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
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
    font-size: 12px;
    padding: 8px 14px;
  }
`

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

  width: 216px;
  height: 44px;
  margin: 40px 0;
  outline: none;
  cursor: pointer;
`