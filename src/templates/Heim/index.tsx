/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Hero from './hero'
import Feature from './feature'
import SocialProof from './socialProof'
import ModalSocial from './ModalSocial'
import ModalSignUp from './sign-up/ModalSignUp'
import ModalSuccess from './ModalSuccess'

import * as S from './styles'
import HowItWorks from './howItWorks'

const Heim = () => {
  const { trackPageView } = useMatomo()

  // Track page view
  React.useEffect(() => {
    trackPageView({})
  }, [trackPageView])

  const [modalOpen, setModalOpen] = React.useState<boolean>(false)
  const [modalSignupOpen, setModalSignupOpen] = React.useState<boolean>(false)
  const [modalSuccessOpen, setModalSuccessOpen] = React.useState<boolean>(false)

  return (
    <S.Container>
      <Hero
        setModalOpen={setModalOpen}
        setModalSignupOpen={setModalSignupOpen}
      />
      <Feature />
      <SocialProof />
      <HowItWorks setModalSignupOpen={setModalSignupOpen} />
      <ModalSocial modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ModalSignUp
        modalSignupOpen={modalSignupOpen}
        setModalSignupOpen={setModalSignupOpen}
        setModalSuccessOpen={setModalSuccessOpen}
      />
      <ModalSuccess
        modalSuccessOpen={modalSuccessOpen}
        setModalSuccessOpen={setModalSuccessOpen}
      />
    </S.Container>
  )
}

export default Heim
