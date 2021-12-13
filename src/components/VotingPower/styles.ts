import styled from 'styled-components'
import theme from '../../styles/theme'

export const VotingPower = styled.div`
  background: rgba(255, 255, 255, 0.04);
  border-radius: ${theme.border.radius};
  padding: 16px;
  width: 260px;

  @media (max-width: 960px) {
    margin-top: 20px;
  }
`

export const YourVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.medium};
    text-transform: uppercase;

    display: flex;
    align-items: center;
    div {
      margin-top: 2px;
      margin-left: 2px;
      z-index: 19;
    }
  }
`

export const Tooltip = styled.div`
  padding: 1px;

  position: relative;
  z-index: 99;
`

export const TotalVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    text-transform: uppercase;
  }
`
