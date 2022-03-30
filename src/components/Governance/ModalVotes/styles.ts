import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.6);

  z-index: 20;

  animation: OpenModalVotes 500ms ease;
  @keyframes OpenModalVotes {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

interface IBorderGradientProps {
  modalOpen: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Container = styled.div<IBorderGradientProps>`
  position: fixed;
  top: 50%;
  left: 50%;

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  width: min(47rem, 90%);
  max-height: min-content;
  padding-right: 2.4rem;

  background-color: #1A1E2C;
  border: 0.1rem solid #FFFFFF3B;
  border-radius: 1rem;

  transform: translate(-50%, -50%);
  z-index: 21;

  animation: OpenModalVotes 500ms ease;
  @keyframes OpenModalVotes {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Close = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 1.6rem 1.6rem 0 0;

  button {
    width: 1.2rem;

    background-color: transparent;
    border: none;

    cursor: pointer;

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
  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
`
export const TotalVotes = styled.h3`
  color: ${theme.colors.snow};
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
  letter-spacing: 0.9px;
`

export const VoteBar = styled.div`
  width: 100%;
  height: 0.4rem;
  margin-top: 1.6rem;
`

export const TableContainer = styled.div`
  max-height: 30rem;
  padding: 0 2.4rem 3.2rem 3.2rem;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.5rem;
    margin-right: 2.4rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
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
  font-size: 1.6rem;
  letter-spacing: 0.8px;
`

export const UserList = styled.tbody``

export const UserData = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0 0;

  border-top: 0.1rem solid #ffffff4d;
`

export const UserAvatar = styled.td`
  margin-right: 0.8rem;
`
export const UserName = styled.td`
  display: flex;
  align-items: flex-start;
  margin: 1.6rem 0;

  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};

  img {
    border-radius: 100%;
  }
`
export const UserVote = styled.td`
  display: flex;
  margin: 1.6rem 0;

  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 2.4rem;
`
interface IVoteBarProps {
  VotingState: string;
}

// eslint-disable-next-line prettier/prettier
export const ProgressBar = styled.progress<IVoteBarProps>`
  width: 100%;
  height: 0.6rem;

  border-radius: 3rem;
  border: none;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  ::-webkit-progress-bar {
    border-radius: 2rem;
  }
  ::-webkit-progress-value {
    border-radius: 3rem;
    background: ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#E8372C'
      }
    }};
  }

  ::-moz-progress-bar {
    border-radius: 3rem;
    background: ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#E8372C'
      }
    }};
  }
`
