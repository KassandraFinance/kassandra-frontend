import React from 'react'

import { useMatomo } from '@datapunt/matomo-tracker-react'
import { Link } from 'react-scroll'

import Hero from './Hero'

import * as S from './styles'

const About = () => {
  const { trackPageView } = useMatomo()

  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  return (
    <>
      <Hero />
    </>
  )
}

export default About
