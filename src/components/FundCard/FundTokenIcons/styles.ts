import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  height: 1.9rem;

  img {
    border-radius: 50%;
  }

  span {
    color: #ffffff;
    font-size: ${theme.font.sizes.font14};
    font-weight: ${theme.font.weight.light};
    line-height: 1.9rem;
  }
`
