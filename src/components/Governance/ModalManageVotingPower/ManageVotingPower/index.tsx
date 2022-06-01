import React from 'react'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import * as S from './styles'

interface IManageVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

const ManageVotingPower = ({ setCurrentModal }: IManageVotingPowerProps) => {
  return (
    <S.Content>
      <S.WrapperIconsBackGround
        type="button"
        onClick={() => {
          setCurrentModal('delegate')
        }}
      >
        <S.WrapperIcons>
          <img src="/assets/iconGradient/delegate.svg" alt="" />
          <S.Option>
            <h3>Delegate your voting power</h3>
            <p>
              This option allows you to delegate your voting power to another
              Avalanche address. Your KACY tokens will <strong>not</strong> be
              sent, only your voting rights. This action can be undone at any
              time.
            </p>
          </S.Option>
        </S.WrapperIcons>
      </S.WrapperIconsBackGround>
      <S.WrapperIconsBackGround
        type="button"
        onClick={() => {
          setCurrentModal('undelegate')
        }}
      >
        <S.WrapperIcons>
          <img src="/assets/iconGradient/undelegate.svg" alt="" />
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
  )
}

export default ManageVotingPower
