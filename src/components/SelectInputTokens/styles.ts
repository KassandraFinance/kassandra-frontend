import styled from 'styled-components'
import theme from '../../styles/theme'

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0);

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  z-index: 9;
`

interface ISelectedProps {
  openOptions: boolean;
}

// eslint-disable-next-line prettier/prettier
export const SelectToken = styled.div<ISelectedProps>`
  background-color: #4A4348;
  border-radius: ${props => (props.openOptions ? '4px 4px 0 0px' : '4px')};

  font-size: ${theme.font.sizes.font20};

  max-width: 128px;
  margin: 8px 0;
`

// eslint-disable-next-line prettier/prettier
export const Selected = styled.div<ISelectedProps>`
  border-radius: ${props => (props.openOptions ? '4px 0px' : '4px')};
  display: flex;
  align-items: center;

  width: 128px;
  cursor: pointer;
  padding: 3px 8px;

  img {
    max-width: 21px;
  }

  #img-token-selected {
    margin-right: 8px;
  }
  #arrow-down {
    margin-left: auto;
    margin-bottom: 4px;
  }
`

export const OptionsContent = styled.div`
  background-color: #4a4348;
  border-radius: 0 0 4px 4px;

  width: 128px;
  max-height: 162px;
  overflow: auto;

  position: absolute;

  z-index: 101;
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;

  padding: 3px 0;
  cursor: pointer;

  img {
    max-width: 21px;
    margin: 0 10px;
  }

  &:hover {
    background-color: #000;
  }
`
