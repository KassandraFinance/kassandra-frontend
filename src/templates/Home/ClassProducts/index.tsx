import React from 'react'

import * as S from './styles'

const ClassProducts = () => {
  return (
    <S.ClassProducts>
      <p>DYNAMICALLY REBALANCED</p>
      <S.Divider />
      <h1>bringing complex investiment strategies to DeFi</h1>
      <span>Port any complex quantitative investment strategies to Web 3.0 using Kassandra Protocol technology </span>
      <S.Image>
        <img src="assets/classProductImage1.png" alt="" />
      </S.Image>
      <S.ImageDescription>
        <S.DescriptionContainer>
          <p>OFF-CHAIN DATA</p>
          <span>Any real world APIs feeding decentralized strategies</span>
        </S.DescriptionContainer>
        <S.DescriptionContainer>
          <p>ON-CHAIN STRATEGY</p>
          <span>A secure and self-executing strategy allocating money intelligently</span>
        </S.DescriptionContainer>
        <S.DescriptionContainer>
          <p>DYNAMIC PORTFOLIO</p>
          <span>A basket of assets open to invest that follows complex investment strategies</span>
        </S.DescriptionContainer>
      </S.ImageDescription>
    </S.ClassProducts>
  )
}

export default ClassProducts
