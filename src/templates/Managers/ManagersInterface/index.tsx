import Image from 'next/image'

import * as S from './styles'

const ManagersInterface = () => (
  <>
    <S.ManagersInterfaceContainer>
      <S.ImageContainer>
        <Image
          src="/assets/images/managers-interface.svg"
          alt=""
          width={500}
          height={470}
        />
      </S.ImageContainer>
      <S.DescriptionContainer>
        <span>SIMPLE</span>
        <h1>An innovative, intuitive interface for managers</h1>
        <p>
          Easily create your fund, track your metrics, change allocations and
          tokens in an intuitive interface. Built by managers for managers.™
        </p>
      </S.DescriptionContainer>
    </S.ManagersInterfaceContainer>
  </>
)

export default ManagersInterface
