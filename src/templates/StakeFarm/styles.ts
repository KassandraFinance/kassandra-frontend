import styled from 'styled-components'
import theme from '../../styles/theme'

export const StakeFarm = styled.section`
  max-width: 100.6rem;
  margin: 0 auto;
  padding-inline: 3rem;
`

export const StakeFarmHeader = styled.div`
  margin-bottom: 3.2rem;
`

export const StakeWithPowerVote = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`

export const NameStake = styled.div`
  p {
    color: #c4c4c4;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font16};
    letter-spacing: 0.05em;
    text-transform: uppercase;

    margin-left: 3.5rem;
  }
`

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  max-width: 100%;

  h1 {
    color: #ffffff;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font24};
    line-height: ${theme.font.sizes.font32};
  }
`
