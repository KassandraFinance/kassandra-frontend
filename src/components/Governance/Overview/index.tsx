import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useSelector, RootStateOrAny } from 'react-redux'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { Staking, SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import useVotingPower from '../../../hooks/useVotingPower'

import web3 from '../../../utils/web3'
import { BNtoDecimal } from '../../../utils/numerals'

import { GET_GOVERNANCES } from './graphql'

import tooltip from '../../../../public/assets/icons/tooltip.svg'

import * as S from './styles'

interface IGovernancesProps {
  totalVotingPower: BigNumber;
  votingAddresses: number;
}

export const Overview = () => {
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(-1)) // eslint-disable-line prettier/prettier
  const [governances, setGovernances] = React.useState<IGovernancesProps>({
    totalVotingPower: new BigNumber(-1),
    votingAddresses: 0
  })

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const votingPower = useVotingPower(Staking)

  const { data } = useSWR([GET_GOVERNANCES], query =>
    request(SUBGRAPH_URL, query)
  )

  React.useEffect(() => {
    if (!web3.currentProvider) {
      return
    }

    const interval = setInterval(async () => {
      if (userWalletAddress) {
        const currentVotes = await votingPower.currentVotes(userWalletAddress)
        setYourVotingPower(currentVotes)
      }
    }, 8000)

    return () => clearInterval(interval)
  }, [userWalletAddress])

  React.useEffect(() => {
    if (data) {
      setGovernances(data.governances[0])
    }
  }, [data])

  return (
    <S.Overview>
      <S.VotginCards>
        <S.VotingDataCard>
          <S.TextVoting>
            Your Voting Power
            <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
              <S.Tooltip>
                <Image src={tooltip} alt="Explanation" />
              </S.Tooltip>
            </Tippy>
          </S.TextVoting>
          <S.ValueVoting>
            {yourVotingPower.lt(new BigNumber('0'))
              ? '...'
              : BNtoDecimal(yourVotingPower, 18, 2)}
          </S.ValueVoting>
        </S.VotingDataCard>
        <S.VotingDataCard>
          <S.TextVoting>
            Total Voting Power
            <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
              <S.Tooltip>
                <Image src={tooltip} alt="Explanation" />
              </S.Tooltip>
            </Tippy>
          </S.TextVoting>
          <S.ValueVoting>
            {BNtoDecimal(governances.totalVotingPower, 0, 2)}
          </S.ValueVoting>
        </S.VotingDataCard>
        <S.VotingDataCard>
          <S.TextVoting>
            Voting Addresses
            <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
              <S.Tooltip>
                <Image src={tooltip} alt="Explanation" />
              </S.Tooltip>
            </Tippy>
          </S.TextVoting>
          <S.ValueVoting>{governances.votingAddresses}</S.ValueVoting>
        </S.VotingDataCard>
      </S.VotginCards>
    </S.Overview>
  )
}

export default Overview
