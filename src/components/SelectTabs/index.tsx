import Image, { StaticImageData } from 'next/image'
import React from 'react'

import * as S from './styles'

type tabs = {
  text: string,
  icon: StaticImageData
}

interface ISelectTabsProps {
  tabs: tabs[];
  isSelect: string;
  setIsSelect: React.Dispatch<React.SetStateAction<string>>;
}

const SelectTabs = ({ tabs, isSelect, setIsSelect }: ISelectTabsProps) => {
  function handleClickTab(tabSelect: string) {
    setIsSelect(tabSelect)
  }

  return (
    <S.TabsContainer>
      {tabs.map(item => (
        <S.TabsButton
          key={item.text + 1}
          type="button"
          onClick={() => handleClickTab(item.text)}
          isActiveTab={item.text === isSelect}
        >
          <span>
            <Image src={item.icon} width={16} height={16} layout="fixed" />
          </span>
          {item.text}
        </S.TabsButton>
      ))}
    </S.TabsContainer>
  )
}

export default SelectTabs
