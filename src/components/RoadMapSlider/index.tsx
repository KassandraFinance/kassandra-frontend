import React, { useState } from 'react'
import Slider, { SliderSettings } from '../../components/Slider'
import RoadMapCard from '../RoadMapCard'
import * as S from './styles'

const colors: any = {
  done: '#5ee56b',
  soon: '#ffbf008b',
  next: '#676767'
}

const icons: any = {
  done: <img src="/assets/RoadmapDone.svg" alt="" />,
  soon: <img src="/assets/RoadmapSoon.svg" alt="" />,
  next: <img src="/assets/RoadmapNext.svg" alt="" />
}

const RoadMapSlider = () => {
  const settings: SliderSettings = {
    arrows: true,
    slidesToShow: 2.3,
    lazyLoad: 'ondemand',
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    className: 'center',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      },
      {
        breakpoint: 570,
        settings: {
          arrows: false,
          slidesToShow: 1.2
        }
      },
      {
        breakpoint: 375,
        settings: {
          arrows: false,
          slidesToShow: 1.1
        }
      }
    ],
    nextArrow: <img src="/assets/ArrowNext.svg" alt="" />,
    prevArrow: <img src="/assets/ArrowPrevious.svg" alt="" />
  }

  return (
    <S.Wrapper>
      <S.TitleAndIcon>
        <S.Icon>
          <img src="assets/RoadmapIcon.svg" alt="Roadmap Icon is a Pin" />
        </S.Icon>
        <S.Title>Project Roadmap</S.Title>
      </S.TitleAndIcon>
      <S.Divider />
      <Slider settings={settings}>
        {arrCard.map(card => (
          <RoadMapCard
            key={card.title}
            color={card.color}
            title={card.title}
            date={card.date}
            items={card.items}
            icon={card.icon}
          // invisible={card.invisible}
          />
        ))}
      </Slider>
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
  },
  {
    date: '2022 - Q3',
    icon: icons.next,
    color: colors.next,
    title: '4th Cycle ',
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
  },
  {
    invisible: true,
    date: '',
    icon: icons.next,
    color: colors.next,
    title: ' ',
    items: [
      {
        title: '',
        text: [' ']
      },
      {
        title: '',
        text: ['']
      }
    ]
  }
]
export default RoadMapSlider
