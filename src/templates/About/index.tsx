import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Products from './Products'

import * as S from './styles'

const About = () => {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
      <Products />
    </>
  )
}

export default About
