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

interface IUndelegateVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
}

const UndelegateVotingPower = ({
  setCurrentModal
}: IUndelegateVotingPowerProps) => {
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [undelegateSelected, setUndelegateSelected] =
    React.useState<IDateProps>({
      image: '',
      nameToken: '',
      withdrawDelay: '',
      votingPower: ''
    })
  return (
    <>
      <S.Content>
        <p>
          This option allows you to undelegate the voting power you have sent to
          another Avalanche address.
        </p>
        <span>
          Select the pool you wish to undelegate its voting power from
        </span>
        {undelegateSelected.nameToken !== '' && !optionsOpen ? (
          <S.Selected onClick={() => setOptionsOpen(!optionsOpen)}>
            <S.Option>
              <S.Name>
                <Image
                  src={undelegateSelected.image}
                  width={24}
                  height={24}
                  alt=""
                />
                <S.WithdrawDelay>
                  <p>{undelegateSelected.nameToken}</p>
                  <span>
                    {undelegateSelected.withdrawDelay} days withdraw delay
                  </span>
                </S.WithdrawDelay>
              </S.Name>
              <S.VotingPower>
                <p>{undelegateSelected.votingPower}</p>
                <span>Voting power</span>
              </S.VotingPower>
            </S.Option>
          </S.Selected>
        ) : (
          <S.Select
            onClick={() => setOptionsOpen(true)}
            optionsOpen={optionsOpen}
          >
            <span>Choose the address you wish to undelegate</span>
            <Image src={arrowSelect} alt="" />
          </S.Select>
        )}
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
            disabledNoEvent={undelegateSelected.nameToken === ''}
            text="Undelegate Votes"
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
        delegateSelected={undelegateSelected}
        setDelegateSelected={setUndelegateSelected}
        undelegate={true}
      />
    </>
  )
}

export default UndelegateVotingPower

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
