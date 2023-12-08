import Link from 'next/link'

import Button from '../Button'

import * as S from './styles'

interface ICardProps {
  title: string
  href: string
  buttonText: string
}

const Card = ({ buttonText, href, title }: ICardProps) => {
  return (
    <S.Card>
      <S.paragraph>{title}</S.paragraph>

      <Link href={href} passHref>
        <a target="_blank">
          <Button text={buttonText} backgroundPrimary className="btn-link" />
        </a>
      </Link>
    </S.Card>
  )
}

export default Card
