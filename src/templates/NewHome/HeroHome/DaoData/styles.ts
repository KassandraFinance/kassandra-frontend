import styled from 'styled-components'

export const DaoData = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-top: 3.2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
  }
`
