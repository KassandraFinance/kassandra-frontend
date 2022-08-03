import React from 'react'
import Button from '../../../../components/Button'
import KacyCardData from '../KacyCardData'

import * as S from './styles'

const kacyMockData = [
  {
    value: '$0.50',
    title: 'Price'
  },
  {
    value: '$12,95923',
    title: 'Market Cap'
  },
  {
    value: '12,95923',
    title: 'Total Supply'
  },
  {
    value: '12,95923',
    title: 'Circ. Supply'
  }
]

const KacyData = () => {
  return (
    <S.KacyDataContainer>
      <S.Title>
        Be part of a cutting edge tokenized investment funds protocol
      </S.Title>

      <S.Text>
        Our governance token allows you to create portfolios, support your
        favorite strategies, integrate with partners and vote on issues that
        matter to you.
      </S.Text>

      <S.KacyDataCardContainer>
        {kacyMockData.map(item => {
          return (
            <KacyCardData
              key={item.title}
              value={item.value}
              title={item.title}
            />
          )
        })}
      </S.KacyDataCardContainer>

      <S.BtnWrapper>
        <Button text="Buy $KACY" backgroundPrimary />
        <Button text="Join Our Discord" backgroundBlack />
      </S.BtnWrapper>
    </S.KacyDataContainer>
  )
}

export default KacyData
