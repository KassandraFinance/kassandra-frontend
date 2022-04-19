import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useSelector, RootStateOrAny } from 'react-redux'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'

import Button from '../../../components/Button'
import ModalWalletConnect from '../../Modals/ModalWalletConnect'

import tooltip from '../../../../public/assets/icons/tooltip.svg'

import { GET_GOVERNANCES } from './graphql'

import * as S from './styles'

interface IGovernancesProps {
  totalVotingPower: BigNumber;
  votingAddresses: number;
}

export const Overview = () => {
  // eslint-disable-next-line prettier/prettier
  const [isModalWalletConnect, setIsModalWalletConnect] =
    React.useState<boolean>(false)
  const [yourVotingPower, setYourVotingPower] = React.useState(new BigNumber(0))
  const [governances, setGovernances] = React.useState<IGovernancesProps>({
    totalVotingPower: new BigNumber(-1),
    votingAddresses: 0
  })

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const { data } = useSWR([GET_GOVERNANCES], query =>
    request(SUBGRAPH_URL, query, { id: userWalletAddress })
  )

  React.useEffect(() => {
    if (data) {
      setGovernances(data.governances[0])

      setYourVotingPower(data.user ? data.user.votingPower : 0)
    }
  }, [data])

  return (
    <>
      <S.Overview>
        <S.VotginCards>
          <S.VotingDataCard>
            <S.TextVoting>
              YOUR VOTING POWER
              <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
                <S.Tooltip>
                  <Image
                    src={tooltip}
                    alt="Explanation"
                    width={14}
                    height={14}
                  />
                </S.Tooltip>
              </Tippy>
            </S.TextVoting>
            {userWalletAddress ? (
              <S.ValueVoting>
                {BNtoDecimal(yourVotingPower, 0, 2)}
              </S.ValueVoting>
            ) : (
              <Button
                onClick={() => setIsModalWalletConnect(true)}
                size="large"
                text="Connect Wallet"
                backgroundSecondary
              />
            )}
          </S.VotingDataCard>
          <S.VotingDataCard>
            <S.TextVoting>
              TOTAL VOTING POWER
              <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
                <S.Tooltip>
                  <Image
                    src={tooltip}
                    alt="Explanation"
                    width={14}
                    height={14}
                  />
                </S.Tooltip>
              </Tippy>
            </S.TextVoting>
            <S.ValueVoting>
              {BNtoDecimal(governances.totalVotingPower, 0, 2)}
            </S.ValueVoting>
          </S.VotingDataCard>
          <S.VotingDataCard>
            <S.TextVoting>
              VOTING ADDRESSES
              <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
                <S.Tooltip>
                  <Image
                    src={tooltip}
                    alt="Explanation"
                    width={14}
                    height={14}
                  />
                </S.Tooltip>
              </Tippy>
            </S.TextVoting>
            <S.ValueVoting>{governances.votingAddresses}</S.ValueVoting>
          </S.VotingDataCard>
        </S.VotginCards>
      </S.Overview>
      {isModalWalletConnect && (
        <ModalWalletConnect setModalOpen={setIsModalWalletConnect} />
      )}
    </>
  )
}

export default Overview
