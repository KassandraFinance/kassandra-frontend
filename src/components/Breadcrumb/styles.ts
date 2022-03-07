import styled from 'styled-components'

export const Breadcrumb = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  max-width: 1140px;
  margin-top: 2rem;
  margin-bottom: 4.5rem;
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
