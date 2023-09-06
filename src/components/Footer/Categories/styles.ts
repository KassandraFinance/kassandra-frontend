import styled, { css } from 'styled-components'

export const Categories = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    row-gap: 8rem;

    @media (min-width: 576px) {
      grid-template-columns: repeat(4, fit-content(6rem));
      justify-content: space-between;
    }
  `}
`

export const Categorie = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.4rem;
  `}
`

export const CategorieTitle = styled.span`
  ${() => css`
    width: fit-content;

    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    white-space: nowrap;
  `}
`

export const CategorieValueContainer = styled.ul`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    width: fit-content;

    a {
      text-decoration: none;
    }
  `}
`

export const CategorieValue = styled.a`
  ${() => css`
    width: fit-content;

    color: var(--dark-text, #8c8c8c);
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 18px; /* 112.5% */
    white-space: nowrap;

    transition: color 300ms;

    cursor: pointer;

    &:hover {
      color: #ffffff;
    }

    @media (min-width: 576px) {
      font-size: 14px;
      font-weight: 400;
      line-height: normal;
    }
  `}
`
