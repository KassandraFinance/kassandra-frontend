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

import infoGrayIcon from '../../../public/assets/utilities/info-gray.svg'

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
  const [totalVotingPowerGovernance, setTotalVotingPowerGovernance] =
    React.useState(new BigNumber(0))
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(0))

  const { data } = useSWR([GET_VOTINGPOWER], query =>
    request(SUBGRAPH_URL, query, { id: userWalletAddress })
  )

  React.useEffect(() => {
    if (data) {
      setTotalVotingPowerGovernance(data.governances[0].totalVotingPower)

      setYourVotingPower(data.user ? data.user.votingPower : 0)
    }
  }, [data])

  return (
    <S.VotingPower isMobile={isMobile}>
      <S.YourVotingPower>
        <span>
          {yourVotingPowerInProposal === undefined
            ? 'your voting power'
            : 'Locked voting power'}
          {yourVotingPowerInProposal === undefined ? (
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
          ) : (
            <Tippy content="Amount of voting power locked from your address to vote on this proposal. This voting power is relative to the block in which the proposal was published.">
              <S.Tooltip tabIndex={0}>
                <Image
                  src={infoGrayIcon}
                  alt="Explanation"
                  width={14}
                  height={14}
                />
              </S.Tooltip>
            </Tippy>
          )}
        </span>
        <span>
          {yourVotingPowerInProposal === undefined
            ? BNtoDecimal(yourVotingPower, 0, 2)
            : BNtoDecimal(yourVotingPowerInProposal, 18, 2)}
        </span>
      </S.YourVotingPower>
      <S.TotalVotingPower>
        <span>
          {yourVotingPowerInProposal === undefined
            ? 'total voting power'
            : 'your voting power'}

          {yourVotingPowerInProposal === undefined ? (
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
          ) : (
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
          )}
        </span>
        <span>
          {yourVotingPowerInProposal === undefined
            ? BNtoDecimal(totalVotingPowerGovernance, 0, 2)
            : BNtoDecimal(yourVotingPower, 0, 2)}
        </span>
      </S.TotalVotingPower>
    </S.VotingPower>
  )
}

export default VotingPower
