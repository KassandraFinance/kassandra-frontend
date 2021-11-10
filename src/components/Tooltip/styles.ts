import styled from 'styled-components'
import theme from '../../styles/theme'

interface ITooltipCardProps {
  tooltipTop?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const TooltipIcon = styled.div<ITooltipCardProps>`
  padding: 1px;

  position: relative;
  cursor: pointer;
  z-index: 99;
`

export const TooltipBox = styled.div`
  display: none;
`

// eslint-disable-next-line prettier/prettier
export const TooltipCard = styled.div<ITooltipCardProps>`

  p {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: justify;
  }
  & ${TooltipIcon}:hover + ${TooltipBox} {
    background-color: #26DBDB;
    border: 1px solid ${theme.colors.darkPurple};

    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    color: ${theme.colors.darkPurple};
    
    display: block;
    text-align-last: start;

    position: absolute;
    min-width: 150px;
    max-width: 180px;

    padding: 6px;
    z-index: 22;

    margin: ${props =>
      props.tooltipTop ? '-60px 0 0 -60px' : '-84px 0 0 -60px'};
    @media (max-width: 800px) {
      margin-left: -30px;
    }
  }
`
