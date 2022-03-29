import React from 'react'
import Image from 'next/image'
// import { useMatomo } from '@datapunt/matomo-tracker-react'

import BigNumber from 'bn.js'
import { RootStateOrAny, useSelector } from 'react-redux'

import { Staking } from '../../../../constants/tokenAddresses'

import useStakingContract from '../../../../hooks/useStakingContract'
import useVotingPower from '../../../../hooks/useVotingPower'

import { BNtoDecimal } from '../../../../utils/numerals'
import { ToastError, ToastSuccess, ToastWarning } from '../../../Toastify/toast'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../../utils/txWait'

import Button from '../../../Button'
import ExternalLink from '../../../ExternalLink'
import Options from '../Options'

import arrowSelect from '../../../../../public/assets/icons/arrow-select.svg'
import logo from '../../../../../public/assets/logo-64.svg'

import * as S from '../styles'

export interface IDateProps {
  pid: number;
  nameToken: string;
  withdrawDelay: string;
  votingPower: string;
}

interface IDelegateVotingPowerProps {
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DelegateVotingPower = ({
  setCurrentModal,
  setModalOpen
}: IDelegateVotingPowerProps) => {
  const { poolInfo, balance } = useStakingContract(Staking)
  const { delegateVote } = useVotingPower(Staking)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [receiverAddress, setReceiverAddress] = React.useState<string>('')
  const [delegateSelected, setDelegateSelected] = React.useState<IDateProps>({
    pid: 0,
    nameToken: '',
    withdrawDelay: '',
    votingPower: ''
  })
  const [poolData, setPoolData] = React.useState<any>([])

  const handlePoolInfo = async () => {
    const [poolInfoOne, poolInfoTwo, poolInfoThree] = await Promise.all([
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0),
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1),
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2)
    ])

    poolInfoOne.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0
    poolInfoTwo.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1
    poolInfoThree.pid = process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2

    const newArr = []
    const arr = [poolInfoOne, poolInfoTwo, poolInfoThree]

    for (let i = 0; i < arr.length; i++) {
      const poolInfo = arr[i]

      const votingPower = await balance(Number(poolInfo.pid), userWalletAddress)

      newArr.push({
        withdrawDelay: Math.round(Number(poolInfo.withdrawDelay) / 86400),
        votingPower: BNtoDecimal(
          new BigNumber(poolInfo.votingMultiplier).mul(votingPower),
          18,
          2
        ),
        pid: poolInfo.pid,
        nameToken: 'KACY'
      })
    }

    setPoolData(newArr)
  }

  React.useEffect(() => {
    handlePoolInfo()
  }, [setModalOpen, setCurrentModal])

  const delegateCallback = React.useCallback((): TransactionCallback => {
    return async (error: MetamaskError, txHash: string) => {
      if (error) {
        if (error.code === 4001) {
          ToastError(`${error}`)
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
  }, [])

  const handleDelegateVotes = async () => {
    await delegateVote(
      delegateSelected?.pid,
      receiverAddress,
      delegateCallback()
    )
  }

  const handleDelegateAllVoting = async () => {
    console.log('Oi')
  }

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
                <Image src={logo} alt="" />
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
        <S.Input
          placeholder="Enter a 0x address"
          value={receiverAddress}
          onChange={event => setReceiverAddress(event.target.value)}
        />
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
            disabledNoEvent={
              delegateSelected.nameToken === '' || receiverAddress === ''
            }
            text="Delegate Votes"
            onClick={handleDelegateVotes}
          />
        </S.ButtonContainer>
        <S.Link>
          <ExternalLink
            onClick={handleDelegateAllVoting}
            text="Delegate all voting power"
          />
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
