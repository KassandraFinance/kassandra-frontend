import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { z } from 'zod'

import type { PostDataType } from '@/store/reducers/postsSlice'
import {
  FilterType,
  initialArticlesFilter,
  removeFilter,
  updateFilters
} from '@/store/reducers/articlesFilterSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import { useResearchPosts } from '@/hooks/query/useResearchPosts'
import { useSyncResearchFilters } from '@/hooks/useSyncResearchFilters'

import AppliedFilters from '../AppliedFilters'
import ArticleList from '../ArticleList'
import ArticleCard from '../ArticleCard'
import ArticlesFilterModal from '../ArticlesFilterModal'
import MobileButtonGroup from '../MobileButtonGroup'
import { Loading } from '../Loading'

import Button from '@/components/Button'
import { ModalRoot, ModalTrigger } from '@/components/Modals/ModalBlog'
import { Tabs } from '@/components/Tabs'
import Pagination from '@/components/Pagination'

import { GridIcon } from '@/Icons/Grid'
import { ListIcon } from '@/Icons/List'
import * as S from './styles'

export type Filter = {
  coins: string[]
  tags: string[]
  readingDifficulties: string[]
}

interface IArticlesSectionProps {
  posts?: PostDataType[]
  postsStats?: {
    pageCount: number
    total: number
  }
  tabs: string[]
}

