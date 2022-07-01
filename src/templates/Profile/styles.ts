import styled from 'styled-components'

export const ProfileContainer = styled.section`
  max-width: 114rem;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 0 3rem;
  }

  @media (max-width: 540px) {
    padding: 0 1.6rem;
  }
`

export const TotalValuesCardsContainer = styled.div`
  display: flex;

  width: 100%;
  margin-top: 3.2rem;
  gap: 3.2rem;

  @media (max-width: 730px) {
    flex-direction: column;
  }
`
