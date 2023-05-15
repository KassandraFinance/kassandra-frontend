import Header from '../../components/Header'
import Button from '../../components/Button'

import * as S from './styles'

interface INotFoundProps {
  text?: string
  contact?: string
}

const NotFound = ({ text, contact }: INotFoundProps) => (
  <>
    <Header />
    <S.Wrapper>
      {contact ? (
        <>
          <p style={{ fontSize: '24px', fontWeight: 500 }}>{text}</p>
          <p>{contact}</p>
          <Button
            as="a"
            href="https://t.me/KassandraDAO"
            size="huge"
            backgroundPrimary
            text="Join our Telegram"
          />
        </>
      ) : (
        <>
          {' '}
          <img src="/assets/images/404.svg" alt="Error 404" />
          <p>Sorry, this issue could not have been foreseen.</p>
          <p>Learn more about Kassandra</p>
          <Button
            as="a"
            href="https://kassandrafoundation.medium.com/"
            size="huge"
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
