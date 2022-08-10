import React from 'react'
import Image from 'next/image'

import BigNumber from 'bn.js'

import { Staking } from '../../../../constants/tokenAddresses'

import useStakingContract from '../../../../hooks/useStakingContract'
import useVotingPower from '../../../../hooks/useVotingPower'
import { useAppSelector, useAppDispatch } from '../../../../store/hooks'
import { setModalAlertText } from '../../../../store/reducers/modalAlertText'

import { BNtoDecimal } from '../../../../utils/numerals'
import substr from '../../../../utils/substr'
import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../../utils/txWait'

import Button from '../../../Button'
import ExternalLink from '../../../ExternalLink'
import { ToastSuccess, ToastWarning } from '../../../Toastify/toast'
import Options from '../Options'

import arrowSelect from '../../../../../public/assets/utilities/arrow-select-down.svg'
import logo from '../../../../../public/assets/logos/kacy-64.svg'

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

interface PoolData {
  withdrawDelay: number;
  votingPower: string;
  pid: number | undefined;
  nameToken: string;
}

const DelegateVotingPower = ({
  setCurrentModal,
  setModalOpen
}: IDelegateVotingPowerProps) => {
  const dispatch = useAppDispatch()
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [receiverAddress, setReceiverAddress] = React.useState<string>('')
  const [delegateSelected, setDelegateSelected] = React.useState<IDateProps>({
    pid: 0,
    nameToken: '',
    withdrawDelay: '',
    votingPower: ''
  })
  const [poolData, setPoolData] = React.useState<PoolData[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)
  const [errorMsg, setErrorMsg] = React.useState<boolean>(false)

  const { poolInfo, balance } = useStakingContract(Staking)
  const { delegateVote, delegateAllVotes } = useVotingPower(Staking)

  const regex = /^0x[a-fA-F0-9]{40}$/g
  const walletRegex: RegExpExecArray | null = regex.exec(receiverAddress)

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
    setLoading(false)
  }

  const handleDelegateVotes = async () => {
    await delegateVote(
      delegateSelected?.pid,
      receiverAddress,
      delegateCallback(receiverAddress)
    )
  }

  const handleDelegateAllVoting = async () => {
    if (!walletRegex) {
      dispatch(setModalAlertText({ errorText: 'Invalid address' }))
      return
    }

    await delegateAllVotes(
      receiverAddress,
      delegateAllCallback(receiverAddress)
    )
  }

  React.useEffect(() => {
    if (!walletRegex && receiverAddress !== '') {
      setErrorMsg(true)
      return
    }
    setErrorMsg(false)
  }, [receiverAddress])

  React.useEffect(() => {
    handlePoolInfo()
  }, [setModalOpen, setCurrentModal])

  const delegateCallback = React.useCallback(
    (receiverAddress: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            dispatch(setModalAlertText({ errorText: `Delegate cancelled` }))
            return
          }

          dispatch(setModalAlertText({ errorText: `Error` }))
          return
        }

        ToastWarning(`Confirming delegate to ${substr(receiverAddress)}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Delegate confirmed to ${substr(receiverAddress)}`)
          setCurrentModal('manage')
          setModalOpen(false)
          return
        }
      }
    },
    []
  )

  const delegateAllCallback = React.useCallback(
    (receiverAddress: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            dispatch(setModalAlertText({ errorText: `Delegate cancelled` }))
            return
          }

          dispatch(setModalAlertText({ errorText: `Error` }))
          return
        }

        ToastWarning(`Confirming delegate to ${substr(receiverAddress)}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Delegate confirmed to ${substr(receiverAddress)}`)
          setCurrentModal('manage')
          setModalOpen(false)
          return
        }
      }
    },
    []
  )

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
                <Image width={24} height={24} src={logo} alt="" />
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
            <span>
              {' '}
              {loading ? 'Loading...' : 'Choose the KACY pool to delegate'}
            </span>
            <Image src={arrowSelect} alt="" />
          </S.Select>
        )}
        <span>Select the address you wish to delegate the voting power</span>
        <S.Input
          error={errorMsg}
          placeholder="Enter a 0x address"
          value={receiverAddress}
          onChange={event => setReceiverAddress(event.target.value)}
        />
        <S.Error error={errorMsg}>Invalid address</S.Error>
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
            disabledNoEvent={walletRegex === null}
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
