import React from 'react'
import TextField from '../TextField'

import * as S from './styles'

interface IFormSignUpParams {
  name?: string;
  email?: string;
}

interface IOnChangeFormParam {
  key: string;
  value: string;
}
const SubscribeBanner = () => {
  const [formState, setFormState] = React.useState<IFormSignUpParams>({})
  const onChangeFormParam = ({ key, value }: IOnChangeFormParam) => {
    setFormState({ ...formState, [key]: value })
  }

  const handleSubmit = () => {
    setTimeout(() => {
      setFormState({ email: '' })
    }, 1000)
  }

  return (
    <S.Container>
      <S.TextWrapper>
        <h1>Be the first to know.</h1>
        <span>
          Subscribe to our newsletter to get early information and special
          calls.
        </span>
      </S.TextWrapper>
      <S.Input>
        <iframe
          title="a"
          name="hiddenFrame"
          width="0"
          height="0"
          style={{ display: 'none' }}
        />
        <form
          action="https://heimdall.land/subscribe/heim"
          method="POST"
          target="hiddenFrame"
          onSubmit={handleSubmit}
        >
          <TextField hidden name="user" value="Gem Hunter" />

          <TextField
            icon={<img src="/assets/fowardArrow.svg" alt="" />}
            iconPosition="right"
            name="email"
            placeholder="Email"
            type="email"
            value={formState.email}
            onChange={e =>
              onChangeFormParam({
                key: 'email',
                value: e.target.value
              })
            }
          />
        </form>
      </S.Input>
    </S.Container>
  )
}
export default SubscribeBanner
