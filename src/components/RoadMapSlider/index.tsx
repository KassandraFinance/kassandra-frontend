import React from 'react'
import Image from 'next/image'

import Slider, { SliderSettings } from '../../components/Slider'
import RoadMapCard from './RoadMapCard'

import pinIcon from '../../../public/assets/RoadmapIcon.svg'
import { icons, colors } from './assets'

import * as S from './styles'

const RoadMapSlider = () => {
  const settings: SliderSettings = {
    arrows: true,
    slidesToShow: 2.3,
    lazyLoad: 'ondemand',
    infinite: true,
    centerMode: true,
    centerPadding: '30px',
    className: 'center',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 2.3,
          centerPadding: '15px'
        }
      },
      {
        breakpoint: 700,
        settings: {
          dots: true,
          arrows: false,
          infinite: false,
          slidesToShow: 1,
          centerMode: false
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
          <Image src={pinIcon} alt="" />
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
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

const arrCard = [
  {
    date: '2022 - Q1',
    title: '1st Cycle ',
    icon: icons.soon,
    color: colors.soon,
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
    date: '2022 - Q2',
    icon: icons.next,
    color: colors.next,
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
    date: '2022 - Q3',
    icon: icons.next,
    color: colors.next,
    title: '3rd Cycle ',
    items: [
      {
        title: 'Community Products',
        text: [
          'Open interface for Kassandra DAO members create their own tokenized funds'
        ]
      },
      {
        title: 'Multichain',
        text: ['Time to jump into other blockchains']
      }
    ]
  }
]
export default RoadMapSlider
