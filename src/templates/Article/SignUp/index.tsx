import Button from '@/components/Blog/Button'
import { MailIcon } from '@/Icons/Mail'

import useSubscribe from '@/hooks/useSubscribe'

import * as S from './styles'

const SignUp = () => {
  const { handleSubmitWithToast } = useSubscribe()

  return (
    <S.SignUp>
      <S.SignUpContent
        onSubmit={event =>
          handleSubmitWithToast({ event, sendInBlueListId: 'general' })
        }
      >
        <S.SignUpHeader>
          <h4>Sign up to keep up with the latest articles</h4>
          <p>
            Want to get some emails every time we drop something new? Sign right
            on up.
          </p>
        </S.SignUpHeader>
        <S.SignUpInput>
          <S.Input>
            <input placeholder="degen@crypto.xyz" type="email" name="email" />
            <Button className="input-btn" variant="primary" size="large">
              Subscribe
            </Button>
          </S.Input>
          <p>
            By signing up, you will create a Heimdall account if you don’t
            already have one. Review our{' '}
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>{' '}
            for more information about our privacy practices.{' '}
          </p>
        </S.SignUpInput>
      </S.SignUpContent>
    </S.SignUp>
  )
}

export default SignUp
