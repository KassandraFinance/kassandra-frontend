import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import ModalSocial from '../../../components/ModalSocial'

import * as S from './styles'

const Token = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const { trackEvent } = useMatomo();

  function clickMatomoEvent(action: string, name: string) {
    trackEvent({
      category: "kassandra-page",
      action: action,
      name: name,
    });
  }
  
  return (
    <>
      <S.Token>
        <h1>Be part of the Kassandra ecosystem with $KACY </h1>
        <p>Take the lead and join the first decentralized fund manager through our decentralized governance protocol</p>
        <S.Details>
          <img className="img-token" src="assets/token.svg" alt="" />
          <img className="img-token-96" src="assets/token-96.svg" alt="" />
          <S.Description>
            <h3>The $KACY Token</h3>
            <p>The protocol governance token responsible for:</p>
            <ul>
              <li><span>Approving</span> code changes and updates </li>
              <li>Deploying <span>new</span> investment products</li>
              <li><span>Curating</span> whitelists for investable assets</li>
              <li>Adjusting <span>parameters</span> and <span>fees</span></li>
            </ul>
            <S.ButtonModalSocial onClick={() => {
                setModalOpen(true);
                clickMatomoEvent("click-open-modal", "modal-social")
              }
            }>Join the $KACY community</S.ButtonModalSocial>
          </S.Description>
        </S.Details>
      </S.Token>
      <ModalSocial modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </>
  )
}

export default Token