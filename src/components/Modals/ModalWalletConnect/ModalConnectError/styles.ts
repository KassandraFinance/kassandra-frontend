import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const TitleWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font16};
  line-height: 100%;
  letter-spacing: 0.05em;
`

export const Text = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 1.8rem;

  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const TextError = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;

  height: 1.8rem;

  color: #e8372c;
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font14};
  line-height: 1.8rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
`
