import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.section`
  display: grid;
  grid-template-columns: minmax(1fr 2fr);
  max-width: 760px;
  margin: 40px auto;
`
export const TextWrapper = styled.div`
  max-width: 260px;
  h1{
    font-size: ${theme.font.sizes.font40};
    font-weight: ${theme.font.weight.black};
    line-height: 110%;
  }
  span{
    font-size: ${theme.font.sizes.font16};
    font-weight: ${theme.font.weight.light};
    line-height: 155%;
  }
`
