import theme from '@/styles/theme'
import styled, { css } from 'styled-components'

export const SubscribeInput = styled.div`
  ${() => css``}
`
export const Form = styled.form`
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: 64px;

  @media (max-width: 576px) {
    width: 100%;
  }

  input:not([value='']) ~ span,
  input:valid ~ span,
  input:focus ~ span {
    opacity: 0;
  }
`

export const Input = styled.input`
  height: 64px;
  width: 40.2rem;

  padding-block: 2.2rem;
  padding-left: 1.6rem;
  padding-right: 4.8rem;

  background: ${theme.colors.snow};
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  border-radius: 0.8rem;

  color: ${theme.colors.darkPurple};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: ${theme.font.sizes.font16};
  letter-spacing: 0.05em;

  outline: none;

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const InputTextWrapper = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;

  height: 6.4rem;

  display: flex;
  align-items: center;
  gap: 1.125rem;

  padding: 2.2rem 1.6rem;

  opacity: 1;

  pointer-events: none;

  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity;

  > span {
    height: 1.6rem;

    color: rgba(33, 20, 38, 1);
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    line-height: 130%;
    letter-spacing: 0.05em;
  }
`

export const InputBtn = styled.button`
  position: absolute;
  right: 0;

  height: 6.4rem;

  padding-inline: 1.6rem;

  background-color: transparent;
  border: none;

  cursor: pointer;
`
