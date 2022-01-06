import React from 'react'
import { Link } from 'react-scroll'

import * as S from './styles'

const ScrollUpButton = () => {
  return (
    <Link
      activeClass="active"
      to="top"
      smooth={true}
      offset={-70}
      duration={800}
    >
      <S.ScrollUpButton>
        <S.ScrollUpIcon />
      </S.ScrollUpButton>
    </Link>
  )
}

export default ScrollUpButton
