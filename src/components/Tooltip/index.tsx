import React from 'react';

import { TooltipIcon, TooltipBox, TooltipCard } from './styles';

interface ITooltipProps {
  children: React.ReactChild
  tooltipTop: boolean
  widthIcon?: number
}

const Tooltip = ({ children, tooltipTop, widthIcon }: ITooltipProps) => (
  <TooltipCard tooltipTop={tooltipTop}>
    <TooltipIcon>
      <img src="assets/IconNotification/info.svg" alt="Descrição" width={widthIcon} />
    </TooltipIcon>
    <TooltipBox>
      {children}
    </TooltipBox>
  </TooltipCard>
);

export default Tooltip;