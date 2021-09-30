import styled from 'styled-components'
import theme from '../../../styles/theme'


export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${theme.font.sizes.font18};
    line-height: 18px;
    margin: 24px 0;
    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font16};
      line-height: 16px;
    }
  }

  p:last-child {
    font-weight: ${theme.font.weight.light};
  }

  span {
    font-weight: ${theme.font.weight.normal};

    font-size: ${theme.font.sizes.font16};
    line-height: 16px;
    margin-bottom: 8px;
    display: block;
    @media (max-width: 540px) {
      font-size: 13px;
      line-height: 13px;
    }
  }

  span:last-child {
    font-weight: ${theme.font.weight.light};
  }
`

export const Stake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-weight: ${theme.font.weight.light};
  p {
    font-size: ${theme.font.sizes.font18};
    line-height: 18px;
    margin: 24px 0 4px;
    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font16};
      line-height: 16px;
    }
  }

  span {
    font-size: 13px;
  }
`