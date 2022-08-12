import React from 'react'
import Image from 'next/image'

import Grid from '../../../../public/assets/images/grid.svg'

import * as S from './styles'

enum TOKEN_KEY {
  KACY = 'kacy',
  AVAX = 'avax',
  BITCOIN = 'bitcoin',
  YIELDYAK = 'yieldiak',
  ETH = 'eth',
  DAI = 'dai'
}

const Tokens = {
  [TOKEN_KEY.KACY]: {
    logo: '/assets/logos/kacy.png',
    color: 'rgba(255, 191, 0, 1)'
  },
  [TOKEN_KEY.AVAX]: {
    logo: '/assets/logos/avax.png',
    color: 'rgba(224, 29, 181, 1)'
  },
  [TOKEN_KEY.BITCOIN] :{
    logo: '/assets/logos/bitcon.svg',
    color: 'rgba(38, 219, 219, 1)'
  },
  [TOKEN_KEY.YIELDYAK] :{
    logo: '/assets/logos/yieldyak.svg',
    color: 'rgba(12, 61, 220, 1)'
  },
  [TOKEN_KEY.ETH] :{
    logo: '/assets/logos/eth-logo.svg',
    color: 'rgba(133, 145, 208, 1)'
  },
  [TOKEN_KEY.DAI] :{
    logo: '/assets/logos/dai.png',
    color: 'rgba(248, 153, 61, 1)'
  }
}

const groupPercentage = {
  [TOKEN_KEY.AVAX]: 14,
  [TOKEN_KEY.KACY]: 37,
  [TOKEN_KEY.BITCOIN]: 19,
  [TOKEN_KEY.YIELDYAK]: 10,
  [TOKEN_KEY.ETH]: 12,
  [TOKEN_KEY.DAI]: 8
}

