import Image from 'next/image'
import allocationsInexpensive from '../../../../public/assets/images/allocations-inexpensive.svg'

import * as S from './styles'

const AllocationsInexpensive = () => (
  <>
    <S.AllocationsInexpensiveContainer>
      <S.DescriptionContainer>
        <span>INEXPENSIVE</span>
        <h1>
          Your target allocations are always followed, and you don’t have to pay
          for it
        </h1>
        <p>
          Token weights are kept balanced by arbitraging traders. This means you
          avoid front-running while earning swap fees instead of paying
          rebalancing fees.
        </p>
      </S.DescriptionContainer>
      <S.ImageContainer>
        <Image src={allocationsInexpensive} alt="" width={460} height={350} />
      </S.ImageContainer>
    </S.AllocationsInexpensiveContainer>
  </>
)

export default AllocationsInexpensive
