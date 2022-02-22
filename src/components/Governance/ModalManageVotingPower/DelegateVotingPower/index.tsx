import React from 'react'
import Image from 'next/image'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import Button from '../../../Button'
import ExternalLink from '../../../ExternalLink'
import Options from '../Options'

import arrowSelect from '../../../../../public/assets/icons/arrow-select.svg'
import logo from '../../../../../public/assets/logo-64.svg'

import * as S from '../styles'

export interface IDateProps {
  image: any;
  nameToken: string;
  withdrawDelay: string;
  votingPower: string;
}

interface IDelegateVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

const DelegateVotingPower = ({
  setCurrentModal
}: IDelegateVotingPowerProps) => {
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [delegateSelected, setDelegateSelected] = React.useState<IDateProps>({
    image: '',
    nameToken: '',
    withdrawDelay: '',
    votingPower: ''
  })

  return (
    <>
      <S.Content>
        <p>
          This option allows you to delegate your voting power to another
          Avalanche address. Your KACY tokens will not be sent, only your voting
          rights. This action can be undone at any time.
        </p>
        <span>Select the pool you wish to delegate its voting power from</span>
        {delegateSelected.nameToken !== '' && !optionsOpen ? (
          <S.Selected onClick={() => setOptionsOpen(!optionsOpen)}>
            <S.Option>
              <S.Name>
                <Image src={delegateSelected.image} alt="" />
                <S.WithdrawDelay>
                  <p>{delegateSelected.nameToken}</p>
                  <span>
                    {delegateSelected.withdrawDelay} days withdraw delay
                  </span>
                </S.WithdrawDelay>
              </S.Name>
              <S.VotingPower>
                <p>{delegateSelected.votingPower}</p>
                <span>Voting power</span>
              </S.VotingPower>
            </S.Option>
          </S.Selected>
        ) : (
          <S.Select
            onClick={() => setOptionsOpen(true)}
            optionsOpen={optionsOpen}
          >
            <span>Choose the KACY pool to delegate</span>
            <Image src={arrowSelect} alt="" />
          </S.Select>
        )}
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
            disabledNoEvent={delegateSelected.nameToken === ''}
            text="Delegate Votes"
          />
        </S.ButtonContainer>
        <S.Link>
          <ExternalLink text="Retrieve all delegated voting power" />
        </S.Link>
      </S.Content>
      <Options
        optionsOpen={optionsOpen}
        setOptionsOpen={setOptionsOpen}
        data={poolData}
        delegateSelected={delegateSelected}
        setDelegateSelected={setDelegateSelected}
      />
    </>
  )
}

export default DelegateVotingPower

const poolData = [
  {
    image: logo,
    nameToken: 'kacy',
    withdrawDelay: '0',
    votingPower: '456,00'
  },
  {
    image: logo,
    nameToken: 'kacy',
    withdrawDelay: '15',
    votingPower: '789,00'
  },
  {
    image: logo,
    nameToken: 'kacy',
    withdrawDelay: '45',
    votingPower: '123.000,00'
  }
]
