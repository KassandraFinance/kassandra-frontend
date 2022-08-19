import styled from 'styled-components'
import theme from '../../../../styles/theme'

export const KacyCardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: fit-content;
`

export const KacyValue = styled.span`
  color: ${theme.colors.snow};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.sizes.font24};
  line-height: 2.5rem;
`

export const Title = styled.h6`
  color: ${theme.colors.magenta};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font12};
  line-height: ${theme.font.sizes.font12};
  letter-spacing: 0.22em;
  text-transform: uppercase;
`

export const Line = styled.div`
  width: 0.1rem;
  height: 5.6rem;

  background: rgba(255, 255, 255, 0.3);
  border-radius: 0.4rem;

  &:last-of-type {
    display: none;
  }

  @media (max-width: 576px) {
    &:nth-of-type(4) {
      display: none;
    }
  }
`
