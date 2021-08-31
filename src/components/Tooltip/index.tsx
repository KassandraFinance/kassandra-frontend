import React from 'react';

import { TooltipIcon, TooltipBox, TooltipCard } from './styles';

const Tooltip = ({ children, tooltipTop }: any) => (
  <TooltipCard tooltipTop={tooltipTop}>
    <TooltipIcon>
      <img src="assets/IconNotification/info.svg" alt="Descrição" />
    </TooltipIcon>
    <TooltipBox>
      {children}
    </TooltipBox>
  </TooltipCard>
);

export default Tooltip;