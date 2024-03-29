import Image from 'next/image'

import FadeInHorizontal from '../../../components/Animations/FadeInHorizontal'
import Paragraph from '../../../components/Paragraph'
import SectionSubtitle from '../../../components/SectionSubtitle'

import * as S from './styles'

const ManagersInterface = () => (
  <FadeInHorizontal threshold={0.5} invert>
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
        <SectionSubtitle text="An innovative, intuitive interface for managers" />

        <Paragraph
          text="Easily create your fund, track your metrics, change allocations and
          tokens in an easy-to-use interface."
        />
      </S.DescriptionContainer>
    </S.ManagersInterfaceContainer>
  </FadeInHorizontal>
)

export default ManagersInterface
