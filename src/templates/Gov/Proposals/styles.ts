import styled from 'styled-components'
import theme from '../../../styles/theme'

export const BackgroundVote = styled.div`
  background: url('/assets/newbg4.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -2rem 2rem 0px #151117;
  padding-bottom: 0.4rem;
`

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

export const GovernanceProposalsContent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 710px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  max-width: 100%;
  a {
    max-width: 17.2rem;

    margin: 0;
  }

  @media (max-width: 710px) {
    margin-bottom: ${theme.spacings.space24};
  }
`
export const VotingPowerContent = styled.div`
  margin-top: 4rem;
  margin-bottom: 1.6rem;

  @media (max-width: 960px) {
    margin-top: 0;
  }

  & > div {
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 1.2rem;
  }
`

export const AllProposalsContent = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
`

export const TitleAndLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 560px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const LinkForum = styled.a`
  border: 0.1rem solid rgba(255, 255, 255, 0.04);
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.grayDisabled};

  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;

  display: flex;
  align-items: center;

  margin: 0 !important;
  padding: 1.6rem 2.4rem;

  @media (max-width: 960px) {
    font-size: ${theme.font.sizes.font14};
  }

  @media (max-width: 560px) {
    margin-top: 1.6rem !important;
  }

  @media (max-width: 440px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    font-size: 1.2rem;
  }

  &:hover {
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
  }

  span {
    margin-right: ${theme.spacings.space16};
  }
`

export const VotingPowerLeaderboard = styled.section`
  margin-top: 1.6rem;
  margin-bottom: 10rem;
`
