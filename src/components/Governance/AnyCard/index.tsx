import Link from 'next/link'

import Button from '../../Button'

import * as S from './styles'

interface IAnyCardProps {
  text: string;
  button: boolean;
}

const AnyCard = ({ text, button }: IAnyCardProps) => {
  return (
    <S.BackgroundCard>
      <p>{text}</p>
      {button && (
        <Link href="/farm" passHref>
          <Button backgroundSecondary size="large" as="a" text="Stake/Farm" />
        </Link>
      )}
    </S.BackgroundCard>
  )
}

export default AnyCard
