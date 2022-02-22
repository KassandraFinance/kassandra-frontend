import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import { useSelector, RootStateOrAny } from 'react-redux'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { Staking } from '../../../constants/tokenAddresses'

import useVotingPower from '../../../hooks/useVotingPower'

import web3 from '../../../utils/web3'
import { BNtoDecimal } from '../../../utils/numerals'

import tooltip from '../../../../public/assets/icons/tooltip.svg'

import * as S from './styles'

export const Overview = () => {
  const [totalVotes, setTotalVotes] = React.useState(new BigNumber(-1))
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(-1)) // eslint-disable-line prettier/prettier

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

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
            {totalVotes.lt(new BigNumber('0'))
              ? '...'
              : BNtoDecimal(totalVotes, 18, 2)}
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
          <S.ValueVoting>wallets can vote</S.ValueVoting>
        </S.VotingDataCard>
      </S.VotginCards>
    </S.Overview>
  )
}

export default Overview
