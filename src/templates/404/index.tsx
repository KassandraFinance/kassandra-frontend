import Header from '../../components/Header'
import Button from '../../components/Button'

import * as S from './styles'

interface INotFoundProps {
  text?: string;
  contact?: string;
}

const NotFound = ({ text, contact }: INotFoundProps) => (
  <>
    <Header />
    <S.Wrapper>
      <img src="/assets/images/404.svg" alt="Error 404" />
      {contact ? (
        <>
          <p>{text}</p>
          <p>{contact}</p>
          <Button
            as="a"
            href="https://t.me/KassandraDAO"
            backgroundPrimary
            text="Join our Telegram"
          />
        </>
      ) : (
        <>
          {' '}
          <p>Sorry, this issue could not have been foreseen.</p>
          <p>Learn more about Kassandra</p>
          <Button
            as="a"
            href="https://kassandrafoundation.medium.com/"
            backgroundPrimary
            text="About"
          />
        </>
      )}
    </S.Wrapper>
    <S.Background>
      <img src="/assets/images/404background.svg" alt="" />
    </S.Background>
  </>
)

export default NotFound
