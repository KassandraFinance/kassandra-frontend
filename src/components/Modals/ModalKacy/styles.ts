import styled from 'styled-components'
import theme from '../../../styles/theme'

export const KacyAmount = styled.div`
  display: flex;
  align-items: center;

  .kacyAmount {
    padding: 1.2rem;
    width: fit-content;

    color: ${theme.colors.snow};
    font-weight: ${theme.font.weight.light};
    font-size: ${theme.font.sizes.font12};
    line-height: 100%;

    border: 0.1rem solid ${theme.colors.snow};
    border-radius: ${theme.border.radius};
    background-color: #ffffff00;

    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    transition-property: color background-color border-color;
    outline-color: ${theme.colors.amber};

    &:hover,
    &:focus {
      border-color: ${theme.colors.amber};

      svg {
        path {
          fill: none;
        }
      }
    }
  }
`
