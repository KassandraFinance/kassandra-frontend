import styled from 'styled-components'

export const KacySectionContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 8rem;

  margin-top: 31.8rem;

  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 7.4rem;

    margin-top: 23.8rem;
  }

  @media (max-width: 576px) {
    margin-top: 12.4rem;
  }
`
