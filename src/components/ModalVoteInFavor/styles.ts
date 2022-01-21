import styled, { css } from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 20;
`

interface IBorderGradientProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<IBorderGradientProps>`
  display: ${props => (props.modalOpen ? 'block' : 'none')};
  background: #1A1E2C;
  border: 1px solid #FFFFFF3B;
  border-radius: 10px;

  width: 472px;
  max-height: 569px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;

  @media(max-width: 440px){
    width: 380px;
  }
  @media(max-width: 380px){
    width: 360px;
  }
  @media(max-width: 360px){
    width: 320px;
  }
  @media(max-width: 320px){
    width: 300px;
  }
`
export const ModalTop = styled.div``
export const TotalPercentage = styled.h3``
export const TotalVotes = styled.h3``
export const VoteBar = styled.div``
export const ModalContent = styled.div``
export const ModalContentTitle = styled.div``
export const AddressTotal = styled.h4``
export const Votes = styled.h4``
export const UserList = styled.ul``
export const UserName = styled.li``
export const UserVote = styled.li``
