import styled from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: transparent;

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

  background-color: #372B3B;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  
  
  position: fixed;
  bottom: 76px;
  right: 16px;
  padding: 4px 8px;
  z-index: 20;
  `

export const SocialIcon = styled.a`
  text-decoration: none;

  display: flex;
  padding: 6px 0;
  .medium {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: block;
  }
  img {
    width: 18px;
  }

  span {
    color: ${theme.colors.snow};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font16};

    margin-left: 8px;
  }
`
