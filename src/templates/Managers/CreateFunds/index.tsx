import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import arrowWhite from '../../../../public/assets/utilities/arrow-white.svg'

import Button from '../../../components/Button'

import * as S from './styles'

interface IManagerText {
  id: number;
  title: string;
  paragraph: string;
  image: string;
}

const managerFundsArray = [
  {
    id: 1,
    title: 'You create a new Index Fund',
    paragraph:
      'Through a easy interface, you can create your own index token that will work as an Automated Maker Maket, following allocations percentages.',
    image: '/assets/images/create-funds-one.svg'
  },
  {
    id: 2,
    title: 'Earn when someone invests with you',
    paragraph:
      'Your investment fund is listed on our community interface, allowing investors to invest in your tokenized portfolios easily, and investors pay you every time someone does it.',
    image: '/assets/images/create-funds-two.svg'
  },
  {
    id: 3,
    title: 'You can change asset allocations 24/7',
    paragraph:
      'You get to change percentages of tokens in your fund whenever you want, and all of your investors will automagically follow you.',
    image: '/assets/images/create-funds-three.svg'
  },
  {
    id: 4,
    title: 'Traders keep your strategy working',
    paragraph:
      'Arbitreurs are encouraged to balance your portfolio with minimal artificial price inflations and deflations while paying swap fees to all investors.',
    image: '/assets/images/create-funds-four.svg'
  },
  {
    id: 5,
    title: 'The protocol earns from withdrawals',
    paragraph:
      'You earn when someone deposits on your strategy, the protocol earns when someone withdraw from it. Everyone gets a piece, everyone is happy.',
    image: '/assets/images/create-funds-five.svg'
  },
  {
    id: 6,
    title: 'This is Kassandra for fund managers',
    paragraph:
      'This is how our system integrates different actors to provide a seamless experience for fund managers.',
    image: '/assets/images/create-funds-six.svg'
  }
]

const CreateFund = () => {
  // eslint-disable-next-line prettier/prettier
  const [createManagerFunds, setCreateManagerFunds] = React.useState<IManagerText>(managerFundsArray[0])
  const [clickButton, setclickButton] = React.useState<number>(1)
  const [isActiveImage, setIsActiveImage] = React.useState(true)

  function handleChangeItens(buttonNumber: number) {
    if (buttonNumber === clickButton) return
    setIsActiveImage(false)

    setTimeout(() => {
      managerFundsArray.map(manage => {
        if (manage.id === buttonNumber) {
          setCreateManagerFunds(manage)
        }
      })
      setIsActiveImage(true)
    }, 300)
  }

  function handleClickRight(buttonNumber: number) {
    setIsActiveImage(false)

    if (buttonNumber === 1) {
      handleChangeItens(6)
      return setclickButton(6)
    }

    setclickButton(buttonNumber - 1)
    handleChangeItens(buttonNumber - 1)
  }

  function handleClickLeft(buttonNumber: number) {
    setIsActiveImage(false)

    if (buttonNumber === 6) {
      handleChangeItens(1)
      return setclickButton(1)
    }

    setclickButton(buttonNumber + 1)
    handleChangeItens(buttonNumber + 1)
  }

  return (
    <>
      <S.CreateFundContainer>
        <h1>Here are the gears under the hood</h1>
        <S.CreateFundContent>
          <S.DescriptionContainer isActiveButton={isActiveImage}>
            <S.NumberButtonsContainer>
              <S.NumberButton
                onClick={() => {
                  setclickButton(1), handleChangeItens(1)
                }}
                isActiveButton={clickButton === 1}
              >
                1
              </S.NumberButton>
              <S.NumberButton
                onClick={() => {
                  setclickButton(2), handleChangeItens(2)
                }}
                isActiveButton={clickButton === 2}
              >
                2
              </S.NumberButton>
              <S.NumberButton
                onClick={() => {
                  setclickButton(3), handleChangeItens(3)
                }}
                isActiveButton={clickButton === 3}
              >
                3
              </S.NumberButton>
              <S.NumberButton
                onClick={() => {
                  setclickButton(4), handleChangeItens(4)
                }}
                isActiveButton={clickButton === 4}
              >
                4
              </S.NumberButton>
              <S.NumberButton
                onClick={() => {
                  setclickButton(5), handleChangeItens(5)
                }}
                isActiveButton={clickButton === 5}
              >
                5
              </S.NumberButton>
              <S.NumberButton
                onClick={() => {
                  setclickButton(6), handleChangeItens(6)
                }}
                isActiveButton={clickButton === 6}
              >
                6
              </S.NumberButton>
            </S.NumberButtonsContainer>
            <span>HOW IT WORKS</span>
            <h2>{createManagerFunds.title}</h2>
            <p>{createManagerFunds.paragraph}</p>
            <S.ButtonsContainer>
              <Link
                href="https://3j2bd7x9okh.typeform.com/to/bBnYwVOD"
                passHref
              >
                <Button
                  as="a"
                  target="_blank"
                  backgroundSecondary
                  size="huge"
                  text="Create my own fund"
                  icon={
                    <img
                      src="/assets/utilities/go-to-page.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                  }
                />
              </Link>
              <S.ButtonsContent>
                <button onClick={() => handleClickRight(clickButton)}>
                  <Image src={arrowWhite} alt="" width={9} height={16} />
                </button>
                <button
                  id="arrowRight"
                  onClick={() => handleClickLeft(clickButton)}
                >
                  <Image src={arrowWhite} alt="" width={9} height={16} />
                </button>
              </S.ButtonsContent>
            </S.ButtonsContainer>
          </S.DescriptionContainer>
          <S.CreateFundsImageContainer isActiveImage={isActiveImage}>
            <img src="assets/images/create-funds.svg" alt="" />
            <img src={createManagerFunds.image} alt="" id="ImageFront" />
          </S.CreateFundsImageContainer>
        </S.CreateFundContent>
      </S.CreateFundContainer>
    </>
  )
}

export default CreateFund
