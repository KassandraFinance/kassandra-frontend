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
  items: CardItem[],
  icon: JSX.Element,
  invisible?: boolean
}

const RoadMapCard = ({
  date,
  title,
  color,
  items,
  icon,
  invisible
}: RoadMapCardProps) => {
  if (invisible) {
    return <div />
  }
  return (
    <>
      <S.CardWrapper color={color}>
        <S.CardHeader>
          <S.DateText>{date}</S.DateText>
          <S.TitleandIcon>
            <S.TimerIcon>{icon}</S.TimerIcon>
            <S.CardTitle>{title}</S.CardTitle>
          </S.TitleandIcon>
        </S.CardHeader>
        <S.Divider />
        <S.CardBody>
          <S.CardDescription>
            {items.map((item, index) => (
              <S.ListTitle key={index}>
                {item.title}
                {item.text.map(text => (
                  <S.ListText key={text}>{text}</S.ListText>
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
