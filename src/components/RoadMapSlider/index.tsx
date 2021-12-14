import Slider, { SliderSettings } from '../../components/Slider'
import RoadMapCard from '../RoadMapCard'
import * as S from './styles'
import styled from 'styled-components'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 2.2,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
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

const RoadMapSlider = () => (
  <S.Wrapper>
    <Slider settings={settings}>
      {arrCard.map(card => (
        <RoadMapCard
          key={card.title}
          color={card.color}
          title={card.title}
          date={card.date}
          items={card.items}
        />
      ))}
    </Slider>
  </S.Wrapper>
)

const arrCard = [
  {
    date: '2020-06-01',
    title: '1st Cycle ',
    color: '#5EE56B80',
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
    date: '2020-06-01',
    color: '#ffbf008b',
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
    color: '#21142654',
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
    date: '2022 - Q2',
    color: '#21142654',
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
  }
]
export default RoadMapSlider
