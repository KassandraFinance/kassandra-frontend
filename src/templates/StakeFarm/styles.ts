import styled from 'styled-components'

export const StakeFarm = styled.section`
  max-width: 114rem;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }
`

export const StakeFarmHeader = styled.div`
  margin-bottom: 3.2rem;
`

export const StakeWithPowerVote = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-wrap: wrap;
  }
`
