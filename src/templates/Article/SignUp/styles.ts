import styled, { css } from 'styled-components'
import { device } from '../../../styles/theme'

export const SignUp = styled.div``

export const SignUpContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const SignUpHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    h4 {
      font-weight: ${theme.font.weight.bold};
      font-size: ${theme.font.sizes.font20};
      color: ${theme.colors.snow};
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.04rem;
    }

    p {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4em;
      color: ${theme.colors.snow};
      font-style: normal;
      letter-spacing: 0.032rem;
    }
  `}
`

export const SignUpInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding-bottom: 4rem;
    border-bottom: 1px solid ${theme.colors.gray};
    margin-bottom: 5rem;

    transition: color ${theme.transition.default};

    p {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font12};
      color: ${theme.colors.snow};
      font-style: normal;
      line-height: 1.6rem;
      letter-spacing: 0.036rem;

      a {
        text-decoration: underline;
        color: ${theme.colors.snow};
      }
    }
  `}
`

export const Input = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1.6rem;
    justify-content: center;

    input {
      height: 6.4rem;

      background-color: ${theme.colors.snow};

      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font16};
      line-height: 2.4em;
    }

    .input-btn {
      bottom: 0;
      top: 0;
      border: none;
      background: none;
      position: absolute;
      right: 0;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.6rem;
      letter-spacing: 0.042rem;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-right: 1.6rem;

      @media ${device.mobile} {
        height: 6rem;
      }
    }

    @media ${device.mobile} {
      flex-direction: column;
    }
  `}
`
