/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import BigNumber from 'bn.js'
import Image from 'next/image'
import useSWR from 'swr'
import request from 'graphql-request'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { GET_VOTINGPOWER } from './graphql'
import { SUBGRAPH_URL } from '../../constants/tokenAddresses'

import { BNtoDecimal } from '../../utils/numerals'

import infoGrayIcon from '../../../public/assets/info-gray.svg'

import * as S from './styles'

interface IVotingPowerProps {
  userWalletAddress: string;
  yourVotingPowerInProposal?: BigNumber;
  isMobile?: boolean;
}

const VotingPower = ({
  userWalletAddress,
  yourVotingPowerInProposal,
  isMobile
}: IVotingPowerProps) => {
  const [totalVotes, setTotalVotes] = React.useState(new BigNumber(0))
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(0))

  const { data } = useSWR([GET_VOTINGPOWER], query =>
    request(SUBGRAPH_URL, query, { id: userWalletAddress })
  )

  React.useEffect(() => {
    if (data) {
      setTotalVotes(data.governances[0].totalVotingPower)

      if (data.user) {
        setYourVotingPower(data.user.votingPower)
      }
    }
  }, [data])

  return (
    <S.VotingPower isMobile={isMobile}>
      <S.YourVotingPower>
        <span>
          your voting power
          <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
            <S.Tooltip tabIndex={0}>
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
          {yourVotingPowerInProposal === undefined
            ? BNtoDecimal(yourVotingPower, 0, 2)
            : BNtoDecimal(yourVotingPowerInProposal, 18, 2)}
        </span>
      </S.YourVotingPower>
      <S.TotalVotingPower>
        <span>
          total voting power
          <Tippy content="This is the total voting power across all participants of the Kassandra Decentralized Autonomous Organization in this blockchain.">
            <S.Tooltip tabIndex={0}>
              <Image
                src={infoGrayIcon}
                alt="Explanation"
                width={14}
                height={14}
              />
            </S.Tooltip>
          </Tippy>
        </span>
        <span>{BNtoDecimal(totalVotes, 0, 2)}</span>
      </S.TotalVotingPower>
    </S.VotingPower>
  )
}

export default VotingPower
