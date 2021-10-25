import React from "react";
import Button from "../Button";

import * as S from './styles'

const BannerCTA = () => {
  return (
    <S.Background>
      <S.Container>
        <S.ImageWrapper>
          <img src="assets/heim-coin-banner.png" alt="" />
        </S.ImageWrapper>

        <S.TextWrapper>
          <p>Circulating Supply</p>
          <h1>Adipiscing volutpat arcu, viverra quis sed at.</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in massa euismod, elementum massa id, cursus dui. Cras sem sem, auctor et nibh in, feugiat tincidunt diam. Vestibulum nec lectus sit amet enim varius consequat quis sit amet urna.</span>
          <S.BannerFooter>
            <Button
              backgroundPrimary
              as='a'
              href='/products'
              text='Buy $HEIM'
            />
            <div>
              <a href="#">Learn More </a>
              <img src="assets/arrow-circle.png" alt="" />
            </div>
          </S.BannerFooter>
        </S.TextWrapper>
      </S.Container>
    </S.Background>
  )
}
export default BannerCTA
