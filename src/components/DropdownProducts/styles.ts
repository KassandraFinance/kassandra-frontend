import styled from 'styled-components'

interface ILinkProductsProps {
  products: boolean
}

export const LinkProducts = styled.button<ILinkProductsProps>`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  margin: 0 16px;

  img {
    margin-left: 16px;
  }
`

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.01);
  
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

interface IUlProps {
  x: number
  y: number
}

export const Ul = styled.ul<IUlProps>`
  position: absolute;
  margin-top: 20px;
  margin-left: -18px;

  left: ${props => `${props.x}px`};
  top: ${props => `${props.y}px`};

  .anime-top {
    opacity: 0;
    transform: translateY(-20px);
    animation: animeTop 0.4s forwards;
  }

  @keyframes animeTop {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`

export const Li = styled.li`
  a {
    background-color: #0C3DDC;
    border-radius: 4px;
    height: 40px;
    padding: 8px 20px 8px 8px;
  }
`