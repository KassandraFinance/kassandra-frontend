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

  width: min(470px, 90%);
  max-height: min-content;
  padding-right: 2.4rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.6rem 1.6rem 0 0;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 1.2rem;
    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`
export const ModalHeaderContainer = styled.div``
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 2.4rem 3.2rem 3.2rem;
`

export const TotalPercentageAndVotes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const TotalPercentage = styled.h3`
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.snow};
`
export const TotalVotes = styled.h3`
  font-size: ${theme.font.sizes.font18};
  letter-spacing: 0.9px;
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.snow};
`
export const VoteBar = styled.div`
  background-color: #8b8b8b;
  border-radius: 0.1rem;
  display: block;

  margin-top: 1.6rem;
  width: 100%;
  min-width: 100px;
  height: 0.4rem;
`
export const VotesFavor = styled.div`
  background-color: #0f0;
  float: left;
  padding: 0px;
  margin: 0px;
  width: 0px;
  height: 10px;
`
export const VotesAgainst = styled.div`
  background-color: #f00;
  float: left;
  padding: 0px;
  margin: 0px;
  width: 0px;
  height: 10px;
`

export const TableContainer = styled.div`
  padding: 0 2.4rem 3.2rem 3.2rem;
  max-height: 30rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
    margin-right: 2.4rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Thead = styled.thead`
  display: flex;
  justify-content: space-between;

  padding: 0 2.9rem 0 3.2rem;
`
export const Th = styled.th`
  font-size: 16px;
  letter-spacing: 0.8px;
`

export const UserList = styled.tbody``

export const UserData = styled.li`
  border-top: 1px solid #ffffff4d;

  margin: 1.2rem 0 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserAvatar = styled.td`
  margin-right: 0.8rem;
`
export const UserName = styled.td`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  display: flex;
  align-items: flex-start;
  margin: 1.6rem 0;
`
export const UserVote = styled.td`
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  display: flex;
  margin: 1.6rem 0;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2.4rem;
`
