import React from 'react'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import * as S from './styles'

type tabs = {
  text: string
  asPathText: string
}

interface ISelectTabsProps {
  tabs: tabs[]
}

export const Tabs = ({ tabs }: ISelectTabsProps) => {
  const router = useRouter()
  const { trackEvent } = useMatomo()

  function handleClickTab(tabSelect: string) {
    trackEvent({
      category: router.pathname,
      action: `click-on-button | Tabs | ${router.pathname}`,
      name: tabSelect
    })

    router.push(
      {
        pathname: `${router.pathname}`,
        query: { ...router.query, tab: `${tabSelect}` }
      },
      undefined,
      { scroll: false, shallow: true }
    )
  }

  return (
    <S.TabsContainer>
      {tabs.map(item => (
        <S.TabsButton
          type="button"
          key={item.text + 1}
          onClick={() => {
            handleClickTab(item.asPathText)
          }}
          isActiveTab={item.asPathText === router.query?.tab}
        >
          {item.text}
        </S.TabsButton>
      ))}
    </S.TabsContainer>
  )
}
