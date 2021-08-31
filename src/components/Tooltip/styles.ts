import styled from 'styled-components';

interface ITooltipCardProps {
  tooltipTop?: boolean
}

export const TooltipIcon = styled.div<ITooltipCardProps>`
  padding: 1px;
  
  position: relative;
  cursor: pointer;
  z-index: 99;
`;

export const TooltipBox = styled.div`
  display: none;
`;

export const TooltipCard = styled.div<ITooltipCardProps>`
  p {
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    text-align: justify;
  }
   & ${TooltipIcon}:hover + ${TooltipBox} {
    background-color: #26DBDB;
    border: 1px solid #211426;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    color: #211426;
    display: block;
    text-align-last: start;

    position: absolute;
    min-width: 150px;
    max-width: 180px;
    
    padding: 6px;
    z-index: 22;

    margin: ${props => props.tooltipTop ? '-60px 0 0 -60px' : '-76px 0 0 -20px'};
    @media (max-width: 800px) {
      margin-left: -30px;
    }
  }
`;
