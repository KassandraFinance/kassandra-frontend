import styled from 'styled-components'
import theme from '../../../styles/theme'

export const VoteContent = styled.div`
  width: 100%;
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
  border: 0.1rem solid rgba(255, 255, 255, 0.04);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  color: ${theme.colors.grayDisabled};

  line-height: 115%;
  font-size: ${theme.font.sizes.font16};
  text-decoration: none;

  display: flex;
  align-items: center;

  margin: 0 !important;
  padding: 1.6rem 2.4rem;

  transition: border ${theme.transition.default};

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
    border: 0.1rem solid rgba(255, 255, 255, 0.5);
  }

  span {
    margin-right: ${theme.spacings.space8};
  }
`
