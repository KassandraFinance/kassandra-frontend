import styled from 'styled-components'

export const Container = styled.section``

export const ManagerCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  margin-top: 5.6rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3.2rem;
  }
`
