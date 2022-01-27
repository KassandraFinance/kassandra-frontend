import styled from 'styled-components'

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
