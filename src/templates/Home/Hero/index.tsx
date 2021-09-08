import React from 'react'
import Link from 'next/link'

import * as S from './styles'

const Hero = () => {
  return (
    <S.Hero>
      <div>
        <h1>Kassandra DAO</h1>
        <S.DesktopScreen>
          <h3>
            The decentralized autonomous organization that governs tokenized
            data-driven investment funds.
          </h3>
          <S.ButtonContainer>
            <Link href="/heim">View the $HEIM Index</Link>
            <S.WithpaperButton
              className="withepaper"
              href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whitepaper
            </S.WithpaperButton>
          </S.ButtonContainer>
        </S.DesktopScreen>
      </div>
      <img src="assets/kassandra-600.svg" alt="" className="kassandra" />
      <S.MobileScreen>
        <h3>
          The decentralized autonomous organization that governs tokenized
          data-driven investment funds.
        </h3>
        <S.ButtonContainer>
          <Link href="/heim">View the $HEIM Index</Link>
          <S.WithpaperButton
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </S.WithpaperButton>
        </S.ButtonContainer>
      </S.MobileScreen>
    </S.Hero>
  )
}

export default Hero
