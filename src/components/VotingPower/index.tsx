/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'

import infoGrayIcon from '../../../public/assets/info-gray.svg'

import * as S from './styles'

interface IVotingPowerProps {
  getTotalVotes: () => Promise<BigNumber>;
  getCurrentVotes: (walletAddres: string) => Promise<BigNumber>;
  userWalletAddress: string;
}

const VotingPower = ({
  getTotalVotes,
  getCurrentVotes,
  userWalletAddress
}: IVotingPowerProps) => {
  const [totalVotes, setTotalVotes] = React.useState(new BigNumber(0))
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(0))

  React.useEffect(() => {
    if (!web3.currentProvider) {
      return
    }

    const interval = setInterval(async () => {
      const totalVotes = await getTotalVotes()
      setTotalVotes(totalVotes)
      if (userWalletAddress) {
        const currentVotes = await getCurrentVotes(userWalletAddress)
        setYourVotingPower(currentVotes)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [userWalletAddress])

  return (
    <S.VotingPower>
      <S.YourVotingPower>
        <span>
          your voting power
          <Tippy content="About voting power">
            <S.Tooltip>
              <Image src={infoGrayIcon} alt="tooltip" width={14} height={14} />
            </S.Tooltip>
          </Tippy>
        </span>
        <span style={{ fontSize: '14px' }}>
          {BNtoDecimal(yourVotingPower, new BigNumber(18))}
        </span>
      </S.YourVotingPower>
      <S.TotalVotingPower>
        <span>total voting power</span>
        <span>{BNtoDecimal(totalVotes, new BigNumber(18))}</span>
      </S.TotalVotingPower>
    </S.VotingPower>
  )
}

export default VotingPower
