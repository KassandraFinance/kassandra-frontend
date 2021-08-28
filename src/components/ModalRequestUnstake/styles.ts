import styled from 'styled-components'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9;
`

interface IModalContainerProps {
  modalOpen: boolean
}

export const ModalContainer = styled.div<IModalContainerProps>`
  display: ${(props) => props.modalOpen ? "block" : "none" };

  border: 2px solid #FFBF00;
  background-color: #000;

  width: 500px;
  height: 370px;


  position: fixed;
  top: 50%;
  left: 50%;

  margin-left: -250px;
  margin-top: -185px;

  z-index: 10;
`

export const Top = styled.div`
  border-bottom: 2px solid #FFBF00;

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
    font-size: 24px;
    margin-left: 16px;
  }
`

export const Close = styled.button`
  background-color: transparent;
  border: none;

  color: #fff;
  font-size: 20px;
  padding: 2px;

  cursor: pointer;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  /* height: 280px; */

  padding: 24px 0;
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 300;
    max-width: 340px;
    margin-bottom: 12px;
  }

  span {
    font-size: 20px;
    margin-bottom: 12px;
  }
`

export const ButtonContainer = styled.div`
  button {
    background-color: transparent;
    border: 1px solid #26DBDB;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;

    width: 136px;
    height: 40px;
    margin: 0 8px;
    transition-duration: 300ms;
    cursor: pointer;
    &:hover {
      background-color: #26DBDB;
      color: #211426;
    }
  }
`