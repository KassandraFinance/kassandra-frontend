import React from 'react'

import * as S from './styles'

const RoadMapCard = () => {
  return (
    <>
      {arrCard.map(card => (
        <>
          <S.CardWrapper color={card.color}>
            <S.CardHeader>
              <S.DateText>{card.date}</S.DateText>
              <S.CardTitle>{card.title}</S.CardTitle>
            </S.CardHeader>
            <S.CardBody>
              <S.CardDescription>
                {card.items.map(item => (
                  <>
                    <S.ListTitle>{item.title}</S.ListTitle>
                    {item.text.map(text => (
                      <p key={text}>{text}</p>
                    ))}
                  </>
                ))}
              </S.CardDescription>
            </S.CardBody>
          </S.CardWrapper>
        </>
      ))}
    </>
  )
}

const arrCard = [
  {
    date: '2020-06-01',
    title: '1st Cycle ',
    color: 'green',
    items: [
      {
        title: 'IDO',
        text: ['Launching and bootstrapping KACY']
      },
      {
        title: 'Avalanche Social Index',
        text: [
          'A single asset that automatically invests in the most active communities on Avalanche'
        ]
      },
      {
        title: 'Stake & Farm',
        text: ['Earn staking KACY and other assets']
      }
    ]
  },
  {
    date: '2020-06-01',
    color: 'yellow',
    title: '1st Cycle ',
    items: [
      {
        title: 'IDO',
        text: ['Launching and bootstrapping KACY']
      },
      {
        title: 'Avalanche Social Index',
        text: [
          'A single asset that automatically invests in the most active communities on Avalanche'
        ]
      },
      {
        title: 'Stake & Farm',
        text: ['Earn staking KACY and other assets']
      }
    ]
  }
]
export default RoadMapCard
