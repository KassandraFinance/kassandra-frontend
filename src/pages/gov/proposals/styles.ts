import styled from 'styled-components'
import theme from '../../../styles/theme'

import * as VotingPowerStyles from '../../../components/VotingPower/styles'

export const BackgroundVote = styled.div`
  background: url('/assets/background-governance-page.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -20px 20px 0px #151117;
  padding: 0 0 80px;
`

export const VoteContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`
export const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const TitleAndAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProposeAuthorCard = styled.div`
  background: #ffffff0a;
  border: 1px solid #fcfcfc26;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  max-width: 39rem;
  height: 5.6rem;
  margin-top: 1.6rem;
  padding: 2rem 1.6rem;

  p {
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.08rem;

    margin-right: 1.6rem;
  }
  span {
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    letter-spacing: 0.07rem;

    margin-left: 1.2rem;
  }
`

export const VotingPowerAndLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${VotingPowerStyles.VotingPower} {
    border: 1px solid #fcfcfc26;
    margin-bottom: 1.2rem;
  }
  a {
    text-decoration: none;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    color: ${theme.colors.snow};

    margin-right: ${theme.spacings.space8};

    display: flex;
    align-items: space-between;
    text-decoration: none;
    justify-items: center;

    transition: 0.15s;
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
    @media (max-width: 900px) {
      margin-top: 1.6rem;
    }
  }
`

export const VoteCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 100%;
  margin-top: 4rem;
  @media (max-width: 1200px) {
  }
`