const ArticlesSection = ({
  posts,
  postsStats,
  tabs
}: IArticlesSectionProps) => {
  const { coins, tags, readingDifficulties } = useAppSelector(
    state => state.articlesFilter
  )

  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedFilters, setSelectedFilters] = React.useState<Filter>({
    coins,
    tags,
    readingDifficulties
  })

  const [page, setPage] = React.useState(1)
  const tabValidator = z.string().refine(tab => tabs.includes(tab))
  const [tab, setTab] = React.useState(tabs[0])

  useSyncResearchFilters()

  const router = useRouter()

  const selectedView = String(router.query?.view ?? 'card')

  const dispatch = useAppDispatch()

  const {
    data: filteredPosts,
    isFetching,
    isError
  } = useResearchPosts({
    page,
    tags,
    coins,
    readingDifficulties,
    posts,
    postsStats,
    tab
  })

  const totalResults = !isError
    ? filteredPosts?.postsStats?.total ?? posts?.length
    : posts?.length

  const resetPage = React.useCallback(() => {
    setPage(1)
  }, [setPage])

  const views = [
    {
      value: 'card',
      text: 'Card View',
      disabled: selectedView === 'card'
    },
    {
      value: 'list',
      text: 'List View',
      disabled: selectedView === 'list'
    }
  ]

  const handleSelectView = (view: string) => {
    router.push(
      {
        query: {
          ...router.query,
          view
        }
      },
      undefined,
      {
        shallow: true
      }
    )
  }

  // const onPageChange = async (page: number) => {
  //   router.push(
  //     {
  //       query: {
  //         ...router.query,
  //         page: page + 1
  //       }
  //     },
  //     undefined,
  //     {
  //       shallow: true
  //     }
  //   )
  //   window.scrollTo(0, 0)
  // }

  // const handleSelectViewOption = (viewOption: ViewOption) => {
  //   setSelectedView(viewOption)

  //   trackEvent({
  //     category: 'select-view',
  //     action: 'click-on-button',
  //     name: viewOption
  //   })
  // }

  const handleResetFilter = () => {
    setSelectedFilters(initialArticlesFilter)
  }

  const onOpenChange = (isOpen: boolean) => {
    setIsModalOpen(isOpen)
    setSelectedFilters({
      coins,
      tags,
      readingDifficulties
    })
  }

  const handleRemoveFilter = (type: FilterType, value: string) => {
    const removeFilterFromQuery = (type: FilterType, value: string) => {
      const queryReadingDifficulties = String(router.query?.readingDifficulties)
      const queryTags = String(router.query?.tags)
      const queryIsPRO = String(router.query?.isPRO)
      const queryCoins = String(router.query?.coins)

      const arrayQueryFilters = {
        readingDifficulties: queryReadingDifficulties.split(','),
        tags: queryTags.split(','),
        coins: queryCoins.split(',')
      }

      let newIsPro = queryIsPRO === 'true'

      if (value !== 'Pro') {
        arrayQueryFilters[type as keyof typeof arrayQueryFilters] =
          arrayQueryFilters[type as keyof typeof arrayQueryFilters].filter(
            val => val !== value
          )
      } else {
        newIsPro = false
      }

      router.push(
        {
          query: {
            ...router.query,
            readingDifficulties:
              arrayQueryFilters.readingDifficulties.join(','),
            tags: arrayQueryFilters.tags.join(','),
            coins: arrayQueryFilters.coins.join(','),
            isPRO: newIsPro,
            tab
          }
        },
        undefined,
        { shallow: true }
      )
    }

    removeFilterFromQuery(type, value)
    dispatch(
      removeFilter({
        type,
        value: value === 'Pro' ? true : value
      })
    )
  }

  const updateArrayValues = (
    type: Exclude<FilterType, 'isPRO'>,
    value: string
  ) => {
    setSelectedFilters(prev => {
      if (prev[type].includes(value)) {
        return {
          ...prev,
          [type]: prev[type].filter(item => item !== value)
        }
      }

      return {
        ...prev,
        [type]: [...prev[type], value]
      }
    })
  }

  const updateBooleanValues = (type: 'isPRO', value: boolean) => {
    setSelectedFilters(prev => ({ ...prev, [type]: value }))
  }

  const handleUpdateFilter = (type: FilterType, value: string | boolean) => {
    if (typeof value === 'boolean') {
      updateBooleanValues(type as 'isPRO', value)
      return
    }

    updateArrayValues(type as Exclude<FilterType, 'isPRO'>, value)
  }

  const handleClearAllFilters = async () => {
    resetPage()
    router.push(
      {
        query: {
          tab
        }
      },
      undefined,
      {
        shallow: true
      }
    )
    dispatch(
      updateFilters({
        ...initialArticlesFilter
      })
    )
  }

  const handlePageClick = (data: { selected: number }) => {
    router.push(
      {
        query: {
          ...router.query,
          page: data.selected + 1
        }
      },
      undefined,
      {
        shallow: true
      }
    )
    window.scrollTo(0, 0)
    return
  }

  React.useEffect(() => {
    if (!router.isReady) return

    const pageQuery = Number(router.query?.page) || 1

    if (pageQuery === page) return

    setPage(pageQuery)
  }, [page, router.isReady, router.query?.page, setPage])

  React.useEffect(() => {
    if (!router.isReady) return
    const queryTab = String(router.query?.tab)

    if (queryTab === tab) return

    const parsedTab = tabValidator.safeParse(queryTab)

    if (!parsedTab.success) {
      setTab(tabs[0])
      router.push({
        query: {
          tab: tabs[0]
        }
      })
      return
    }

    setTab(parsedTab.data)
    resetPage()
  }, [resetPage, router, tab, tabValidator, tabs])

  const totalFiltersApplied = [
    ...coins,
    ...tags,
    ...readingDifficulties
  ].filter(filter => filter !== '')

  return (
    <S.ArticlesSection>
      <S.TabsWrapper>
        <Tabs
          tabs={tabs.map(tab => ({
            asPathText: tab,
            text: tab
          }))}
        />
      </S.TabsWrapper>
      <S.ArticlesMainContent>
        <S.ArticlesMainContainerHeader>
          <div>
            <ModalRoot open={isModalOpen} onOpenChange={onOpenChange}>
              <ModalTrigger asChild>
                <Button
                  text={`Filter
                  ${
                    totalFiltersApplied.length > 0
                      ? `(${totalFiltersApplied.length})`
                      : ''
                  }`}
                  className="button-mobile"
                  backgroundBlack
                />
              </ModalTrigger>

              <ArticlesFilterModal
                title="Filter"
                closeModal={() => setIsModalOpen(false)}
                selectedFilters={selectedFilters}
                handleResetFilter={handleResetFilter}
                handleUpdateFilter={handleUpdateFilter}
              />
            </ModalRoot>
          </div>
          <S.ButtonGroupWrapper>
            <MobileButtonGroup
              options={views}
              selectedOption={selectedView}
              leftIcon={selectedView === 'card' ? <GridIcon /> : <ListIcon />}
              withDropdownIndicator
              size="large"
            >
              {views
                .filter(view => view.value !== selectedView)
                .map(view => (
                  <MobileButtonGroup.Item
                    key={view.value}
                    onClick={() => handleSelectView(view.value)}
                    leftIcon={
                      view.value === 'card' ? <GridIcon /> : <ListIcon />
                    }
                  >
                    {view.text}
                  </MobileButtonGroup.Item>
                ))}
            </MobileButtonGroup>
          </S.ButtonGroupWrapper>
        </S.ArticlesMainContainerHeader>

        <S.TagsContainer hidden={totalFiltersApplied.length === 0}>
          {isFetching && <Loading height={85} />}
          <AppliedFilters
            filters={[
              ...tags.map(tag => ({
                type: 'tags',
                value: tag
              })),
              ...coins.map(coin => ({
                type: 'coins',
                value: coin
              })),
              ...readingDifficulties.map(difficulty => ({
                type: 'readingDifficulties',
                value: difficulty
              }))
            ]}
            onFilterRemove={({ type, value }) => {
              handleRemoveFilter(type as FilterType, value)
            }}
            onClearAllFilters={handleClearAllFilters}
          />
        </S.TagsContainer>

        <S.ArticlesContainer isGrid={selectedView === 'card'}>
          {!isFetching && filteredPosts?.posts?.length === 0 && (
            <p>No posts were found with given filters :(</p>
          )}
          {filteredPosts?.posts?.map((data, index) => {
            if (selectedView === 'card') {
              return <ArticleCard key={index} post={data} />
            }

            return (
              <ArticleList
                imageLeft="true"
                borderShadow="true"
                key={index}
                post={data}
              />
            )
          })}
          {/* Used as a fallback when an unexpected error happens */}
          {isError &&
            !isFetching &&
            posts?.map((data, index) => {
              if (selectedView === 'card') {
                return <ArticleCard key={index} post={data} />
              }

              return (
                <ArticleList
                  imageLeft="true"
                  borderShadow="true"
                  key={index}
                  post={data}
                />
              )
            })}
        </S.ArticlesContainer>
      </S.ArticlesMainContent>
      <S.PaginationWrapper>
        <Pagination
          page={page - 1}
          totalItems={
            filteredPosts ? filteredPosts.postsStats.total : totalResults ?? 1
          }
          handlePageClick={handlePageClick}
          skip={0}
          take={20}
        />
      </S.PaginationWrapper>

      <S.LeftLightImageWrapper>
        <Image
          src="/assets/images/blue-background-left-bottom.svg"
          height={822.502}
          width={752.648}
        />
      </S.LeftLightImageWrapper>

      <S.RightLightImageWrapper>
        <Image
          src="/assets/images/blue-background-right-bottom.svg"
          height={822.502}
          width={752.648}
        />
      </S.RightLightImageWrapper>
    </S.ArticlesSection>
  )
}

export default ArticlesSection