import styled, { css } from 'styled-components'
import { device } from '../../../styles/theme'

export const SignUp = styled.div``

export const SignUpContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const SignUpHeader = styled.div`
  ${({ theme }) => css`
    h4 {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font20};
      line-height: 3.2rem;
      color: ${theme.colors.dark95};
    }

    p {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4em;
      color: ${theme.colors.dark95};
    }
  `}
`

export const SignUpInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    padding-bottom: 4rem;
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: 5rem;

    transition: color ${theme.transition.default};

    p {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font12};
      color: ${theme.colors.dark95};
      line-height: 2.4em;

      a {
        text-decoration: underline;
      }
    }
  `}
`

export const Input = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;

    input {
      height: 6rem;
      width: 100%;
      padding: 1.8rem 2rem;

      background-color: ${theme.colors.snow};
      border-radius: 8px;
      border: none;

      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4em;

      ::placeholder {
        color: rgba(31, 31, 31, 0.5);
      }
    }

    .input-btn {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6rem;
      letter-spacing: 0.042rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${device.mobile} {
        height: 6rem;
      }
    }

    @media ${device.mobile} {
      flex-direction: column;
    }
  `}
`
