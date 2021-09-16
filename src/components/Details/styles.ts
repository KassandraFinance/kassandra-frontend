import styled from 'styled-components'

export const Details = styled.div`
  margin-top: 24px;
  width: 100%;

`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 8px;
  }

  .total-staked {
    margin-bottom: 16px;
  }

  a {
    color: #26DBDB;
    font-size: 14px;
    text-decoration: none;

    cursor: pointer;
    z-index: 111;
    &::after {
      display: block;
      content: '';
      background-color: #26DBDB;
      width: 100%;
      height: 0.8px;
      box-shadow: 1px 1px 4px #26DBDB;
    }
  }
`

export const KacyUSD = styled.div`
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
`

export const Link = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;
  img {
    margin-left: 6px;
  }
`