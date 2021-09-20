import styled, { css } from 'styled-components'


export const TotalVoting = styled.div`
  ${({ theme }) => css`
    height: 93px;
    margin: 80px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    fieldset {
      border: 2px solid #FFBF00;
      font-size: ${theme.font.sizes.font18};

      display: flex;
      justify-content: space-between;

      width: 100%;
      @media (max-width: 420px) {
        font-size: ${theme.font.sizes.font16};
      }
      &:nth-child(1) {
        border-right: none;
        legend {
          margin-left: 32px;
          padding: 0 8px;
        }
        span {
          display: flex;
          align-items: center;
          margin-left: 40px;
        }
      }
      &:nth-child(2) {
        border-left: none;
        legend {
          margin-left:  auto;
          margin-right: 32px;
          padding: 0 8px;
        }
        span {
          display: flex;
          align-items: center;
          margin-left:  auto;
          margin-right: 40px;
        }
      }
    }
  `}
`
