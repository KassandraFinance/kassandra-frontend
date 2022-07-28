import React from 'react'

import * as S from './styles'

const HeroHome = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Welcome to Kassandra DAO</S.Title>

        <S.SubTitleWrapper>
          <S.SubTitle>
            <S.TextBox>
              <S.Text>Create</S.Text>
              <S.Text>Invest</S.Text>
              <S.Text>Manage</S.Text>
            </S.TextBox>
            <S.VisibilityHidden>Manage </S.VisibilityHidden> tokenized
          </S.SubTitle>

          <S.SubTitle>investment funds effortlessly</S.SubTitle>
        </S.SubTitleWrapper>
      </S.TitleContainer>
    </S.Container>
  )
}

export default HeroHome
