import styled from 'styled-components'

export const WithdrawDate = styled.div`
  background: #4F4F4F;
  border: none;
  border-radius: 6px;
  color: #BDBDBD;
  font-size: 20px;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 320px;
  height: 40px;
  margin: 8px 0;
  outline: none;
  z-index: 10;
  @media (max-width: 420px) {
    max-width: 100%;
    min-width: 200px;
  }
`