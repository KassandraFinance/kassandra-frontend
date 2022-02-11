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

export const Header = styled.div`
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
