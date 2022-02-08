import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`

interface IModalContainerProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background-color: rgba(31, 31, 31, 0.8);
  border: 1.5px solid #FFFFFF40;
  border-radius: 10px;

  width: 44rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 99;

  @media (max-width: 440px) {
    width: 33rem;
  }

  @media (max-width: 340px) {
    max-width: 100%;
  }
`

export const Top = styled.div`
  background-color: #1f1f1fb8;
  border-bottom: 1px solid #ffffff40;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.4rem;

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
  background-color: transparent;
  border: none;

  color: #fff;
  font-size: ${theme.font.sizes.font20};

  padding: 2px;

  cursor: pointer;
`

export const Content = styled.div`
  background: #1f2937;
  border-radius: 0 0 10px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const WrapperIconsBackGround = styled.button`
  background: #1f1f1fb8;
  border-radius: 1rem;
  border: none;

  display: flex;
  align-items: center;

  margin-top: 2.4rem;
  margin-right: 2.4rem;
  margin-left: 2.4rem;
  padding: 0.1rem;

  @media (max-width: 440px) {
    margin-top: 1.6rem;
    margin-right: 1.6rem;
    margin-left: 1.6rem;
  }

  &:last-child {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  &.disabled {
    filter: grayscale(1);
  }

  &:hover,
  &:focus {
    background: linear-gradient(0deg, #ffbf00 -0.02%, #e843c4 99.99%);
  }

  &:focus {
    outline: none;
  }
`

export const WrapperIcons = styled.div`
  background: #1f1f1f;
  border: none;
  border-radius: 1rem;

  display: flex;
  align-items: center;

  padding-top: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 1.6rem;

  cursor: pointer;
  position: relative;
  z-index: 2;

  @media (max-width: 440px) {
    padding-left: 1.6rem;
  }

  img {
    margin: 0 1.6rem;
    @media (max-width: 440px) {
      display: none;
    }
  }
`

export const Option = styled.div`
  color: ${theme.colors.snow};
  font-family: ${theme.font.family};
  text-align: left;
  letter-spacing: 0.05rem;

  h3 {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.bold};

    margin-bottom: ${theme.spacings.space8};
  }
  p {
    line-height: ${theme.font.sizes.font18};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};

    @media (max-width: 440px) {
      font-size: ${theme.font.sizes.font12};
    }
  }
`
