import styled from 'styled-components'
import theme from '../../styles/theme'

import * as ButtonStyles from '../Button/styles'

export const Container = styled.div`
  background: #1f1f1fb8;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  padding: 2.4rem;
  width: 100%;
  max-width: 55rem;
  height: min-content;

  @media (max-width: 1200px) {
    width: 50rem;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`
export const TotalPercentage = styled.h3`
  font-size: ${theme.font.sizes.font18};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.colors.snow};
`
export const TotalVotes = styled.h3`
  font-size: ${theme.font.sizes.font18};
  letter-spacing: 0.9px;
  font-weight: ${theme.font.weight.light};
  color: ${theme.colors.snow};
`

export const VoteBar = styled.div`
  background-color: #8b8b8b;
  border-radius: 0.1rem;
  display: block;

  width: 100%;
  height: 0.4rem;
  margin-bottom: 4rem;
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
  text-decoration: none;
  display: flex;
  cursor: pointer;
  transition: 0.15s;
  color: ${theme.colors.snow};
  span {
    font-size: ${theme.font.sizes.font14};
    letter-spacing: 0;
    display: flex;
    margin-right: 20px;
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
