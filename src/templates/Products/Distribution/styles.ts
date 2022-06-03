import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Distribution = styled.div`
  margin: ${theme.spacings.space48} 0;
`

export const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  width: 100%;
  height: 1px;
  margin: ${theme.spacings.space24} 0;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  h2 {
    font-size: ${theme.font.sizes.font18};
    font-weight: ${theme.font.weight.bold};
    margin-left: ${theme.spacings.space16};
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;

  overflow: hidden;
  text-indent: initial;

  border-spacing: 0;
  -webkit-border-horizontal-spacing: 0;
  -webkit-border-vertical-spacing: 0;

  font-size: ${theme.font.sizes.font14};

  width: 100%;
  thead {
    background-color: rgba(0, 0, 0, 0.25);
  }
  tbody {
    background-color: rgba(255, 255, 255, 0.04);
    max-height: 100%;
  }
  @media (max-width: 768px) {
    display: block;
    overflow: auto;
  }
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  height: 38px;
  margin: 16px 0;
  @media (max-width: 768px) {
    min-width: 690px;

    height: 28px;
    gap: 16px;
  }

  @media (max-width: 640px) {
    min-width: 580px;
  }
`

export const Th = styled.th`
  font-weight: 400;
  letter-spacing: 0.5px;

  @media (max-width: 660px) {
    font-size: 15px;
  }
`
interface ITdProps {
  change24h?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Td = styled.td<ITdProps>`
  font-weight: ${theme.font.weight.light};
  letter-spacing: .5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const BalanceCoin = styled.span`
  color: ${theme.colors.grayDisabled};
  font-size: ${theme.font.sizes.font12};
`

interface ICoinProps {
  width?: number;
  change24h?: boolean;
  negative?: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Coin = styled.span<ICoinProps>`
  ${props =>
    props.change24h && {
      color: `${props.negative ? '#EB5757' : '#6FCF97'}`
    }};

  display: flex;
  align-items: center;
  text-align: center;
  width: ${props => props.width}px;
  img {
    max-width: 24px;
    margin-right: 16px;
    margin-left: 8px;
    border-radius: 50%;
  }

  span {
    font-weight: 400;
  }
`
