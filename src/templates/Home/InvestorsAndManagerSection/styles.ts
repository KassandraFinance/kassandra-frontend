import styled from 'styled-components'

export const Container = styled.section`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 14rem;

  padding-inline: 2.4rem;
  width: 100%;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }
`
