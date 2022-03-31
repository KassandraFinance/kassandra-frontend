import React from 'react'
import Image from 'next/image'

import BigNumber from 'bn.js'

// import { useMatomo } from '@datapunt/matomo-tracker-react'
import Button from '../../../Button'
import ExternalLink from '../../../ExternalLink'
import Options from '../Options'

import arrowSelect from '../../../../../public/assets/icons/arrow-select.svg'
import logo from '../../../../../public/assets/logo-64.svg'

import * as S from '../styles'
import { Staking } from '../../../../constants/tokenAddresses'
import useStakingContract from '../../../../hooks/useStakingContract'
import { RootStateOrAny, useSelector } from 'react-redux'
import { BNtoDecimal } from '../../../../utils/numerals'
import useVotingPower from '../../../../hooks/useVotingPower'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../../utils/txWait'
import { ToastError, ToastSuccess, ToastWarning } from '../../../Toastify/toast'

export interface IDateProps {
  pid: number;
  nameToken: string;
  withdrawDelay: string;
  votingPower: string;
}

interface IUndelegateVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UndelegateVotingPower = ({
  setCurrentModal,
  setModalOpen
}: IUndelegateVotingPowerProps) => {
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [undelegateSelected, setUndelegateSelected] =
    React.useState<IDateProps>({
      pid: 0,
      nameToken: '',
      withdrawDelay: '',
      votingPower: ''
    })
  const [userInfoData, setUserInfoData] = React.useState<any>([])

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { userInfo } = useStakingContract(Staking)
  const { delegateVote } = useVotingPower(Staking)

  const callUserInfo = async () => {
    const [userInfoOne, userInfoTwo, userInfoThree] = await Promise.all([
      userInfo(
        process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0,
        userWalletAddress
      ),
      userInfo(
        process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1,
        userWalletAddress
      ),
      userInfo(
        process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2,
        userWalletAddress
      )
    ])

    userInfoOne.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0
    userInfoTwo.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1
    userInfoThree.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2

    setUserInfoData(
      [userInfoOne, userInfoTwo, userInfoThree].map(userInfo => ({
        votingPower: BNtoDecimal(new BigNumber(userInfo.amount), 18, 2),
        withdrawDelay: '1000',
        nameToken: 'KACY',
        pid: userInfo.pid
      }))
    )
  }

  const undelegateCallback = React.useCallback(
    (receiverAddress: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            ToastError(`Delegate cancelled`)
            return
          }

          ToastError(`Error`)
          return
        }

        ToastWarning(`Confirming delegate to ${receiverAddress}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Delegate confirmed to ${receiverAddress}`)
          setCurrentModal('manage')
          setModalOpen(false)
          return
        }
      }
    },
    []
  )

  const handleUndelegateVotes = async () => {
    await delegateVote(
      undelegateSelected?.pid,
      userWalletAddress,
      undelegateCallback(userWalletAddress)
    )
  }

  React.useEffect(() => {
    callUserInfo()
  }, [])

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
                <Image src={logo} alt="" />
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
            onClick={handleUndelegateVotes}
          />
        </S.ButtonContainer>
        <S.Link>
          <ExternalLink text="Retrieve all delegated voting power" />
        </S.Link>
      </S.Content>
      <Options
        optionsOpen={optionsOpen}
        setOptionsOpen={setOptionsOpen}
        data={userInfoData}
        delegateSelected={undelegateSelected}
        setDelegateSelected={setUndelegateSelected}
        undelegate={true}
      />
    </>
  )
}

export default UndelegateVotingPower

// const poolData = [
//   {
//     image: logo,
//     nameToken: 'kacy',
//     withdrawDelay: '0',
//     votingPower: '456,00'
//   },
//   {
//     image: logo,
//     nameToken: 'kacy',
//     withdrawDelay: '15',
//     votingPower: '789,00'
//   },
//   {
//     image: logo,
//     nameToken: 'kacy',
//     withdrawDelay: '45',
//     votingPower: '123.000,00'
//   }
// ]
