import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);
`

interface IModalContainerProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ModalContainer = styled.div<IModalContainerProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 44rem;
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background-color: rgba(31, 31, 31, 0.8);
  border: 1.5px solid #FFFFFF40;
  border-radius: 10px;

  @media (max-width: 440px) {
    width: 33rem;
  }

  @media (max-width: 340px) {
    max-width: 100%;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem;

  background-color: #1f1f1fb8;
  border-bottom: 1px solid #ffffff40;
  border-radius: 10px 10px 0 0;

  @media (max-width: 440px) {
    padding: 1.6rem;
  }

  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.8px;

    @media (max-width: 440px) {
      font-size: ${theme.font.sizes.font16};
    }
  }
`

export const Close = styled.button`
  padding: 2px;

  color: #fff;
  font-size: ${theme.font.sizes.font20};

  background-color: transparent;
  border: none;

  cursor: pointer;
`

// ======== Delegate and Undelegate ========

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.4rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};

  background: #1f2937;
  border-radius: 0 0 10px 10px;

  @media (max-width: 440px) {
    padding: 1.6rem;
  }

  p {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font18};
  }

  > span {
    margin-top: ${theme.spacings.space24};
    margin-bottom: ${theme.spacings.space16};

    font-size: ${theme.font.sizes.font14};
  }
`

interface ISelectProps {
  optionsOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Select = styled.button<ISelectProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacings.space24} ${theme.spacings.space16};

  background-color: #1b1d22;
  border: 1px solid #ffffff15;

  cursor: pointer;

  span {
    color: ${theme.colors.snow};
    font-size: ${theme.font.sizes.font14};
    text-align: left;
  }

  img {
    transform: ${props => (props.optionsOpen ? 'rotate(180deg)' : null)};
    transition-duration: 250ms;
  }
`

interface IError {
  error: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Error = styled.span<IError>`
  visibility: ${props => (props.error ? 'visible' : 'hidden')};
  color: ${theme.colors.red};
  margin-top: 8px !important;
  margin-bottom: 0 !important;
`

interface IInput {
  error: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Input = styled.input<IInput>`
  width: 100%;
  height: 4.6rem;
  padding: ${theme.spacings.space16};

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  font-family: ${theme.font.family};
  letter-spacing: 0.05em;

  background-color: #ffffff15;
  border: 1px solid;
  border-color: ${props => (props.error ? theme.colors.red : '#ffffff15')};

  @media (max-width: 440px) {
    font-size: ${theme.font.sizes.font12};

    height: 3.6rem;
  }

  &::placeholder {
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0.05em;
  }

  &:focus {
    outline: 1px solid ${props =>
      props.error ? theme.colors.red : theme.colors.snow};
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  margin-top: ${theme.spacings.space18};
  margin-bottom: ${theme.spacings.space24};

  @media (max-width: 440px) {
    margin-top: ${theme.spacings.space32};
    margin-bottom: ${theme.spacings.space16};

    button {
      font-size: ${theme.font.sizes.font14};
      height: 3.8rem;
      padding: ${theme.spacings.space8};
    }
  }
`

export const Link = styled.div`
  margin: 0 auto;

  @media (max-width: 440px) {
    span {
      font-size: ${theme.font.sizes.font12};
    }
  }
`

export const BackdropSelect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;

  width: 100%;
  height: 100%;

  background-color: transparent;
`

export const Selected = styled.div`
  top: 29.3rem;
  left: 2.4rem;
  z-index: 999;

  @media (max-width: 440px) {
    top: 28.4rem;
    left: 1.6rem;
  }
`

interface IModalProps {
  isOpenOption?: boolean;
  undelegate?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Modal = styled.div<IModalProps>
  `
  position: absolute;
  top: ${props => (props.undelegate ? '25.7rem' : '29.3rem')};
  left: 2.4rem;
  z-index: 999;

  display: ${props => (props.isOpenOption ? 'block' : 'none')};

  @media (max-width: 440px) {
    top: ${props => (props.undelegate ? '28.2rem' : '28.4rem')};
    left: 1.6rem;
  }
`

export const Option = styled.div`
  width: 38.9rem;
  padding-top: ${theme.spacings.space16};
  padding-right: ${theme.spacings.space40};
  padding-bottom: ${theme.spacings.space16};
  padding-left: ${theme.spacings.space16};
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${theme.colors.snow};

  background-color: #1b1d22;
  border: 1px solid #ffffff15;

  cursor: pointer;

  @media (max-width: 440px) {
    width: 29.5rem;
  }

  &:hover {
    background-color: #3f1a38;
  }
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 2.4rem;
    @media (max-width: 440px) {
      display: none !important;
    }
  }
`

export const WithdrawDelay = styled.div`
  margin-left: 1.2rem;

  @media (max-width: 440px) {
    margin-left: 0;
  }

  p {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
    text-transform: uppercase;
  }

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.05em;

    margin-top: 0.4rem;
  }
`

export const VotingPower = styled.div`
  text-align: right;
  p {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
  }

  span {
    margin-top: 0.4rem;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.05em;
  }
`
