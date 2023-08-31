import Image from 'next/image'

import SectionCard from '../SectionCard'

import daoImg from '../../../../public/assets/images/dao.png'
import light5 from '../../../../public/assets/images/backgroundHome/light-mobile5.png'
import lightTable8 from '../../../../public/assets/images/backgroundHome/light-tablet8.png'
import lightTable9 from '../../../../public/assets/images/backgroundHome/light-tablet9.png'

import * as S from './styles'

const DaoSection = () => {
  return (
    <S.Container>
      <S.ImgWrapper1>
        <Image src={light5} alt="Ball of light" />
      </S.ImgWrapper1>

      <S.ImgWrapper2>
        <Image src={light5} alt="Ball of light" />
      </S.ImgWrapper2>

      <S.ImgTabletWrapper1>
        <Image src={lightTable8} alt="Ball of light" />
      </S.ImgTabletWrapper1>

      <S.ImgTabletWrapper2>
        <Image src={lightTable9} alt="Ball of light" />
      </S.ImgTabletWrapper2>

      <SectionCard
        number="03"
        title="DAO"
        color="#E843C4"
        subtitle="Get KACY and participate in our governance to build the future"
        text="Acquire voting power to build, invest and contribute to Kassandra. Help maintain the DAO and join us in the future of decentralized asset management."
        btnText="Governance 101"
        link="/dao"
        img={daoImg}
        alt="A group of people in the VIP area"
      />
    </S.Container>
  )
}

export default DaoSection