const ChangeAllocations = () => {
  const [isActiveHand, setIsActiveHand] = React.useState(false)
  const [tokenn, setTokenn] = React.useState(groupPercentage)

  const kacyRef = React.useRef<null | HTMLParagraphElement>(null)
  const avaxRef = React.useRef<null | HTMLParagraphElement>(null)
  const bitconRef = React.useRef<null | HTMLParagraphElement>(null)
  const yiledyakRef = React.useRef<null | HTMLParagraphElement>(null)
  const ethRef = React.useRef<null | HTMLParagraphElement>(null)
  const daiRef = React.useRef<null | HTMLParagraphElement>(null)

  const maxPercentagee = 100
  const getRandomPercentage = (usedPercentage: number): number => {
    const maxPercentage = maxPercentagee - usedPercentage + 1
    const minPercentage = 1
    return parseInt(
      (
        Math.floor(Math.random() * maxPercentage + minPercentage) / 2 +
        minPercentage
      ).toString()
    )
  }

  const generateRandomGroup = () => {
    const groupPercentage = {
      [TOKEN_KEY.AVAX]: 0,
      [TOKEN_KEY.KACY]: 0,
      [TOKEN_KEY.BITCOIN]: 0,
      [TOKEN_KEY.YIELDYAK]: 0,
      [TOKEN_KEY.ETH]: 0,
      [TOKEN_KEY.DAI]: 0
    }

    const groupKeys = Object.keys(groupPercentage);
    let usedPercentage = 0;

    groupKeys.map((tokenKey, index) => {
      if(groupKeys.length === index + 1) {
        // eslint-disable-next-line prettier/prettier
        groupPercentage[tokenKey as TOKEN_KEY] = maxPercentagee - usedPercentage
      } else {
        groupPercentage[tokenKey as TOKEN_KEY] = getRandomPercentage(usedPercentage + (groupKeys.length - index))
      }
      usedPercentage += groupPercentage[tokenKey as TOKEN_KEY]
    })

    return groupPercentage
  }

  function handleIncreaseNumber(valueRef: any, valueToken: number) {
    let start = Number(valueRef.current?.innerHTML)
    const endValue = valueToken
    const duration = 50

    const counter = setInterval(() => {
      if (start == endValue) {
        clearInterval(counter)
        return
      }
      start > endValue ? start -= 1 : start += 1
      if (valueRef.current) {
        valueRef.current.innerHTML = String(start)
      }
    }, duration)
  }

  React.useEffect(() => {
    setTimeout(() => {
      setIsActiveHand(true)

      const generateRamdomPorcentage = generateRandomGroup()
      setTokenn(generateRamdomPorcentage)
    }, 5000);

    setTimeout(() => {
      setIsActiveHand(false)
    }, 2000);
  }, [tokenn])

  React.useEffect(() => {
    handleIncreaseNumber(kacyRef, tokenn[TOKEN_KEY.KACY])
    handleIncreaseNumber(avaxRef, tokenn[TOKEN_KEY.AVAX])
    handleIncreaseNumber(bitconRef, tokenn[TOKEN_KEY.BITCOIN])
    handleIncreaseNumber(yiledyakRef, tokenn[TOKEN_KEY.YIELDYAK])
    handleIncreaseNumber(ethRef, tokenn[TOKEN_KEY.ETH])
    handleIncreaseNumber(daiRef, tokenn[TOKEN_KEY.DAI])
  }, [tokenn])

  return (
    <>
      <S.ChangeAllocationsContainer>
        <S.DescriptionContainer>
          <span>PRACTICAL</span>
          <h1>Set new pool allocations with one single transaction</h1>
          <p>
            With Kassandra, you change allocation percentages instead of making
            transactions. You don’t need to worry about new investments,
            withdrawals or price changes, we’ve got you covered.
          </p>
        </S.DescriptionContainer>
        <S.GridContainer>
          <span>
            <Image src={Grid} alt="" width={464} height={350} />
          </span>
          <S.TokenContainer>
            <S.BarContainer>
              <img src={Tokens[TOKEN_KEY.KACY].logo} alt="" width={24} height={24} />
              <S.TokenBar TokenValue={tokenn[TOKEN_KEY.KACY]} TokenColor={Tokens[TOKEN_KEY.KACY].color} />
              <p ref={kacyRef}>{kacyRef.current?.innerHTML}</p>
            </S.BarContainer>
            <S.BarContainer>
              <img src={Tokens[TOKEN_KEY.AVAX].logo} alt="" width={24} height={24} />
              <S.TokenBar  TokenValue={tokenn[TOKEN_KEY.AVAX]}  TokenColor={Tokens[TOKEN_KEY.AVAX].color} />
              <p ref={avaxRef}>{avaxRef.current?.innerHTML}</p>
            </S.BarContainer>
            <S.BarContainer>
              <img src={Tokens[TOKEN_KEY.BITCOIN].logo} alt="" width={24} height={24} />
              <S.TokenBar  TokenValue={tokenn[TOKEN_KEY.BITCOIN]} TokenColor={Tokens[TOKEN_KEY.BITCOIN].color} />
              <p ref={bitconRef}>{bitconRef.current?.innerHTML}</p>
            </S.BarContainer>
            <S.BarContainer>
              <img src={Tokens[TOKEN_KEY.YIELDYAK].logo} alt="" width={24} height={24} />
              <S.TokenBar TokenValue={tokenn[TOKEN_KEY.YIELDYAK]} TokenColor={Tokens[TOKEN_KEY.YIELDYAK].color} />
              <p ref={yiledyakRef}>{yiledyakRef.current?.innerHTML}</p>
            </S.BarContainer>
            <S.BarContainer >
              <img src={Tokens[TOKEN_KEY.ETH].logo} alt="" width={24} height={24} />
              <S.TokenBar TokenValue={tokenn[TOKEN_KEY.ETH]} TokenColor={Tokens[TOKEN_KEY.ETH].color} />
              <p ref={ethRef}>{ethRef.current?.innerHTML}</p>
            </S.BarContainer>
            <S.BarContainer>
              <img src={Tokens[TOKEN_KEY.DAI].logo} alt="" width={24} height={24} />
              <S.TokenBar TokenValue={tokenn[TOKEN_KEY.DAI]} TokenColor={Tokens[TOKEN_KEY.DAI].color} />
              <p ref={daiRef}>{daiRef.current?.innerHTML}</p>
            </S.BarContainer>
          </S.TokenContainer>
          <S.ChangeButtonContent isActiveHand={isActiveHand}>
            <p>$ 0.00</p>
            <S.ChangeButton>
              <button>Change Allocations</button>
            </S.ChangeButton>
            <span>
              <img src="/assets/images/hand.svg" alt="" />
            </span>
          </S.ChangeButtonContent>
        </S.GridContainer>
      </S.ChangeAllocationsContainer>
    </>
  )
}

export default ChangeAllocations
