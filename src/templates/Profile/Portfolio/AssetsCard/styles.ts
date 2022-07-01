import styled from 'styled-components'
import theme from '../../../../styles/theme'

interface IAssetsContainerProps {
  isThreeCards: boolean;
}
// eslint-disable-next-line prettier/prettier
export const AssetsContainer = styled.div<IAssetsContainerProps>`
  display: flex;
  justify-content: ${props =>
    props.isThreeCards ? 'space-between' : 'space-around'};
  flex-wrap: wrap;
`

export const AssetsHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  border-radius: 1.2rem;
  box-shadow: -1px 2px 24px 4px rgba(0, 0, 0, 0.2);

  > span {
    display: flex;
    justify-content: center;
    height: 10rem;
    width: 29rem;

    background-color: rgba(0, 0, 0, 0.25);
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }
`

export const AssetsBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 0 2.4rem;
  width: 100%;

  background-color: #ffffff0a;
  border-bottom-left-radius: 1.2rem;
  border-bottom-right-radius: 1.2rem;

  color: #ffffff;
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: 3px;
`

export const Tooltip = styled.div`
  width: 15px;
  height: 15px;

  margin-bottom: 0.1rem;
`

export const Balance = styled.span`
  display: flex;
  /* align-items: center; */
`

export const AssetsValue = styled.span`
  padding: 1rem;

  font-size: ${theme.font.sizes.font24};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: normal;

  strong {
    margin-left: 0.4rem;

    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.medium};
    letter-spacing: 1.5px;
  }
`

export const AssetsValueDollar = styled.p`
  color: #d3d3d3;
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: normal;
`

export const LineSeperator = styled.span`
  height: 0.1rem;
  width: 4.8rem;
  margin: 1.6rem 0 1.6rem;

  background-color: #ffffff4d;
`

export const AssetsName = styled.p`
  margin-bottom: 0.8rem;

  font-size: ${theme.font.sizes.font20};
  font-weight: ${theme.font.weight.medium};
  letter-spacing: 1.5px;
`

export const AssetsSob = styled.p`
  color: #c4c4c4;
  font-size: ${theme.font.sizes.font12};
  font-weight: ${theme.font.weight.normal};
  letter-spacing: normal;
  text-transform: uppercase;
`
