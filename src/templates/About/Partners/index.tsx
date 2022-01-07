import React from 'react'

import * as S from './styles'

const Partners = () => (
  <S.Container>
    <S.TitleAndIcon>
      <S.Icon>
        <img src="assets/about-partners-icon.svg" alt="" />
      </S.Icon>
      <S.Title>Partners</S.Title>
    </S.TitleAndIcon>
    <S.Partners>
      <img src="assets/heimdall.svg" alt="Heimdall" />
      <img src="assets/api3.svg" alt="API3" />
    </S.Partners>
  </S.Container>
)

export default Partners
