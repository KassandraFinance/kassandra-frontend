/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { Staking } from '../../constants/tokenAddresses'

import useVotingPower from '../../hooks/useVotingPower'

import web3 from '../../utils/web3'
import { BNtoDecimal } from '../../utils/numerals'

import infoGrayIcon from '../../../public/assets/info-gray.svg'

import * as S from './styles'

interface IVotingPowerProps {
  userWalletAddress: string;
  isMobile?: boolean;
}

const VotingPower = ({ userWalletAddress, isMobile }: IVotingPowerProps) => {
  const [totalVotes, setTotalVotes] = React.useState(new BigNumber(-1))
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(-1)) // eslint-disable-line prettier/prettier

  const votingPower = useVotingPower(Staking)

  React.useEffect(() => {
    if (!web3.currentProvider) {
      return
    }

    const interval = setInterval(async () => {
      const totalVotes = await votingPower.totalVotes()
      setTotalVotes(totalVotes)
      if (userWalletAddress) {
        const currentVotes = await votingPower.currentVotes(userWalletAddress)
        setYourVotingPower(currentVotes)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [userWalletAddress])

  return (
    <S.VotingPower isMobile={isMobile}>
      <S.YourVotingPower>
        <span>
          your voting power
          <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
            <S.Tooltip>
              <Image
                src={infoGrayIcon}
                alt="Explanation"
                width={14}
                height={14}
              />
            </S.Tooltip>
          </Tippy>
        </span>
        <span style={{ fontSize: '14px' }}>
          {yourVotingPower.lt(new BigNumber('0'))
            ? '...'
            : BNtoDecimal(yourVotingPower, 18, 2)}
        </span>
      </S.YourVotingPower>
      <S.TotalVotingPower>
        <span>
          total voting power
          <Tippy content="This is the total voting power across all participants of the Kassandra Decentralized Autonomous Organization in this blockchain.">
            <S.Tooltip>
              <Image
                src={infoGrayIcon}
                alt="Explanation"
                width={14}
                height={14}
              />
            </S.Tooltip>
          </Tippy>
        </span>
        <span>
          {totalVotes.lt(new BigNumber('0'))
            ? '...'
            : BNtoDecimal(totalVotes, 18, 2)}
        </span>
      </S.TotalVotingPower>
    </S.VotingPower>
  )
}

export default VotingPower
