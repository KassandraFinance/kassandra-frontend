import styled from 'styled-components'
import theme from '../../styles/theme'

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: 6rem;
  border-bottom: 1px solid rgb(255 255 255 / 0.1);

  white-space: nowrap;

  @media (max-width: 1200px) {
    overflow-x: auto;

    ::-webkit-scrollbar {
      height: 0.1rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: rgb(0 0 0 / 0);
    }

    ::-moz-scrollbar {
      height: 0.1rem;
    }

    ::-moz-scrollbar-thumb {
      background-color: rgb(0 0 0 / 0);
    }

    ::-o-scrollbar {
      height: 0.1rem;
    }

    ::-o-scrollbar-thumb {
      background-color: rgb(0 0 0 / 0);
    }

    ::-ms-scrollbar {
      height: 0.1rem;
    }

    ::-ms-scrollbar-thumb {
      background-color: rgb(0 0 0 / 0);
    }
  }
`

interface ITabsButtonProps {
  isActiveTab?: boolean
}

// prettier-ignore
export const TabsButton = styled.button<ITabsButtonProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  padding: 1.6rem;
  border: 0;
  border: ${props =>
    props.isActiveTab
      ? '0.1rem solid rgba(255, 255, 255, 0.08)'
      : '0.1rem solid transparent'};
  border-bottom: none;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  color: ${props => (props.isActiveTab ? '#ffffff' : '#c4c4c4')};
  font-weight: ${theme.font.weight.normal};
  font-size: ${theme.font.sizes.font16};
  font-family: Rubik, sans-serif;

  background-color: ${props =>
    props.isActiveTab ? 'rgba(255, 255, 255, 0.05)' : 'transparent'};

  cursor: pointer;

  transition-timing-function: ease-in-out;
  transition-duration: 300ms;
  transition-property: background-color border color;

  span {
    display: flex;
    align-items: center;

    svg {
      path {
        fill: ${theme.colors.snow};

        transition-timing-function: ease-in-out;
        transition-duration: 300ms;
        transition-property: fill fill-opacity;
        fill-opacity: ${props => props.isActiveTab ? '1' : '0.5'};
      }
    }
  }

  &:hover {
    color: ${theme.colors.white};

    svg {
      path {
        fill: ${theme.colors.snow};
        fill-opacity: 1;
      }
    }
  }

  @media (max-width: 580px) {
    height: 5.2rem;
    padding: 1rem;

    font-size: ${theme.font.sizes.font14};
  }
`
