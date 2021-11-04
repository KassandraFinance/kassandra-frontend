import styled from 'styled-components'
import theme from '../../styles/theme'

export const Details = styled.div`
  font-weight: ${theme.font.weight.light} !important;

  margin-bottom: 12px;
  width: 100%;
  z-index: 111;

`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 111;
  span {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    margin-bottom: ${theme.spacings.space8};
  }

  a {
    color: ${theme.colors.cyan};
    font-size: ${theme.font.sizes.font14};;
    text-decoration: none;

    cursor: pointer;
    z-index: 111;
    /* &:hover {
      display: block;
      content: '';
      background-color: ${theme.colors.cyan};
      width: 100%;
      height: 0.1px;
      box-shadow: 1px 1px 4px ${theme.colors.cyan};
    } */
  }
`

export const ValuesKacy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin-bottom: 4px;

  span {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    margin-bottom: ${theme.spacings.space8};
  }
`

export const KacyUSD = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  span {
    margin: 0;
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
  }

  .usd {
    font-size: 13px;
    line-height: 13px;
    margin: 4px 0 8px;
  }
`

export const Link = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacings.space8};
  img {
    margin-left: 6px;
  }
`

export const AddToken = styled.button`
  background-color: transparent;
  border: none;
  color: ${theme.colors.snow};

  display: flex;
  align-items: center;

  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.font14};
  font-weight: ${theme.font.weight.light};
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
  img {
    max-width: 14px;
    margin-right: 4px;
  }
`