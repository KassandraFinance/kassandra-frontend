import Link from 'next/link'

import Button from '../Button'

import * as S from './styles'

interface IAnyCardProps {
  text: string;
  button?: boolean;
  buttonText?: string;
  link?: string;
  button2?: boolean;
  onClick?: () => void;
}

const AnyCard = ({
  text,
  button,
  buttonText,
  link = '',
  button2,
  onClick
}: IAnyCardProps) => {
  return (
    <S.BackgroundCard>
      <p>{text}</p>
      {button && (
        <Link href={link} passHref>
          <a>
            <Button backgroundSecondary size="large" text={buttonText} />
          </a>
        </Link>
      )}
      {button2 && (
        <Button
          backgroundSecondary
          size="large"
          text={buttonText}
          onClick={onClick}
        />
      )}
    </S.BackgroundCard>
  )
}

export default AnyCard
