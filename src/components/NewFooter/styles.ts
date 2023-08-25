import styled, { css } from 'styled-components'

export const Footer = styled.div`
  ${() => css`
    max-width: 114rem;
    margin: 0 auto;

    @media (max-width: 1200px) {
      padding: 0 3rem;
    }

    @media (max-width: 960px) {
      padding: 0 1.6rem;
      margin-bottom: 6.34rem;
    }
  `}
`

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 40rem 1fr;
    align-items: start;
    width: 100%;

    @media (max-width: 991.98px) {
      grid-template-columns: 1fr;
      gap: 1.6rem;
    }

    @media (max-width: 575.98px) {
      gap: 8rem;
    }
  `}
`

export const FooterLeft = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.8rem;
    height: 100%;

    @media (max-width: 991.98px) {
      order: 1;
    }
  `}
`

export const LogoContainer = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;
  `}
`

export const Info = styled.span`
  ${() => css`
    color: var(--snow, #fcfcfc);
    font-size: 1.6909rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.9023rem; /* 112.5% */
  `}
`

export const CertikLink = styled.a`
  ${() =>
    css`
      display: flex;
      align-items: center;
      gap: 0.8571rem;
      text-decoration: none;
    `}
`

export const Certik = styled.span`
  ${() => css`
    color: var(--snow, #fcfcfc);
    text-align: center;
    font-family: Rubik;
    font-size: 1.7143rem;
    font-style: normal;
    font-weight: 700;
    line-height: 120%; /* 2.0571rem */
    letter-spacing: 0.0857rem;
  `}
`
