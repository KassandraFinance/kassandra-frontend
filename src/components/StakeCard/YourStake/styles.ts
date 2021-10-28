import styled from 'styled-components'
import theme from '../../../styles/theme'


export const Info = styled.div`
  color: #c4c4c4;
  display: flex;
  justify-content: space-between;

  p {
    font-size: ${theme.font.sizes.font14};
    line-height: 18px;
    text-transform: uppercase;

    margin: 24px 0;
  }

  p:last-child {
    font-weight: ${theme.font.weight.light};
  }

  span {
    display: block;

    font-weight: ${theme.font.weight.normal};

    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    margin-bottom: 8px;
  }

  span:last-child {
    font-weight: ${theme.font.weight.medium};
  }
`

export const Stake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-weight: ${theme.font.weight.light};
  text-transform: uppercase;
  p {
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
    margin: 24px 0 4px;
    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font16};
      line-height: 16px;
    }
  }

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal} !important;
  }
`