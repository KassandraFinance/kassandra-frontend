import styled from "styled-components"
import theme from "../../styles/theme"

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
  openOptions: boolean
}

export const SelectToken = styled.div<ISelectedProps>`
  background-color: #4A4348;
  border-radius: ${props => props.openOptions ? '4px 4px 0 0px' : '4px'};


  font-size: ${theme.font.sizes.font20};

  max-width: 128px;

  font-size: ${theme.font.sizes.font20};
`

export const Selected = styled.div<ISelectedProps>`
  border-radius: ${props => props.openOptions ? '4px 0px' : '4px'};
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 6px 8px;

  img {
    max-width: 21px;
    /* margin: 0 10px; */
  }
`

export const OptionsContent = styled.div`
  background-color: #4A4348;
  border-radius: 0 0 4px 4px;

  width: 128px;
  position: absolute;
  
  z-index: 101;
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

