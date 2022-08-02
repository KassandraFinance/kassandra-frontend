import styled from 'styled-components'

export const Container = styled.section``

export const DaoCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 8.8rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 4.8rem;
  }

  @media (max-width: 576px) {
    margin-top: 8rem;
    gap: 4rem;
  }
`

export const Line = styled.div`
  width: 0.2rem;
  height: 6.6rem;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.1rem;

  @media (max-width: 992px) {
    width: 6.6rem;
    height: 0.2rem;
  }
`
