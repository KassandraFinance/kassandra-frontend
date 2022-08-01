import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 576px) {
    align-items: flex-start;
  }
`

export const Title = styled.h3`
  color: ${theme.colors.amber};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font16};
  line-height: ${theme.font.sizes.font20};
  letter-spacing: 0.4em;
  text-transform: uppercase;

  @media (max-width: 576px) {
    font-size: ${theme.font.sizes.font14};
    line-height: ${theme.font.sizes.font16};
  }
`

export const Line = styled.div`
  width: 9.8rem;
  height: 0.1rem;
  margin-bottom: 5.6rem;

  background: ${theme.colors.amber};
  border-radius: 0.4rem;
`
