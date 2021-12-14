import React from 'react'

import * as S from './styles'

type CardItem = {
  title: string,
  text: string[]
}

export type RoadMapCardProps = {
  color: string,
  date: string,
  title: string,
  items: CardItem[]
}
const RoadMapCard = ({ date, title, color, items }: RoadMapCardProps) => {
  return (
    <>
      <S.CardWrapper color={color}>
        <S.CardHeader>
          <S.DateText>{date}</S.DateText>
          <S.CardTitle>{title}</S.CardTitle>
        </S.CardHeader>
        <S.Divider />
        <S.CardBody>
          <S.CardDescription>
            {items.map((item, index) => (
              <S.ListTitle key={index}>
                {item.title}

                {items.map((item, index) => (
                  <S.ListText key={index}>{item.text}</S.ListText>
                ))}
              </S.ListTitle>
            ))}
          </S.CardDescription>
        </S.CardBody>
      </S.CardWrapper>
    </>
  )
}

export default RoadMapCard
