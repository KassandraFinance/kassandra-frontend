import styled from 'styled-components'
import theme from '../../styles/theme'

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
  border: 1.5px solid #E8372C;
  border-radius: 10px;


  width: 500px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 21;
`

export const Top = styled.div`
  background-color: rgba(20, 20, 20, 0.9);
  border-bottom: 1px solid #e8372c;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
`

export const Attention = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  p {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: 16px;
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
  background-color: rgba(31, 31, 31, 0.23);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* height: 280px; */

  padding: 24px 0;
  p {
    text-align: center;
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.light};
    max-width: 360px;
    margin-bottom: 16px;
  }

  span {
    font-size: ${theme.font.sizes.font20};
    margin-bottom: 12px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 16px;
  button {
    background-color: transparent;
    border: 1px solid ${theme.colors.cyan};
    border-radius: ${theme.border.radius};
    color: #fff;
    font-size: ${theme.font.sizes.font18};

    width: 136px;
    height: 40px;
    margin: 0 20px;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
      background-color: ${theme.colors.cyan};
      color: ${theme.colors.darkPurple};
    }
  }
`
