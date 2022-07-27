import styled from 'styled-components'

export const GridStaking = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(28rem, 29.5rem));
  gap: 3rem;
  justify-content: space-between;
  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(28rem, 29.5rem));
    padding: 0 3rem;
    max-width: 70rem;
    margin: 0 auto;
  }
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, minmax(28rem, 29.5rem));
    justify-content: center;
  }
`
