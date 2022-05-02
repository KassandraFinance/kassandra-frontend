import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.7);

  z-index: 20;

  animation: OpenModalBuyKacy 500ms ease;
  @keyframes OpenModalBuyKacy {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

interface IModalBuyKacyProps {
  modalOpen: boolean;
}

// prettier-ignore
export const ModalBuyKacyContainer = styled.div<IModalBuyKacyProps>`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};

  background: #1F2937;
  border-radius: 1.2rem;

  z-index: 21;

  animation: OpenModalBuyKacy 500ms ease;
  @keyframes OpenModalBuyKacy {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const HeaderModalBuyKacy = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 2.4rem;

  background-color: rgba(31, 31, 31, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;

  strong {
    color: #fcfcfc;
    font-weight: ${theme.font.weight.medium};
    font-size: 1.6rem;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const BodyModalBuyKacy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: 7rem;

  padding-top: 3.2rem;
  padding-right: 4.8rem;
  padding-bottom: 3.2rem;
  padding-left: 4.8rem;
`

export const ButtonModalBuyKacy = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  #ImageContent {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 6.4rem;
    height: 6.4rem;

    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;

    transition: border 0.3s ease-in-out;

    :hover {
      border: 0.1rem solid rgba(255, 255, 255, 0.25);
    }
  }

  p {
    margin-top: 1.6rem;

    color: #fcfcfc;
    font-weight: ${theme.font.weight.normal};
    font-size: 1.2rem;
  }
`
