/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { LinkProducts, Backdrop, Ul, Li } from './styles'

const DropdownProducts = () => {
  const [showProducts, setShowProducts] = React.useState(false)
  const [positionBtnProducts, setPositionBtnProducts] = React.useState<any>({})

  const { route } = useRouter()

  function handleProductsPosition(e: any) {
    const position = e.target.getClientRects()
    setPositionBtnProducts({
      x: position[0].x,
      y: position[0].y + 20
    })
  }

  return (
    <>
      <LinkProducts
        products={route === '/products'}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setShowProducts(!showProducts)
          handleProductsPosition(e)
        }}
      >
        Products
        <img src="assets/arrow-down.svg" alt="" />
      </LinkProducts>
      {showProducts && (
        <Backdrop onClick={() => setShowProducts(false)}>
          <Ul
            className="anime-top"
            x={positionBtnProducts.x}
            y={positionBtnProducts.y}
          >
            <Li>
              <Link href="/products">Heim Index</Link>
            </Li>
          </Ul>
        </Backdrop>
      )}
    </>
  )
}

export default DropdownProducts
