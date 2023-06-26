import Image, { StaticImageData } from 'next/image'

import Paragraph from '../../../components/Paragraph'

import * as S from './styles'

interface IDaoCardInfoProps {
  icon: StaticImageData
  title: string
  color: string
  subtilte: string
  text: string
}

const DaoCardInfo = ({
  icon,
  title,
  color,
  subtilte,
  text
}: IDaoCardInfoProps) => {
  return (
    <S.DaoCardWrapper>
      <S.TitleContainer>
        <S.ImgWrapper>
          <Image src={icon} layout="responsive" />
        </S.ImgWrapper>

        <S.TitleWrapper>
          <S.Title color={color}>{title}</S.Title>

          <S.SubTitle>{subtilte}</S.SubTitle>
        </S.TitleWrapper>
      </S.TitleContainer>

      <Paragraph text={text} />
    </S.DaoCardWrapper>
  )
}

export default DaoCardInfo
