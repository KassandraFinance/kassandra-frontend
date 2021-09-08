import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'

const Hero = () => {
  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }

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
            <Link href="/heim" >
              <a 
                onClick={() => clickMatomoEvent("click-to-heim", "heim-hero")}
                >
                  View the $HEIM Index
                </a>
            </Link>
            <S.WithpaperButton
              className="withepaper"
              href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clickMatomoEvent("click-to-whitepaper", "whitepaper-hero")}
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
          <Link href="/heim" >
              <a 
                onClick={() => clickMatomoEvent("click-to-heim", "heim-hero")}
                >
                  View the $HEIM Index
                </a>
            </Link>
          <S.WithpaperButton
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => clickMatomoEvent("click-to-whitepaper", "whitepaper-hero")}
          >
            Whitepaper
          </S.WithpaperButton>
        </S.ButtonContainer>
      </S.MobileScreen>
    </S.Hero>
  )
}

export default Hero
