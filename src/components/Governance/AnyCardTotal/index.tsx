import Tippy from '@tippyjs/react'
import Image from 'next/image'
import infoGrayIcon from '../../../../public/assets/utilities/info-gray.svg'
import * as S from './styles'

interface IAnyCardProps {
  text: string;
  textTitle: string;
  TooltipText: string;
  isDolar?: boolean;
}

// eslint-disable-next-line prettier/prettier
const AnyCardTotal = ({ textTitle, text, TooltipText, isDolar }: IAnyCardProps) => {
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
      <p>
        {isDolar ? '$ ' : ''} {text}
      </p>
    </S.TotalValuesCards>
  )
}

export default AnyCardTotal
