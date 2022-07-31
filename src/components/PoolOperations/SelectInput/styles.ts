import styled from 'styled-components'
import theme from '../../../styles/theme'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0);

  z-index: 9;
`

interface ISelectedProps {
  openOptions: boolean;
}

// prettier-ignore
export const SelectToken = styled.div<ISelectedProps>`
  max-width: 12.8rem;
  margin: 0.8rem 0;

  font-size: ${theme.font.sizes.font20};

  background-color: #4A4348;
  border-radius: ${props => (props.openOptions ? '0.4rem 0.4rem 0 0px' : '0.4rem')};
`

// prettier-ignore
export const Selected = styled.div<ISelectedProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  width: 12.8rem;
  height: 3.4rem;
  padding: 0.6rem 0.8rem 0.4rem;

  font-size: ${theme.font.sizes.font20};
  line-height: ${theme.font.sizes.font20};

  border-radius: ${props => (props.openOptions ? '0.4rem 0px' : '0.4rem')};

  cursor: pointer;

  img {
    max-width: 2.1rem;
    border-radius: 50%;
  }

  #arrow-down {
    margin: 0 0 0.6rem auto;
    padding: 0;
  }
`

export const OptionsContent = styled.div`
  position: absolute;

  width: 12.8rem;
  max-height: 16.2rem;
  overflow: auto;

  background-color: #4a4348;
  border-radius: 0 0 0.4rem 0.4rem;

  z-index: 101;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.1rem;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;

  width: 12rem;
  padding: 0.4rem 0.8rem 0.4rem;

  font-size: ${theme.font.sizes.font20};
  line-height: ${theme.font.sizes.font20};

  cursor: pointer;

  img {
    max-width: 2.1rem;
    border-radius: 50%;
  }

  .img {
    margin-right: 0.8rem;
  }

  &:hover {
    background-color: #000;
  }
`
