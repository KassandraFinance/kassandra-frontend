import React from 'react'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import ManageVotingPower from './ManageVotingPower'
import DelegateVotingPower from './DelegateVotingPower'
import UndelegateVotingPower from './UndelegateVotingPower'

import * as S from './styles'

interface IModalManageVotingPowerProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalManageVotingPower = ({
  modalOpen,
  setModalOpen
}: IModalManageVotingPowerProps) => {
  const [currentModal, setCurrentModal] = React.useState<string>('manage')
  // const { trackEvent } = useMatomo()

  // function matomoEvent(action: string, name: string) {
  //   trackEvent({
  //     category: 'modal-staking',
  //     action,
  //     name
  //   })
  // }

  return (
    <>
      <S.Backdrop
        onClick={() => {
          setModalOpen(false)
          setCurrentModal('manage')
        }}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <S.Header>
          {currentModal === 'manage' && <p>Manage your voting power</p>}
          {currentModal === 'delegate' && <p>Delegate voting power</p>}
          {currentModal === 'undelegate' && <p>Undelegate voting power</p>}
          <S.Close
            type="button"
            onClick={() => {
              setModalOpen(false)
              setCurrentModal('manage')
            }}
          >
            <img src="/assets/close.svg" alt="Close" />
          </S.Close>
        </S.Header>
        {currentModal === 'manage' && (
          <ManageVotingPower setCurrentModal={setCurrentModal} />
        )}
        {currentModal === 'delegate' && (
          <DelegateVotingPower
            setModalOpen={setModalOpen}
            setCurrentModal={setCurrentModal}
          />
        )}
        {currentModal === 'undelegate' && (
          <UndelegateVotingPower setCurrentModal={setCurrentModal} />
        )}
      </S.ModalContainer>
    </>
  )
}

export default ModalManageVotingPower
