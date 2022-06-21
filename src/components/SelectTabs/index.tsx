import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import * as S from './styles'

type tabs = {
  text: string,
  asPathText: string,
  icon: StaticImageData
}

interface ISelectTabsProps {
  tabs: tabs[];
  isSelect: string | string[] | undefined;
  setIsSelect: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >;
}

const SelectTabs = ({ tabs, isSelect, setIsSelect }: ISelectTabsProps) => {
  const router = useRouter()

  function handleClickTab(tabSelect: string) {
    setIsSelect(tabSelect)

    if (router.asPath.substr(0, 8) === '/profile') {
      router.push(
        {
          pathname: `/profile/${router.query.profileAddress}`,
          query: { tab: `${tabSelect}` }
        },
        undefined,
        { scroll: false }
      )
    }
  }

  return (
    <S.TabsContainer>
      {tabs.map(item => (
        <S.TabsButton
          type="button"
          key={item.text + 1}
          onClick={() => handleClickTab(item.asPathText)}
          isActiveTab={item.asPathText === isSelect}
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
