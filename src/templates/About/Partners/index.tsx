import React from 'react'

import * as S from './styles'

const Partners = () => (
  <S.Container>
    <S.TitleAndIcon>
      <S.Icon>
        <img
          src="assets/about-external-link-icon.svg"
          alt="External Link Icon"
        />
      </S.Icon>
      <S.Title>Partners</S.Title>
    </S.TitleAndIcon>
    <S.Partners>
      <img src="assets/about-heimdall-logo.svg" alt="Partner Logo" />
      <img src="assets/about-lemonade-logo.svg" alt="Partner Logo" />
      <img src="assets/about-jigstack-logo.svg" alt="Partner Logo" />
      <img src="assets/about-api3-logo.svg" alt="Partner Logo" />
    </S.Partners>
  </S.Container>
)

export default Partners
