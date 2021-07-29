import React from "react"
import { useRouter } from 'next/router'

import Image from 'next/image'
import arrowDown from '../../../public/assets/arrow-down.svg'

import { LinkProducts, Backdrop, Ul, Li } from './styles'


const DropdownProducts = () => {
  const [showProducts, setShowProducts] = React.useState(false);
  const [positionBtnProducts, setPositionBtnProducts] = React.useState({})

  const { route } = useRouter()

  function handleProductsPosition(e: any) {
    const position = e.target.getClientRects()
    setPositionBtnProducts({
        x: position[0].x,
        y: position[0].y + 20,
    })
  }

  return (
    <>
      <LinkProducts 
        products={route === '/products'}
        onClick={(e: any) => {
          setShowProducts(!showProducts)
          handleProductsPosition(e)
        }
      }>
        Products<img src="assets/arrow-down.svg" alt="" />
      </LinkProducts>
      {showProducts &&
      <Backdrop  onClick={() => setShowProducts(false)}>
        <Ul 
          className={"anime-top"}
          x={positionBtnProducts['x']}
          y={positionBtnProducts['y']}
        >
          <Li>
            <a>Heim Index</a>
          </Li>
        </Ul>
      </Backdrop>
      }
    </>
  )
}

export default DropdownProducts