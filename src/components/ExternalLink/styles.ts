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
  gap: 0.8rem;

  max-width: 100%;

  cursor: pointer;
  transition: color ease-in-out 0.15s;

  span {
    display: flex;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.6rem;
    height: 1.6rem;

    svg {
      path {
        transition: stroke ease-in-out 0.15s;
      }
    }
  }

  &:hover {
    color: ${theme.colors.cyan};
    .icon {
      > svg {
        path {
          stroke: ${theme.colors.cyan};
        }
      }
    }
  }
`
