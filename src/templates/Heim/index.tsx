import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import Hero from './Hero'
import Feature from './Feature'
import HowItWorks from './HowItWorks'
import SocialProof from './SocialProof'

import ModalSocial from '../../components/ModalSocial'
import ModalSignUp from '../../components/ModalSignUp'
import ModalSuccess from '../../components/ModalSuccess'

import * as S from './styles'

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
      <div className="feature-spot" />
      <Feature
        setModalSignupOpen={setModalSignupOpen}
        modalSignupOpen={modalSignupOpen}
      />
      <SocialProof />
      <HowItWorks
        setModalSignupOpen={setModalSignupOpen}
        setModalSuccessOpen={setModalSuccessOpen}
      />
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
