import styled from 'styled-components'
import theme from '../../styles/theme'

export const dictionary: any = {
  0: '#E8983D',
  1: '#63698C',
  2: '#B7372D',
  3: '#3D6ECC',
  4: '#E9BC50',
  5: '#AB40E1',
  6: '#CF498D',
  7: '#D54F49',
  8: '#4517AB',
  9: '#72EEE4',
  10: '#4B81EF',
  11: '#e8983d65',
  12: '#18db11',
  13: '#cc24bef7',
  14: '#68d410d6',
  15: '#e9bb5067',
  16: '#ab40e149',
  17: '#cf498c42',
  18: '#d5504949',
  19: '#10e72299',
  20: '#d4e442b0'
}

// export const dictionary: any = {
//   0: '#FBA922',
//   1: '#3DC8D8',
//   2: '#F58B52',
//   3: '#A17ACC',
//   4: '#EF6B84',
//   5: '#EC59A0',
//   6: '#7999D1',
//   7: '#DE4AC5',
//   8: '#CA5AC7',
//   9: '#4FBAD6',
//   10: '#E94CB5',
//   11: '#8D89CE',
//   12: '#F27C6A',
//   13: '#66A8D3',
//   14: '#F8993C',
//   15: '#B769C9',
//   16: '#FFBF00',
//   17: '#26DBDB'
// }

export const ChartProduct = styled.div`
  position: relative;
`

export const Selects = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  top: 20px;
  left: 20px;
  width: calc(100% - 40px);
  z-index: 10;
`

export const SelectChart = styled.div`
  display: flex;
  justify-content: space-between;

  width: 170px;

  @media (max-width: 1020px) {
    width: 130px;
  }
`

export const SelectPeriod = styled.ul`
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  display: flex;

  max-width: 100%;
`

export const InputPerid = styled.input`
  display: none;
`

interface ILabelPeriodProps {
  selectPeriod: boolean;
}

// eslint-disable-next-line prettier/prettier
export const LabelPeriod = styled.label<ILabelPeriodProps>`
  background: ${props =>
    props.selectPeriod ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  color: #fff;
  font-size: ${theme.font.sizes.font12};
  text-align: center;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 30px;
  min-width: 34px;
  padding: 10px 8px;
  
  cursor: pointer;
  @media (max-width: 1020px) {
    font-size: 10px;
  }
`

export const Input = styled.input`
  display: none;
`

interface ILabelProps {
  selected: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Label = styled.label<ILabelProps>`
  border-bottom: 2px solid ${props =>
    props.selected ? theme.colors.cyan : 'transparent'};
  color: #fff;
  font-size: ${theme.font.sizes.font14};
  text-align: center;
  text-transform: capitalize;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  height: 20px;
  padding-bottom: 4px;
  @media (max-width: 1020px) {
    font-size: ${theme.font.sizes.font12};
  }

  @media (max-width: 375px) {
    font-size: 13px;
    padding: 10px 18px;
  }
  @media (max-width: 330px) {
    font-size: ${theme.font.sizes.font12};
    padding: 8px 14px;
  }
`
