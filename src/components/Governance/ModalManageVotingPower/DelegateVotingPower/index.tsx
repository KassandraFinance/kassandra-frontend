import React from 'react'
import Image from 'next/image'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import Button from '../../../Button'

import arrowSelect from '../../../../../public/assets/icons/arrow-select.svg'

import * as S from './styles'
import ExternalLink from '../../../ExternalLink'

interface IDelegateVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

const DelegateVotingPower = ({
  setCurrentModal
}: IDelegateVotingPowerProps) => {
  return (
    <S.Content>
      <p>
        This option allows you to delegate your voting power to another
        Avalanche address. Your KACY tokens will not be sent, only your voting
        rights. This action can be undone at any time.
      </p>
      <span>Select the pool you wish to delegate its voting power from</span>
      <S.Select>
        <span>Choose the KACY pool to delegate</span>
        <Image src={arrowSelect} alt="" />
      </S.Select>
      <span>Select the address you wish to delegate the voting power</span>
      <S.Input placeholder="Enter a 0x address" />
      <S.ButtonContainer>
        <Button
          size="large"
          fullWidth
          backgroundBlack
          text="Back"
          onClick={() => setCurrentModal('manage')}
        />
        <Button
          size="large"
          fullWidth
          backgroundSecondary
          disabledNoEvent={true}
          text="Delegate Vote"
        />
      </S.ButtonContainer>
      <S.Link>
        <ExternalLink text="Retrieve all delegated voting power" />
      </S.Link>
    </S.Content>
  )
}

export default DelegateVotingPower
