import React from 'react'

import * as S from './styles'

const HeroText = () => {
  return (
    <S.TitleContainer>
      <S.Title>Welcome to Kassandra DAO</S.Title>

      <S.SubTitleWrapper>
        <S.SubTitle>
          <S.TextBox>
            <S.Text>Create</S.Text>

            <S.Text>
              <span>Invest in</span>
            </S.Text>

            <S.Text>Manage</S.Text>
          </S.TextBox>
          <S.VisibilityHidden>Invest in</S.VisibilityHidden> tokenized
        </S.SubTitle>

        <S.SubTitle>investment funds</S.SubTitle>
      </S.SubTitleWrapper>
    </S.TitleContainer>
  )
}

export default HeroText
