import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDebounce } from 'use-debounce'

import { useResearchCoins } from '@/hooks/query/useResearchCoins'

import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { FilterType, updateFilters } from '@/store/reducers/articlesFilterSlice'

import Button from '../Button'
import Modal, {
  ModalContentWrapper,
  ModalFooter
} from '@/components/Modals/ModalBlog'
import TextField from '@/components/TextField'
import { Checkbox } from '../Checkbox'
import { Filter } from '../ArticlesSection'

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
                  {difficulty}
                  <Checkbox
                    checked={selectedFilters.readingDifficulties.includes(
                      difficulty
                    )}
                    toggleChecked={() =>
                      handleUpdateFilter('readingDifficulties', difficulty)
                    }
                    label={difficulty}
                  />
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
                  {tag}
                  <Checkbox
                    checked={selectedFilters.tags.includes(tag)}
                    toggleChecked={() => handleUpdateFilter('tags', tag)}
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
            <TextField
              type="text"
              icon={<SearchIcon />}
              iconPosition="left"
              placeholder="Search"
              onChange={e => setSearch(e.target.value)}
            />
          </S.SearchInputWrapper>
          {isLoading && 'Loading...'}

          <ul>
            {researchCoinsResponse?.coins?.map(coin => (
              <S.CoinItem key={coin.coinGeckoID}>
                <S.ItemLabel>
                  <Image
                    src={coin.image.url}
                    alt={coin.image.alternativeText}
                    height={24}
                    width={24}
                  />
                  <S.NameContainer>
                    {coin.name} <span>{coin.symbol}</span>
                  </S.NameContainer>
                  <Checkbox
                    checked={selectedFilters.coins.includes(coin.coinGeckoID)}
                    toggleChecked={() =>
                      handleUpdateFilter('coins', coin.coinGeckoID)
                    }
                    label={coin.name}
                  />
                </S.ItemLabel>
              </S.CoinItem>
            ))}
          </ul>
        </S.ModalSection>
      </ModalContentWrapper>
      <ModalFooter>
        <Button variant="tertiary" size="medium" onClick={handleResetDefaults}>
          Default
        </Button>
        <Button variant="primary" size="medium" onClick={handleApply}>
          Apply
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ArticlesFilterModal
