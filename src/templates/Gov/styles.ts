import styled from 'styled-components'
import theme from '../../styles/theme'

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

export const TitleAndLinkContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LinkForum = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.gray};
  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;

  padding: 16px 24px;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
`
