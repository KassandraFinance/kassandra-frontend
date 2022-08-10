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
          Token weights are kept balanced by incentivizing traders to do it for
          you. Avoid front-running by not making market transactions while
          earning sweet swap fees instead of paying to keep it balanced.
        </p>
      </S.DescriptionContainer>
      <S.ImageContainer>
        <Image src={allocationsInexpensive} alt="" width={460} height={350} />
      </S.ImageContainer>
    </S.AllocationsInexpensiveContainer>
  </>
)

export default AllocationsInexpensive
