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
import { Checkbox } from '../Checkbox'
import { Filter } from '../ArticlesSection'
import { Loading } from '../Loading'
import Input from '../Input'

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
  const readingDifficulties = useAppSelector(
    store => store.posts.readingDifficulties
  )
  const Icon = icon

  const handleApply = () => {
    router.push(
      {
        query: {
          ...router.query,
          readingDifficulties: selectedFilters.readingDifficulties.join(','),
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
        <S.ModalSection>
          <S.FilterSectionTitle>Difficulty</S.FilterSectionTitle>

          <ul>
            {readingDifficulties.map(difficulty => (
              <S.FilterItem key={difficulty}>
                <S.ItemLabel>
                  <Checkbox
                    checked={selectedFilters.readingDifficulties.includes(
                      difficulty
                    )}
                    toggleChecked={() =>
                      handleUpdateFilter('readingDifficulties', difficulty)
                    }
                    label={difficulty}
                  />
                  {difficulty}
                </S.ItemLabel>
              </S.FilterItem>
            ))}
          </ul>
        </S.ModalSection>

        <S.ModalSection>
          <S.FilterSectionTitle>Tags</S.FilterSectionTitle>

          <ul>
            {tags.map(tag => (
              <S.FilterItem key={tag}>
                <S.ItemLabel>
                  <Checkbox
                    checked={selectedFilters.tags.includes(tag)}
                    toggleChecked={() => handleUpdateFilter('tags', tag)}
                    label={tag}
                  />
                  {tag}
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
          {isLoading && <Loading height={85} />}

          <ul>
            {researchCoinsResponse?.coins?.map(coin => (
              <S.CoinItem key={coin.coinGeckoID}>
                <S.ItemLabel>
                  <Checkbox
                    checked={selectedFilters.coins.includes(coin.coinGeckoID)}
                    toggleChecked={() =>
                      handleUpdateFilter('coins', coin.coinGeckoID)
                    }
                    label={coin.name}
                  />
                  <Image
                    src={coin.image.url}
                    alt={coin.image.alternativeText}
                    height={24}
                    width={24}
                  />
                  <S.NameContainer>
                    {coin.name} <span>{coin.symbol}</span>
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
