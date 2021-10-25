import React from 'react'

import * as S from './styles'

const ClassProducts = () => {
  return (
    <S.ClassProducts>
      <p>DYNAMICALLY REBALANCED</p>
      <S.Divider />
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
      <span>Iaculis at elementum aliquam ut tincidunt turpis congue orci. Blandit ut vulputate ut massa diam risus. Elit morbi velit, morbi id risus, tellus nisi. Arcu, consectetur tristique velit dolor. </span>
      <S.Image>
        <img src="assets/classProductImage.png" alt="" />
      </S.Image>
      <S.ImageDescription>
        <S.DescriptionContainer>
          <p>SMART DATA BASE</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </S.DescriptionContainer>
        <S.DescriptionContainer>
          <p>MANAGED BY KASSANDRA</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </S.DescriptionContainer>
        <S.DescriptionContainer>
          <p>PORTFOLIO</p>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </S.DescriptionContainer>
      </S.ImageDescription>
    </S.ClassProducts>
  )
}

export default ClassProducts
