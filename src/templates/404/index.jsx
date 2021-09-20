import Link from 'next/link'
import * as S from './styles'
import Button from '../../components/Button'

const NotFound = () => (
  <S.Wrapper>
    <img src="assets/404.svg" alt="" />
    <p>Sorry, this issue could not have been foreseen.</p>
    <p>Learn more about Kassandra</p>
    <Link href="#">
      <Button backgroundPrimary text="About" />
    </Link>
  </S.Wrapper>
)

export default NotFound
