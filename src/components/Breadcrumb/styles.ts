import styled from 'styled-components'

export const Breadcrumb = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  max-width: 114rem;
  margin-bottom: 3.6rem;
  margin-right: auto;
  margin-left: auto;

  list-style-type: none;

  @media (max-width: 1200px) {
    padding: 0 30px;
  }

  @media (max-width: 540px) {
    padding: 0 16px;
  }
`
