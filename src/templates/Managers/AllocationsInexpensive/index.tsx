import Image from 'next/image'

import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'

import allocationsInexpensive from '../../../../public/assets/images/allocations-inexpensive.svg'

import * as S from './styles'

const AllocationsInexpensive = () => (
  <FadeInHorizontal threshold={0.5}>
    <S.AllocationsInexpensiveContainer>
      <S.DescriptionContainer>
        <span>INEXPENSIVE</span>
        <h1>
          Your target allocations are always followed, and you don’t have to pay
          for it
        </h1>
        <Paragraph
          text="Token weights are kept balanced by arbitraging traders. This means you
          avoid front-running while earning swap fees instead of paying
          rebalancing fees."
        />
      </S.DescriptionContainer>
      <S.ImageContainer>
        <Image src={allocationsInexpensive} alt="" width={460} height={350} />
      </S.ImageContainer>
    </S.AllocationsInexpensiveContainer>
  </FadeInHorizontal>
)

export default AllocationsInexpensive
