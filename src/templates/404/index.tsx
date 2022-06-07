import Header from '../../components/Header'
import Button from '../../components/Button'

import * as S from './styles'

const NotFound = () => (
  <>
    <Header />
    <S.Wrapper>
      <img src="/assets/images/404.svg" alt="Error 404" />
      <p>Sorry, this issue could not have been foreseen.</p>
      <p>Learn more about Kassandra</p>
      <Button
        as="a"
        href="https://kassandrafoundation.medium.com/"
        backgroundPrimary
        text="About"
      />
    </S.Wrapper>
    <S.Background>
      <img src="/assets/images/404background.svg" alt="" />
    </S.Background>
  </>
)

export default NotFound
