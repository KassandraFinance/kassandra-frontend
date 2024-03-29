import React from 'react'
// import { useRouter } from 'next/router'

// import useMatomo from '@/hooks/useMatomo'
// import Slider, { SliderSettings } from '../../components/Slider'
// import RoadMapCard from './RoadMapCard'
import SectionSubtitle from '../SectionSubtitle'

// import { icons, colors, SlickArrowLeft, SlickArrowRight } from './assets'

import * as S from './styles'

const RoadMapSlider = () => {
  // cconst { trackEvent } = useMatomo()
  // const router = useRouter()

  // const settings: SliderSettings = {
  //   arrows: true,
  //   slidesToShow: 2.3,
  //   lazyLoad: 'ondemand',
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: '30px',
  //   className: 'center',
  //   responsive: [
  //     {
  //       breakpoint: 960,
  //       settings: {
  //         dots: true,
  //         arrows: false,
  //         slidesToShow: 2.3,
  //         centerPadding: '15px'
  //       }
  //     },
  //     {
  //       breakpoint: 700,
  //       settings: {
  //         dots: true,
  //         arrows: false,
  //         infinite: false,
  //         slidesToShow: 1,
  //         centerMode: false
  //       }
  //     }
  //   ],
  //   prevArrow: (
  //     <SlickArrowLeft
  //       onClick={() => {
  //         trackEvent({
  //           category: router.pathname,
  //           action: `click-on-button | RoadMapSlider | ${router.pathname}`,
  //           name: `Slick Arrow Right`
  //         })
  //       }}
  //     />
  //   ),
  //   nextArrow: (
  //     <SlickArrowRight
  //       onClick={() => {
  //         trackEvent({
  //           category: router.pathname,
  //           action: `click-on-button | RoadMapSlider | ${router.pathname}`,
  //           name: `Slick Arrow Left`
  //         })
  //       }}
  //     />
  //   )
  // }

  return (
    <S.Wrapper>
      <S.TitleAndIcon>
        <SectionSubtitle text="Project Roadmap" />
      </S.TitleAndIcon>
      <S.Divider />
      {/* <Slider settings={settings}>
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
      </Slider> */}
    </S.Wrapper>
  )
}

// const arrCard = [
//   {
//     date: '2022 - Q3',
//     icon: icons.soon,
//     color: colors.soon,
//     title: '3rd Cycle ',
//     items: [
//       {
//         title: 'Community Products',
//         text: [
//           'Open interface for Kassandra DAO members create their own tokenized funds'
//         ]
//       },
//       {
//         title: 'Multichain',
//         text: ['Time to jump into other blockchains']
//       }
//     ]
//   },
//   {
//     date: '2022 - Q1',
//     title: '1st Cycle ',
//     icon: icons.done,
//     color: colors.done,
//     items: [
//       {
//         title: 'IDO',
//         text: ['Launching and bootstrapping KACY']
//       },
//       {
//         title: 'Avalanche Social Index',
//         text: [
//           'A single asset that automatically invests in the most active communities on Avalanche'
//         ]
//       },
//       {
//         title: 'Stake & Farm',
//         text: ['Earn staking KACY and other assets']
//       }
//     ]
//   },
//   {
//     date: '2022 - Q2',
//     icon: icons.done,
//     color: colors.done,
//     title: '2nd Cycle ',
//     items: [
//       {
//         title: 'Governance & DAO',
//         text: ['Vote and take a share of Kassandra profits']
//       },
//       {
//         title: 'Tricrypto Social Index',
//         text: [
//           'Bitcoin, Ethereum, and stablecoins, magically working towards better returns'
//         ]
//       }
//     ]
//   }
// ]
export default RoadMapSlider
