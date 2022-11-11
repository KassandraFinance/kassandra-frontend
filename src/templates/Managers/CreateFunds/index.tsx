import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../../../components/Button'
import FadeIn from '../../../components/Animations/FadeIn'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import arrowWhite from '../../../../public/assets/utilities/arrow-white.svg'

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
    title: 'Create an index fund',
    paragraph:
      'Create your own index token that will work as its own Automated Market Maker, following allocations percentages automatically.',
    image: '/assets/images/create-funds-one.svg'
  },
  {
    id: 2,
    title: 'Get paid when people invest in it',
    paragraph:
      'Your investment fund is listed on our community interface, allowing users to discover and invest in your tokenized portfolios easily.',
    image: '/assets/images/create-funds-two.svg'
  },
  {
    id: 3,
    title: 'Change asset allocations 24/7',
    paragraph:
      'There is no such thing as a closed market. Your allocations are changed whenever you want them to.',
    image: '/assets/images/create-funds-three.svg'
  },
  {
    id: 4,
    title: 'Traders keep your strategy working',
    paragraph:
      'Arbitrageurs are encouraged to balance your portfolio with minimal artificial price inflations and deflations while paying swap fees to all investors.',
    image: '/assets/images/create-funds-four.svg'
  },
  {
    id: 5,
    title: 'Withdraw fees help support the DAO',
    paragraph:
      'You earn when there’s a deposit, we earn when there’s a withdraw. Everyone gets a piece.',
    image: '/assets/images/create-funds-five.svg'
  },
  {
    id: 6,
    title: 'Repeat, forever.',
    paragraph:
      'This is how our system integrates different actors to provide a seamless experience for fund managers.',
    image: '/assets/images/create-funds-six.svg'
  }
]

const CreateFund = () => {
  // eslint-disable-next-line prettier/prettier
  const [createManagerFunds, setCreateManagerFunds] =
    React.useState<IManagerText>(managerFundsArray[0])
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
    <FadeIn threshold={0.5}>
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
            <SectionSubtitle text={createManagerFunds.title} />
            <Paragraph text={createManagerFunds.paragraph} />
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
    </FadeIn>
  )
}

export default CreateFund
