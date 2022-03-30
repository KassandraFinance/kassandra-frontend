import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as ButtonStyles from '../../Button/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  width: 100%;
  max-width: 55rem;
  height: min-content;

  background: #1f1f1fb8;
  border-radius: 1rem;

  @media (max-width: 670px) {
    max-width: 100%;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`
export const TotalPercentage = styled.p`
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.snow};
`
export const TotalVotes = styled.p`
  font-size: ${theme.font.sizes.font18};
  letter-spacing: 0.09rem;
  font-weight: ${theme.font.weight.light};
  color: ${theme.colors.snow};
`

export const VoteBar = styled.div`
  display: block;
  width: 100%;
  height: 0.4rem;
  margin-bottom: 4rem;

  background-color: #8b8b8b;
  border-radius: 0.1rem;
`

export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${ButtonStyles.Wrapper} {
    width: min(27.3rem, 50%);
  }
`
export const Link = styled.a`
  display: flex;

  text-decoration: none;
  color: ${theme.colors.snow};

  cursor: pointer;
  transition: 0.15s;

  span {
    display: flex;
    margin-right: 2rem;

    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0;
  }
  svg {
    margin-left: ${theme.spacings.space8};
  }

  &:hover {
    color: ${theme.colors.cyan};

    > svg {
      path {
        stroke: ${theme.colors.cyan};
      }
    }
  }
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

  /* animation: progressBar 1.5s ease-in-out;
  @keyframes progressBar {
    0% { left:0; width: 0; }
    100% { left:0; width: 100%; }
  } */

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
        return '#0f0'
      } else {
        return '#f00'
      }
    }};
  }
`
