import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  height: 100vh;
  padding-inline: 2.4rem;

  @media (max-width: 576px) {
    padding-inline: 1.6rem;
  }

  .btn {
    flex-direction: row-reverse;
  }
`
