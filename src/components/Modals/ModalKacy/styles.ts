import styled from 'styled-components'
import theme from '../../../styles/theme'

export const KacyAmount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  padding: 1.2rem;
  width: fit-content;

  color: #ffffff;
  font-weight: ${theme.font.weight.light};
  font-size: ${theme.font.sizes.font12};
  line-height: 100%;

  border: 0.1rem solid ${theme.colors.snow};
  border-radius: ${theme.border.radius};
`
