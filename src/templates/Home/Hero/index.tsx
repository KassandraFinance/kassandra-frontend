import React from 'react'
import Link from 'next/link'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Button from '../../../components/Button'

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
              <Button
                backgroundPrimary
                size='large'
                text='View the $HEIM Index'
                onClick={() => clickMatomoEvent("click-to-heim", "heim-hero")}
              />
            </Link>
            <Button
              size='large'
              backgroundBlack
              as='a'
              text='Whitepaper'
              // className="withepaper"
              href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => clickMatomoEvent("click-to-whitepaper", "whitepaper-hero")}
            />

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
          <Button
            backgroundPrimary
            text='View the $HEIM Index'
            size='large'
            onClick={() => clickMatomoEvent("click-to-heim", "heim-hero")}
          >

          </Button>
          <Button
            size='large'
            backgroundBlack
            as='a'
            text='Whitepaper'
            // className="withepaper"
            href="https://drive.google.com/file/d/12jxIMtBVqaY7bMbLmt52Lo0xDFUURZsb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => clickMatomoEvent("click-to-whitepaper", "whitepaper-hero")}
          />
        </S.ButtonContainer>
      </S.MobileScreen>
    </S.Hero>
  )
}

export default Hero
