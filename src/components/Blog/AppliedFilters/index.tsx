import IconButton from '@/components/IconButton'

import { CloseIcon } from '@/Icons/Close'

import * as S from './styles'

type Filter = {
  type?: string
  filterId?: string
  value: string
  initiallyHiddenText?: string
}

interface IAppliedFiltersProps {
  filters: Filter[]
  onFilterRemove: (filter: Filter) => void
  onClearAllFilters: () => void
}

const AppliedFilters = ({
  filters,
  onFilterRemove,
  onClearAllFilters
}: IAppliedFiltersProps) => {
  return (
    <S.AppliedFilters>
      {filters.map(filter => (
        <S.FilterTag key={filter.value}>
          <S.FilterTagText
            initiallyHiddenText={filter.initiallyHiddenText}
            tabIndex={0}
          >
            {filter.value}
          </S.FilterTagText>
          <IconButton
            icon={<CloseIcon />}
            size="small"
            onClick={() => onFilterRemove(filter)}
          />
        </S.FilterTag>
      ))}
      {filters.length > 0 && (
        <S.FilterClearButton onClick={onClearAllFilters}>
          Clear Filters
        </S.FilterClearButton>
      )}
    </S.AppliedFilters>
  )
}

export default AppliedFilters
