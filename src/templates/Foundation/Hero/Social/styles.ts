import styled from 'styled-components'

export const Social = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 992px) {
    justify-content: center;
  }
`

export const Li = styled.li``

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 4rem;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;

  text-decoration: none;
`
