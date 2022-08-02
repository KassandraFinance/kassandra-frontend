import React from 'react'

import SectionCard from '../SectionCard'
import HomeHeading from '../HomeHeading'

import daoImg from '../../../../public/assets/images/dao.png'

import * as S from './styles'

const DaoSection = () => {
  return (
    <S.Container>
      <SectionCard
        number="03"
        title="DAO"
        color="#E843C4"
        subtitle="Invest in KACY, earn protocol fees and participate in our governance"
        text="Earn rewards and voting power to build, invest and contribute to Kassandra. Help maintain the DAO while gaining a stake in all of our protocol fees."
        btnText="Governance 101"
        img={daoImg}
      />

      <HomeHeading
        title="kassandra ecosystem"
        color="#E843C4"
        subTitle="Connecting investors and managers to build smart descentralized ETFs"
        text="Help grow Kassandra with new investment products, keep our protocol healthy with flowing revenue and commit your tokens to the DAO to get voting rights."
      />
    </S.Container>
  )
}

export default DaoSection