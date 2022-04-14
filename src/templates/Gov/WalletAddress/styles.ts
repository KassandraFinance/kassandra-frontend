import styled from 'styled-components'
import theme from '../../../styles/theme'

export const BackgroundVote = styled.div`
  background: url('/assets/newbg4.svg');
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
  margin-bottom: 10rem;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`

export const TitleAndLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 6.4rem;

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
    justify-content: center;
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
