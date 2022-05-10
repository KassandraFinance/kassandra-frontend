import styled from 'styled-components'
import theme from '../../../styles/theme'

export const PoweredBy = styled.div`
  margin: ${theme.spacings.space48} 0;
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

export const Line = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  width: 100%;
  height: 1px;
  margin: ${theme.spacings.space24} 0;
`

export const PartnersContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    display: block;
    padding-right: 30px;

    &:last-child {
      padding-right: 0;
    }
  }
`
