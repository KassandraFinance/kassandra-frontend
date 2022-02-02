import styled from 'styled-components'
import theme from '../../styles/theme'

export const Link = styled.a`
  color: #fff;
  line-height: ${theme.font.sizes.font16};
  font-size: ${theme.font.sizes.font16};
  font-weight: ${theme.font.weight.light};
  text-decoration: none;

  display: flex;
  align-items: center;

  max-width: 100%;

  cursor: pointer;
  transition: 0.15s;
  span {
    display: flex;
  }
  svg {
    margin-left: 10px;
  }
  &:hover {
    color: ${theme.colors.cyan};
    > svg {
      path {
        stroke: ${theme.colors.cyan};
      }
    }
  }
`
