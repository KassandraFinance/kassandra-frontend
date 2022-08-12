import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Info = styled.div`
  display: flex;
  justify-content: space-between;

  color: #bdbdbd;

  p {
    margin: 2.4rem 0;

    font-size: ${theme.font.sizes.font14};
    line-height: 1.8rem;
    text-transform: uppercase;
  }

  p:last-child {
    font-weight: ${theme.font.weight.light};
  }

  span {
    display: block;
    margin-bottom: 0.8rem;

    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
  }

  span:last-child {
    font-weight: ${theme.font.weight.medium};
  }

  a {
    color: ${theme.colors.snow};
    text-decoration: none;

    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font14};
    transition: 300ms;

    :hover {
      color: ${theme.colors.cyan} !important;
    }
  }
`

export const Stake = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-weight: ${theme.font.weight.light};
  text-transform: uppercase;

  p {
    display: flex;
    margin: 2.4rem 0 0.4rem;

    color: #fff;
    line-height: ${theme.font.sizes.font14};
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium} !important;

    @media (max-width: 540px) {
      font-size: ${theme.font.sizes.font16};
      line-height: 1.6rem;
    }
  }

  span {
    font-size: ${theme.font.sizes.font12};
    font-weight: ${theme.font.weight.normal} !important;
  }
`

export const Symbol = styled.span`
  margin-left: 0.4rem;

  color: #bdbdbd !important;
  font-size: ${theme.font.sizes.font14} !important;
  font-weight: ${theme.font.weight.medium} !important;
`
