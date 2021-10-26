import React from "react";
import Link from "next/link";
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
            <Link href='/products'>
              <Button
                backgroundPrimary
                text='Buy $HEIM'
              />
            </Link>
            <a href="#">Learn More
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 11.5L11.5 8.5L8.5 5.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5.5 8.5H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </S.BannerFooter>
        </S.TextWrapper>
      </S.Container>
    </S.Background>
  )
}
export default BannerCTA
