import React from 'react'
import Image from 'next/image'

import SectionCard from '../SectionCard'
import HomeHeading from '../HomeHeading'
import ManagerCard from '../ManagerCard'
import FadeInVertical from '../../../components/Animations/FadeInVertical'

import managerImg from '../../../../public/assets/images/kassandra-head.png'
import practicalIcon from '../../../../public/assets/iconGradient/practical.svg'
import simpleIcon from '../../../../public/assets/iconGradient/simple.svg'
import inexpensiveIcon from '../../../../public/assets/iconGradient/inexpensive.svg'
import light4 from '../../../../public/assets/images/backgroundHome/light-mobile4.png'

import * as S from './styles'

const ManagerCardData = [
  {
    icon: practicalIcon,
    title: 'Practical',
    text: 'Don’t make transactions constantly, allocations are rebalanced with our Automated Market Makers (AMM).',
    alt: 'Check mark'
  },
  {
    icon: simpleIcon,
    title: 'Simple',
    text: 'Easily create your managed pool, track your metrics, change allocations and tokens in an intuitive interface.',
    alt: 'Circle'
  },
  {
    icon: inexpensiveIcon,
    title: 'Inexpensive',
    text: 'Avoid front-running while paying no additional fees to rebalance your tokenized portfolio.',
    alt: 'Dollar sign'
  }
]

const ManagerSection = () => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <Image src={light4} alt="Ball of light" />
      </S.ImgWrapper>

      <SectionCard
        number="02"
        title="Managers"
        color="#26DBDB"
        subtitle="Tokenize your portfolio  in an one-stop-shop and earn money with it"
        text="Become a pillar of decentralized asset management and earn additional income whenever someone invests in your tokenized portfolios. Manage, track, evaluate in one place with no extra fees."
        btnText="Become a Manager"
        link="/managers"
        img={managerImg}
        alt="greek statue head with purple neon light crown"
      />

      <FadeInVertical threshold={0.5}>
        <HomeHeading
          title="kassandra for managers"
          color="#26DBDB"
          subTitle="Rebalance your portfolios automagically and get paid to manage them"
          text="Gone are the days of having to pay fees to rebalance your portfolio. By incentivizing arbitrage, we use traders to do it for you."
        />
      </FadeInVertical>

      <FadeInVertical threshold={0.5}>
        <S.ManagerCardContainer>
          {ManagerCardData.map(item => {
            return (
              <ManagerCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                text={item.text}
                alt={item.alt}
              />
            )
          })}
        </S.ManagerCardContainer>
      </FadeInVertical>
    </S.Container>
  )
}

export default ManagerSection
