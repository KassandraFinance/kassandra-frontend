import styled from 'styled-components'

export const VoteContent = styled.div`
  max-width: 114rem;
  margin: 0 auto;

  a {
    display: flex;
    justify-content: center;
    margin-top: 3.2rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10rem;
  }

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 540px) {
    padding: 0 1.6rem;
  }
`

export const VotingPowerLeaderboard = styled.section`
  margin-top: 1.6rem;
  margin-bottom: 10rem;
`
