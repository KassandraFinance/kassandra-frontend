import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.section``

export const PoolCardContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 8rem;

  @media (min-width: 960px) {
    > div:nth-child(odd) {
      flex-direction: row-reverse;
    }
  }
`
