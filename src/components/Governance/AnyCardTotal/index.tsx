import Tippy from '@tippyjs/react'
import Image from 'next/image'
import infoGrayIcon from '../../../../public/assets/utilities/info-gray.svg'
import * as S from './styles'

interface IAnyCardProps {
  text: string;
  textTitle: string;
  TooltipText: string;
}

const AnyCardTotal = ({ textTitle, text, TooltipText }: IAnyCardProps) => {
  return (
    <S.TotalValuesCards>
      <span>
        {textTitle}
        <Tippy content={TooltipText}>
          <span>
            <Image
              src={infoGrayIcon}
              alt="Explanation"
              width={16}
              height={16}
            />
          </span>
        </Tippy>
      </span>
      <p>{text}</p>
    </S.TotalValuesCards>
  )
}

export default AnyCardTotal
