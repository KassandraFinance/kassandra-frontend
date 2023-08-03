import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce'

import { useResearchCoins } from '@/hooks/query/useResearchCoins'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { FilterType, updateFilters } from '@/store/reducers/articlesFilterSlice'

import Modal, {
  ModalContentWrapper,
  ModalFooter
} from '@/components/Modals/ModalBlog'
import Button from '@/components/Button'
import { Filter } from '../ArticlesSection'
import { Loading } from '../Loading'
import Input from '../Input'
import OldCheckbox from '@/components/Checkbox'

import { SearchIcon } from '@/Icons'
import type { SVGFuncElement } from '@/types/svg'

import * as S from './styles'

interface IArticlesFilterModalProps {
  title: string
  icon?: SVGFuncElement
  closeModal: () => void
  selectedFilters: Filter
  handleResetFilter: () => void
  handleUpdateFilter: (type: FilterType, value: string | boolean) => void
}

const ArticlesFilterModal = ({
  title,
  icon,
  closeModal,
  selectedFilters,
  handleResetFilter,
  handleUpdateFilter
}: IArticlesFilterModalProps) => {
  const router = useRouter()
  const [search, setSearch] = React.useState('')
  const [debouncedSearch] = useDebounce(search, 300)

  const { data: researchCoinsResponse, isLoading } = useResearchCoins({
    query: debouncedSearch
  })

  const dispatch = useAppDispatch()
  const tags = useAppSelector(store => store.posts.tags)

  const Icon = icon

  const handleApply = () => {
    router.push(
      {
        query: {
          ...router.query,
          tags: selectedFilters.tags.join(','),
          coins: selectedFilters.coins.join(',')
        }
      },
      undefined,
      {
        shallow: true
      }
    )
    dispatch(updateFilters(selectedFilters))
    closeModal()
  }

  const handleResetDefaults = () => {
    handleResetFilter()
  }

  return (
    <Modal title={title} icon={Icon}>
      <ModalContentWrapper>
        {/* <S.ModalSection>
          <S.FilterSectionTitle>Difficulty</S.FilterSectionTitle>

          <ul>
            {readingDifficulties.map(difficulty => (
              <S.FilterItem key={difficulty}>
                <S.ItemLabel>
                  <OldCheckbox
                    name={difficulty}
                    checked={selectedFilters.readingDifficulties.includes(
                      difficulty
                    )}
                    onChange={() =>
                      handleUpdateFilter('readingDifficulties', difficulty)
                    }
                    label={difficulty}
                  />
                </S.ItemLabel>
              </S.FilterItem>
            ))}
          </ul>
        </S.ModalSection> */}

        <S.ModalSection>
          <S.FilterSectionTitle>Tags</S.FilterSectionTitle>

          <ul>
            {tags.map(tag => (
              <S.FilterItem key={tag}>
                <S.ItemLabel>
                  <OldCheckbox
                    name={tag}
                    checked={selectedFilters.tags.includes(tag)}
                    onChange={() => handleUpdateFilter('tags', tag)}
                    label={tag}
                  />
                </S.ItemLabel>
              </S.FilterItem>
            ))}
          </ul>
        </S.ModalSection>
        {/* Moedas mencionadas no artigo */}
        <S.ModalSection>
          <S.FilterSectionTitle>Coins</S.FilterSectionTitle>

          <S.SearchInputWrapper>
            <SearchIcon width={24} height={24} />
            <Input
              name="search"
              type="text"
              placeholder="Search"
              onChange={e => setSearch(e.target.value)}
              value={search}
            />
          </S.SearchInputWrapper>
          {isLoading && <Loading />}
          <ul>
            {console.log(researchCoinsResponse?.coins)}
            {researchCoinsResponse?.coins?.map(coin => (
              <S.CoinItem key={coin.coinGeckoID}>
                <S.ItemLabel>
                  <OldCheckbox
                    name={coin.coinGeckoID}
                    checked={selectedFilters.coins.includes(coin.coinGeckoID)}
                    onChange={() =>
                      handleUpdateFilter('coins', coin?.coinGeckoID)
                    }
                    label={coin?.name}
                    showLabel={false}
                  />
                  <img
                    src={coin?.image?.url ?? '/assets/icons/coming-soon.svg'}
                    alt={coin?.image?.alternativeText}
                    height={24}
                    width={24}
                  />
                  <S.NameContainer>
                    {coin?.name} <span>{coin?.symbol}</span>
                  </S.NameContainer>
                </S.ItemLabel>
              </S.CoinItem>
            ))}
          </ul>
        </S.ModalSection>
      </ModalContentWrapper>
      <ModalFooter>
        <Button
          backgroundBlack
          onClick={handleResetDefaults}
          text="Remove Filters"
          className="variant-white"
        />
        <Button
          backgroundSecondary
          onClick={handleApply}
          text="Apply"
          className="with-blue-border"
        />
      </ModalFooter>
    </Modal>
  )
}

export default ArticlesFilterModal
