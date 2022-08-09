import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'

import { Staking } from '../../../../constants/tokenAddresses'

import waitTransaction, {
  MetamaskError,
  TransactionCallback
} from '../../../../utils/txWait'
import substr from '../../../../utils/substr'
import { BNtoDecimal } from '../../../../utils/numerals'

import useStakingContract from '../../../../hooks/useStakingContract'
import useVotingPower from '../../../../hooks/useVotingPower'

import { useAppSelector, useAppDispatch } from '../../../../store/hooks'
import { setModalAlertText } from '../../../../store/reducers/modalAlertText'

import { ToastSuccess, ToastWarning } from '../../../Toastify/toast'
import ExternalLink from '../../../ExternalLink'
import ImageProfile from '../../ImageProfile'
import Button from '../../../Button'
import Options from '../Options'

import arrowSelect from '../../../../../public/assets/utilities/arrow-select-down.svg'

import * as S from '../styles'
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
  const dispatch = useAppDispatch()
  const [optionsOpen, setOptionsOpen] = React.useState<boolean>(false)
  const [undelegateSelected, setUndelegateSelected] =
    React.useState<IDateProps>({
      pid: 0,
      nameToken: '',
      withdrawDelay: '',
      votingPower: ''
    })
  const [userInfoData, setUserInfoData] = React.useState<any>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const { userInfo, poolInfo } = useStakingContract(Staking)
  const { delegateVote, delegateAllVotes } = useVotingPower(Staking)

  const callUserInfo = async () => {
    const [
      poolInfoOne,
      poolInfoTwo,
      poolInfoThree,
      userInfoOne,
      userInfoTwo,
      userInfoThree
    ] = await Promise.all([
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 2 : 0),
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 3 : 1),
      poolInfo(process.env.NEXT_PUBLIC_MASTER === '1' ? 4 : 2),
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

    const poolInfoArr = [poolInfoOne, poolInfoTwo, poolInfoThree]

    const userInfoArr = [userInfoOne, userInfoTwo, userInfoThree].map(
      userInfo => {
        const poolInfo = poolInfoArr[userInfo.pid]
        const votingPowerWithoutMultiplier = new BigNumber(userInfo.amount)

        const votingPower = BNtoDecimal(
          new BigNumber(poolInfo.votingMultiplier).mul(
            votingPowerWithoutMultiplier
          ),
          18,
          2
        )

        if (
          userInfo.delegatee.toLowerCase() === userWalletAddress.toLowerCase()
        ) {
          return { msg: "Can't undelegate to your own wallet" }
        } else {
          return {
            votingPower,
            withdrawDelay: Math.round(Number(poolInfo.withdrawDelay) / 86400),
            nameToken: userInfo.delegatee,
            pid: userInfo.pid
          }
        }
      }
    )

    setUserInfoData(userInfoArr)
    setLoading(false)
  }

  const undelegateCallback = React.useCallback(
    (receiverAddress: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            dispatch(setModalAlertText({ errorText: `Undelegate cancelled` }))
            return
          }

          dispatch(setModalAlertText({ errorText: `Error` }))
          return
        }

        ToastWarning(`Confirming undelegate to ${substr(receiverAddress)}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Undelegate confirmed to ${substr(receiverAddress)}`)
          setCurrentModal('manage')
          setModalOpen(false)
          return
        }
      }
    },
    []
  )

  const undelegateAllCallback = React.useCallback(
    (receiverAddress: string): TransactionCallback => {
      return async (error: MetamaskError, txHash: string) => {
        if (error) {
          if (error.code === 4001) {
            dispatch(setModalAlertText({ errorText: `Undelegate cancelled` }))
            return
          }

          dispatch(setModalAlertText({ errorText: `Error` }))
          return
        }

        ToastWarning(`Confirming undelegate to ${substr(receiverAddress)}...`)
        const txReceipt = await waitTransaction(txHash)

        if (txReceipt.status) {
          ToastSuccess(`Undelegate confirmed to ${substr(receiverAddress)}`)
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

  const handleUndelegateAllVotes = async () => {
    await delegateAllVotes(
      userWalletAddress,
      undelegateAllCallback(userWalletAddress)
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
                <ImageProfile
                  address={undelegateSelected.nameToken}
                  diameter={24}
                  hasAddress={false}
                  isLink={false}
                />
                <S.WithdrawDelay>
                  <p>{substr(undelegateSelected.nameToken)}</p>
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
            <span>
              {loading
                ? 'Loading...'
                : 'Choose the address you wish to undelegate'}
            </span>
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
          <ExternalLink
            text="Retrieve all delegated voting power"
            onClick={handleUndelegateAllVotes}
          />
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
