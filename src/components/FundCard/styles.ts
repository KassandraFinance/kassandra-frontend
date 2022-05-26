import styled from 'styled-components'
import theme from '../../styles/theme'

export const CardContainer = styled.div`
  width: 32.8rem;
  height: 41rem;

  background: rgba(31, 31, 31, 0.72);
  box-shadow: 0rem 0.4rem 6.9rem -1.7rem rgba(0, 0, 0, 0.51);
  -webkit-backdrop-filter: blur(14rem);
  backdrop-filter: blur(14rem);
  border-radius: 1.2rem;

  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);

    z-index: 1;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 8.8rem;
  padding: 0 2rem;

  background: #190e1d;
  border-top-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 4.8rem;
  height: 4.8rem;

  background: #211426;
  border-radius: 50%;
`

export const FundPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 0.4rem;

  font-weight: ${theme.font.weight.medium};

  h3 {
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font14};
    line-height: 100%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #c4c4c4;
  }

  span {
    font-size: ${theme.font.sizes.font24};
    line-height: 104%;
    color: #ffffff;
  }
`

export const CardBody = styled.div`
  padding: 2rem;
`

export const FundName = styled.div`
  margin-bottom: 1.6rem;

  & > h3 {
    height: 1.9rem;
    margin-bottom: 0.6rem;

    color: #ffffff;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font20};
    letter-spacing: 0.02em;
    line-height: 110%;
  }

  & > span {
    color: #c4c4c4;
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.font12};
    line-height: 100%;
    text-transform: uppercase;
  }
`

export const FundStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;

  font-weight: ${theme.font.weight.medium};
  text-transform: uppercase;
`

export const FundStatus = styled.div`
  span {
    color: #ffffff;
    font-size: ${theme.font.sizes.font18};
    line-height: 2rem;
    letter-spacing: 0.05em;
  }

  h4 {
    margin-top: 0.4rem;

    color: #c4c4c4;
    font-weight: ${theme.font.weight.medium};
    font-size: ${theme.font.sizes.font14};
    line-height: 100%;
    letter-spacing: 0.05em;
  }

  div {
    display: flex;
    gap: 0.4rem;
  }
`

export const TokenIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 2.5rem;

  p {
    font-weight: ${theme.font.weight.normal};
    color: #d3d3d3;
    font-size: 1.1rem;
    line-height: 180%;

    span {
      font-weight: ${theme.font.weight.light};
    }
  }
`
