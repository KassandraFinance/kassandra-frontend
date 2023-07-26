import styled, { css } from 'styled-components'

export const IncentivesProgram = styled.main``

export const IncentivesProgramWrapper = styled.div`
  ${() => css`
    max-width: 144rem;
    margin: 0 auto;
    margin-top: 10.8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
      padding-inline: 1.6rem;
    }
  `}
`
