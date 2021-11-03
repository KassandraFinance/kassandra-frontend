import React from 'react';

import { TooltipIcon, TooltipBox, TooltipCard } from './styles';

interface ITooltipProps {
  children: React.ReactChild
  tooltipTop: boolean
  widthIcon?: number
  infoGray?: boolean
}

const Tooltip = ({ children, tooltipTop, widthIcon, infoGray }: ITooltipProps) => (
  <TooltipCard tooltipTop={tooltipTop}>
    <TooltipIcon>
      {infoGray ?
        <img src="assets/info-gray.svg" alt="Descrição" width={widthIcon} />
        :
        <img src="assets/info-icon.svg" alt="Descrição" width={widthIcon} />
      }
    </TooltipIcon>
    <TooltipBox>
      {children}
    </TooltipBox>
  </TooltipCard>
);

export default Tooltip;