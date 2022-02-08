import React from 'react'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'

interface IModalManageVotingPowerProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalManageVotingPower = ({
  modalOpen,
  setModalOpen
}: IModalManageVotingPowerProps) => {
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
        onClick={() => setModalOpen(false)}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.ModalContainer modalOpen={modalOpen}>
        <S.Top>
          <p>Manage your voting power</p>
          <S.Close type="button" onClick={() => setModalOpen(false)}>
            <img src="/assets/close.svg" alt="Close" />
          </S.Close>
        </S.Top>
        <S.Content>
          <S.WrapperIconsBackGround
            type="button"
            onClick={() => {
              setModalOpen(false)
            }}
          >
            <S.WrapperIcons>
              <img src="/assets/icons/delegate.svg" alt="" />
              <S.Option>
                <h3>Delegate your voting power</h3>
                <p>
                  This option allows you to delegate your voting power to
                  another Avalanche address. Your KACY tokens will{' '}
                  <strong>not</strong> be sent, only your voting rights. This
                  action can be undone at any time.
                </p>
              </S.Option>
            </S.WrapperIcons>
          </S.WrapperIconsBackGround>
          <S.WrapperIconsBackGround
            type="button"
            onClick={() => {
              setModalOpen(false)
            }}
          >
            <S.WrapperIcons>
              <img src="/assets/icons/undelegate.svg" alt="" />
              <S.Option>
                <h3>Undelegate your voting power</h3>
                <p>
                  This option allows you to undelegate the voting power you have
                  sent to another Avalanche address.
                </p>
              </S.Option>
            </S.WrapperIcons>
          </S.WrapperIconsBackGround>
        </S.Content>
      </S.ModalContainer>
    </>
  )
}

export default ModalManageVotingPower
