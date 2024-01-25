import Link from 'next/link'

import NewButton from '../NewButton'

import { ArrowRightCircle } from '@/Icons/Arrow-right-circle'

import * as S from './styles'

interface ICallToActionEndPageProps {
  text: string
  buttonText: string
  href: string
}

const CallToActionEndPage = ({
  text,
  buttonText,
  href
}: ICallToActionEndPageProps) => (
  <S.CallToActionEndPage>
    <p>{text}</p>

    <Link href={href} passHref>
      <NewButton
        as="a"
        text={buttonText}
        background="primary"
        icon={<ArrowRightCircle />}
      />
    </Link>
  </S.CallToActionEndPage>
)

export default CallToActionEndPage
