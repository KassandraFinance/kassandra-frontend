import styled from 'styled-components'

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 18px;
    line-height: 18px;
    margin: 24px 0;
    @media (max-width: 540px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  p:last-child {
    font-weight: 300;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 8px;
    display: block;
    @media (max-width: 540px) {
      font-size: 13px;
      line-height: 13px;
    }
  }

  span:last-child {
    font-weight: 300;
  }
`