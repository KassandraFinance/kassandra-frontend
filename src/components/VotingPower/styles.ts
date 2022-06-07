import styled from 'styled-components'
import theme from '../../styles/theme'

interface IVotingPowerProps {
  isMobile?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const VotingPower = styled.div<IVotingPowerProps>`
  padding: 1.6rem 2.4rem;
  width: 29rem;

  background: rgba(255, 255, 255, 0.04);
  border-radius: ${theme.border.radius};
  border: 0.1rem solid #fcfcfc26;

  @media (max-width: 960px) {
    margin-top: 2rem;
  }

  @media (max-width: 420px) {
    width: ${props => (props.isMobile ? 'calc(100vw - 3.2rem)' : '29rem')};
  }

  @media (max-width: 380px) {
    max-width: 29.5rem;
    width: 100%;
    min-width: 25rem;
  }
`

export const YourVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;

  span {
    display: flex;
    align-items: center;

    color: #fcfcfc;
    font-size: ${theme.font.sizes.font14};
    line-height: 1.6rem;
    font-weight: ${theme.font.weight.medium};
    text-transform: uppercase;

    div {
      margin-top: 0.2rem;
      margin-left: 0.2rem;

      z-index: 19;
    }
  }
`

export const Tooltip = styled.div`
  position: relative;
  padding: 0.1rem;

  z-index: 99;
`

export const TotalVotingPower = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;

    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.light};
    text-transform: uppercase;

    div {
      margin-top: 0.2rem;
      margin-left: 0.2rem;
      z-index: 19;
    }
  }
`
