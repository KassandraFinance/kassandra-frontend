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
  transform: translate(-50%, -50%);

  display: ${props => (props.modalOpen ? 'block' : 'none')};
  width: min(47rem, 90%);
  max-height: min-content;

  background-color: #1A1E2C;
  border: 0.1rem solid #FFFFFF3B;
  border-radius: 1rem;

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
export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.2rem 4.2rem 3.2rem 3.2rem;
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
    box-shadow: 0 0 1rem ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#EA3224'
      }
    }};;
    background: ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#EA3224'
      }
    }};
  }

  ::-moz-progress-bar {
    border-radius: 3rem;
    box-shadow: 0 0 1rem ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#EA3224'
      }
    }};;
    background: ${props => {
      if (props.VotingState === 'For') {
        return '#2CE878'
      } else {
        return '#EA3224'
      }
    }};
  }
`

interface ITableContainerProps {
  showShadow: boolean;
}

// eslint-disable-next-line prettier/prettier
export const TableContainer = styled.table<ITableContainerProps>`
  width: 100%;
  padding: 0 3.2rem 3.2rem 3.2rem;
  position: relative;

  &::after {
    content: '';
    ${props =>
      props.showShadow
        ? `
      position: absolute;
      bottom: 32px;

      width: calc(100% - 16%);
      height: 90px;

      background: linear-gradient(rgba(255, 255, 255, 0), #1a1e2c 60%) 0 100%,
        radial-gradient(
            farthest-side at 50% 100%,
            rgba(0, 0, 0, 0.2),
            rgba(0, 0, 0, 0)
          )
          0 100%;
      background-repeat: no-repeat;
      background-size: 100% 45px, 100% 20px;
    `
        : ``}
  }
`

export const Thead = styled.thead``
export const Tr = styled.tr`
  display: flex;
  justify-content: space-between;

  margin-right: 1.2rem;
  margin-bottom: 1.2rem;
`

export const Th = styled.th`
  font-size: 1.6rem;
  letter-spacing: 0.8px;
`

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 30rem;
  overflow-y: auto;
  padding-right: 0.8rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
`

export const UserData = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

  border-top: 0.1rem solid #ffffff4d;
`

export const UserName = styled.td`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

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
