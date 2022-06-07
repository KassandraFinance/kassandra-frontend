import styled from 'styled-components'

export const TooltipAllocation = styled.div`
  width: 100%;
  background-color: rgba(031, 031, 031, 0.8);
  ul {
    display: flex;
    flex-direction: column-reverse;
    padding: 10px 8px;
  }
  li {
    font-size: 14px;
    font-weight: 500;
    padding: 2px;
    display: grid;
    grid-template-columns: 54px 20px 48px;
  }
`

export const DateAllocation = styled.p`
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 4px;
`
