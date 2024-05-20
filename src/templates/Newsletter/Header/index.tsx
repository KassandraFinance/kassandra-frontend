import NewButton from '@/components/NewButton'
import * as S from './styles'
import Input from '@/components/Input'

export function NewsletterHeader() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.H1>Join Newsletter</S.H1>
        <S.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat adipiscing...
        </S.Text>

        <S.InputWrapper>
          <Input placeholder="Enter your email" type="email" />
          <NewButton size="huge" background="primary" text="Register Now" />
        </S.InputWrapper>
      </S.Content>
    </S.Wrapper>
  )
}
