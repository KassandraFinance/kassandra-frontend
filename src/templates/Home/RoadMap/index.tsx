import React from 'react'
import Card from './Card'

import { colors, icons } from './assets'

import * as S from './styles'

const RoadMap = () => {
  return (
    <S.Wrapper>
      <S.TitleAndIcon>
        <S.Icon>
          <svg
            width="17"
            height="23"
            viewBox="0 0 17 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.9 0.333374C13.4482 0.333374 16.9706 3.89712 16.9706 9.10555C16.9706 12.5778 14.2255 16.9104 8.73529 22.1031C3.2451 16.9104 0.5 12.5778 0.5 9.10555C0.5 3.89712 4.35177 0.333374 8.9 0.333374ZM8.76667 6.07026C7.29391 6.07026 6.1 7.26417 6.1 8.73693C6.1 10.2097 7.29391 11.4036 8.76667 11.4036C10.2394 11.4036 11.4333 10.2097 11.4333 8.73693C11.4333 7.26417 10.2394 6.07026 8.76667 6.07026Z"
              fill="url(#paint0_linear_6838_11749)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6838_11749"
                x1="8.73329"
                y1="22.1075"
                x2="8.73329"
                y2="0.335588"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFBF00" />
                <stop offset="1" stopColor="#E843C4" />
              </linearGradient>
            </defs>
          </svg>
        </S.Icon>
        <S.Title>Project Roadmap</S.Title>
      </S.TitleAndIcon>
      <S.Divider />
      <S.GridCard>
        {arrCard.map(card => (
          <Card
            key={card.title}
            color={card.color}
            title={card.title}
            date={card.date}
            items={card.items}
            icon={card.icon}
          />
        ))}
      </S.GridCard>
    </S.Wrapper>
  )
}

const arrCard = [
  {
    date: '2021 - Q4',
    title: '1st Cycle ',
    icon: icons.done,
    color: colors.done,
    items: [
      {
        title: 'IDO',
        text: ['Launching and bootstrapping KACY']
      },
      {
        title: 'Avalanche Social Index',
        text: [
          'A single asset that automatically invests in the most active communities on Avalanche'
        ]
      },
      {
        title: 'Stake & Farm',
        text: ['Earn staking KACY and other assets']
      }
    ]
  },
  {
    date: '2022 - Q1',
    icon: icons.soon,
    color: colors.soon,
    title: '2nd Cycle ',
    items: [
      {
        title: 'Governance & DAO',
        text: ['Vote and take a share of Kassandra profits']
      },
      {
        title: 'Tricrypto Social Index',
        text: [
          'Bitcoin, Ethereum, and stablecoins, magically working towards better returns'
        ]
      }
    ]
  },
  {
    date: '2022 - Q2',
    icon: icons.next,
    color: colors.next,
    title: '3rd Cycle ',
    items: [
      {
        title: 'Community Products',
        text: [
          'Open interface to Kassandra DAO members create their own ',
          'tokenized funds'
        ]
      },
      {
        title: 'Multichain',
        text: ['Time to go to other chains']
      }
    ]
  }
]
export default RoadMap
