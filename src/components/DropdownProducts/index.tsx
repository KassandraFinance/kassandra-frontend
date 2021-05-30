import React from "react"

import styles from './dropdown.module.scss'

const DropdownProducts = () => {
  const [showProducts, setShowProducts] = React.useState(false);
  const [positionBtnProducts, setPositionBtnProducts] = React.useState({})

  function handleProductsPosition(e) {
    const position = e.target.getClientRects()
    setPositionBtnProducts({
        x: position[0].x,
        y: position[0].y + 20,
    })
  }

  return (
    <>
      <div className={styles['btn-products']} onClick={(e) => {
          setShowProducts(!showProducts)
          handleProductsPosition(e)
        }
      }>
        Products<img src="assets/arrow-down.svg" alt=""/>
      </div>
      {showProducts &&
      <div className={styles['backdrop']}  onClick={() => setShowProducts(false)}>
        <ul 
          className={styles['products-container']} 
          style={{
            position: 'absolute', 
            left: `${positionBtnProducts['x']}px`, 
            top: `${positionBtnProducts['y']}px`
          }}
        >
          <li className={styles['anime-top']}>
            <a href="products/heim">Heim Index</a>
          </li>
        </ul>
      </div>
      }
    </>
  )
}

export default DropdownProducts