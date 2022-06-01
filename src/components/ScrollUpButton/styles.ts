import styled from 'styled-components'
import theme from '../../styles/theme'

export const ScrollUpButton = styled.div`
  background: ${theme.colors.darkPurple};
  border-radius: 50%;

  width: 60px;
  padding: 16px;
  height: 60px;

  position: fixed;
  bottom: 20px;
  right: 20px;

  text-align: center;
  line-height: 60px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 1px solid ${theme.colors.darkPurple};
    background: ${theme.colors.snow};
  }

  @media (max-width: 960px) {
    bottom: 100px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
//ScrollUpIcon
export const ScrollUpIcon = styled.div`
  margin: auto;
  height: 100%;

  background: url('/assets/icons/back-to-top.svg');
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
`
