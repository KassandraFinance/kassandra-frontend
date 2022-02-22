import styled from 'styled-components'
import theme from '../../styles/theme'

export const BackgroundVote = styled.div`
  background: url('/assets/background-governance-page.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  box-shadow: inset 0px -20px 20px 0px #151117;
  padding-bottom: 4px;
`

export const VoteContent = styled.div`
  max-width: 1140px;
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
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`

export const OverViewLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  max-width: 36rem;
  margin-top: 1.6rem;
  margin-bottom: 10rem;

  a {
    margin: 0;
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }
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
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.grayDisabled};

  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;

  display: flex;
  align-items: center;

  margin: 0 !important;
  padding: 16px 24px;

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
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  span {
    margin-right: ${theme.spacings.space16};
  }
`
