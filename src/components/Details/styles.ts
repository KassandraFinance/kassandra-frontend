import styled, { css } from 'styled-components'

export const Details = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.space24};
    width: 100%;
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-weight: ${theme.font.weight.light};
      font-size: ${theme.font.sizes.font14};
      line-height: 14px;
      margin-bottom: ${theme.spacings.space8};
    }

    .total-staked {
      margin-bottom: ${theme.spacings.space16};
    }

    a {
      color: ${theme.colors.cyan};
      font-size: ${theme.font.sizes.font14};;
      text-decoration: none;

      cursor: pointer;
      z-index: 111;
      &::after {
        display: block;
        content: '';
        background-color: ${theme.colors.cyan};
        width: 100%;
        height: 0.1px;
        box-shadow: 1px 1px 4px ${theme.colors.cyan};
      }
    }
  `}
`

export const KacyUSD = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    span {
      margin: 0;
    }

    .usd {
      font-size: 13px;
      line-height: 13px;
      margin: 4px 0 8px;
    }
  `}
`

export const Link = styled.div`
${({ theme }) => css`
  display: flex;
  align-items: center;

  margin-bottom: ${theme.spacings.space8};
    img {
      margin-left: 6px;
    }
  `}
`
