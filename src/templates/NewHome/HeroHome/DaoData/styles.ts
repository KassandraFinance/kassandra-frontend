import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem;

  margin-top: 3.2rem;

  @media (max-width: 1295px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 693px) {
    gap: 1.6rem;
  }
`
