import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSelector, RootStateOrAny } from 'react-redux'
import Big from 'big.js'
import useSWR from 'swr'
import { request } from 'graphql-request'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'
import substr from '../../../utils/substr'

import Button from '../../../components/Button'
import ExternalLink from '../../../components/ExternalLink'
import ModalWalletConnect from '../../ModalWalletConnect'
import ModalManageVotingPower from '../ModalManageVotingPower'

import tooltip from '../../../../public/assets/icons/tooltip.svg'
import jony from '../../../../public/assets/team/jony-reis.png'

import { GET_USER } from './graphql'

import * as S from './styles'

const IntroWalletAddress = () => {
  // eslint-disable-next-line prettier/prettier
  const [isModalManageVotingPower, setIsModalManageVotingPower] = React.useState<boolean>(false)
  // eslint-disable-next-line prettier/prettier
  const [isModalWalletConnect, setIsModalWalletConnect] = React.useState<boolean>(false)
  const [voteWeight, setVoteWeight] = React.useState<string>('')

  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const router = useRouter()
  const { address } = router.query

  const { data } = useSWR([GET_USER], query =>
    request(SUBGRAPH_URL, query, { id: address })
  )

  React.useEffect(() => {
    if (data) {
      const vote = BNtoDecimal(
        Big(data.user.votingPower)
          .mul(100)
          .div(Big(data.governances[0].totalVotingPower)),
        18,
        2
      )
      setVoteWeight(vote)
      return
    }
    setVoteWeight('')
  }, [data])

  return (
    <>
      <S.IntroWalletAddress>
        <S.AddressAndVoteWeight>
          <S.WalletAddress>
            <Image src={jony} alt="" />
            <h2>
              {userWalletAddress
                ? substr(`${userWalletAddress}`)
                : substr('0x000000000')}
            </h2>
          </S.WalletAddress>
          <S.VoteWeightCard>
            <S.VoteWeight>
              <span>Vote Weight</span>
              <span className="font-bold">
                {voteWeight ? `${voteWeight}%` : '...'}
              </span>
            </S.VoteWeight>
          </S.VoteWeightCard>
        </S.AddressAndVoteWeight>
        <S.VotingPowerContent>
          <S.AddressTotalVotingPower>
            <span className="address-total-voting-power">
              TOTAL KACY STAKED
              <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
                <S.Tooltip>
                  <Image src={tooltip} alt="Explanation" />
                </S.Tooltip>
              </Tippy>
            </span>
            {userWalletAddress ? (
              <span className="value-total-voting-power">123,456.789</span>
            ) : (
              <Button
                onClick={() => setIsModalWalletConnect(true)}
                size="large"
                text="Connect Wallet"
                backgroundSecondary
              />
            )}
          </S.AddressTotalVotingPower>

          <S.AllVotingPowerCard>
            <S.ReceivedAndOwnedVotingPower>
              <S.OwnedVotingPower>
                <span className="gray-color">Owned Voting Power</span>
                <span className="bold">456.789</span>
              </S.OwnedVotingPower>
              <S.ReceivedVotingPower>
                <span className="gray-color">Received Voting Power</span>
                <span className="bold">123,000.000</span>
              </S.ReceivedVotingPower>
            </S.ReceivedAndOwnedVotingPower>
            <S.HorizontalLine none={true} />
            <S.VerticalLine />
            <S.ManageDelegation>
              <Button
                onClick={() => setIsModalManageVotingPower(true)}
                size="large"
                text="Manage Delegation"
                backgroundSecondary
              />
              <ExternalLink text="Obtain Voting Power" hrefNext="#" />
            </S.ManageDelegation>
          </S.AllVotingPowerCard>
        </S.VotingPowerContent>
      </S.IntroWalletAddress>
      {isModalManageVotingPower && (
        <ModalManageVotingPower
          modalOpen={isModalManageVotingPower}
          setModalOpen={setIsModalManageVotingPower}
        />
      )}
      {isModalWalletConnect && (
        <ModalWalletConnect
          modalOpen={isModalWalletConnect}
          setModalOpen={setIsModalWalletConnect}
        />
      )}
    </>
  )
}

export default IntroWalletAddress
