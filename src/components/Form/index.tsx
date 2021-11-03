import styled, { css } from 'styled-components'

import * as TextFieldStyles from '../TextField/styles'
import * as ButtonStyles from '../Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.space8} 0;
    }

    ${ButtonStyles.Wrapper} {
      /* margin: ${theme.spacings.space32} auto ${theme.spacings.space8}; */
    }
  `}
`
