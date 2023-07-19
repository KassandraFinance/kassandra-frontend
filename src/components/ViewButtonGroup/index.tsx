import React from 'react'

import * as S from './styles'
import { GridIcon } from '@/Icons/Grid'
import { ListIcon } from '@/Icons/List'

type ButtonGroupProps = {
  setView: (param: 'card' | 'list') => void
  view: string
}

const ViewButtonGroup = ({ setView, view }: ButtonGroupProps) => {
  return (
    <S.ViewButtonGroup>
      <S.RadiosContainer>
        <S.Switch position={view === 'card' ? 'left' : 'right'} />
        <S.Label checked={view === 'card'}>
          <S.Input
            type="radio"
            id="card"
            hidden
            checked={view === 'card'}
            onChange={() => setView('card')}
            defaultChecked
          />
          <GridIcon height={24} width={24} />
          <span>
            Card <span>View</span>
          </span>
        </S.Label>
        <S.Label checked={view === 'list'}>
          <S.Input
            type="radio"
            id="list"
            hidden
            checked={view === 'list'}
            onChange={() => setView('list')}
          />
          <ListIcon height={24} width={24} />
          <span>
            List <span>View</span>
          </span>
        </S.Label>
      </S.RadiosContainer>
    </S.ViewButtonGroup>
  )
}

export default ViewButtonGroup
