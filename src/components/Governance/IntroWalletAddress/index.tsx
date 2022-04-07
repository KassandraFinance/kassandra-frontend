import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import substr from '../../../utils/substr'

import Button from '../../../components/Button'
import ExternalLink from '../../../components/ExternalLink'
import ModalManageVotingPower from '../ModalManageVotingPower'

import tooltip from '../../../../public/assets/icons/tooltip.svg'

import * as S from './styles'

const WalletAddress = () => {
  const [isModalManageVotingPower, setIsModalManageVotingPower] =
    React.useState<boolean>(false)
  const router = useRouter()
  const { address }: any = router.query

  return (
    <>
      <S.IntroWalletAddress>
        <S.AddressAndVoteWeight>
          <S.WalletAddress>
            <Jazzicon diameter={40} seed={jsNumberForAddress(address)} />
            <h2>{substr(`${address}`)}</h2>
          </S.WalletAddress>
          <S.VoteWeightCard>
            <S.VoteWeight>
              <span>Vote Weight</span>
              <span className="font-bold">12,95%</span>
            </S.VoteWeight>
            <S.HorizontalLine />
            <S.Rank>
              <span>Rank</span>
              <span className="font-bold">10</span>
            </S.Rank>
          </S.VoteWeightCard>
        </S.AddressAndVoteWeight>
        <S.VotingPowerContent>
          <S.AllVotingPowerCard>
            <S.AddressTotalVotingPower>
              <span className="address-total-voting-power">
                Address Total Voting Power
                <Tippy content="Voting power allows you to create and vote on proposals. To obtain voting power you need to stake your $KACY tokens.">
                  <S.Tooltip>
                    <Image src={tooltip} alt="Explanation" />
                  </S.Tooltip>
                </Tippy>
              </span>
              <span className="value-total-voting-power">123,456.789</span>
            </S.AddressTotalVotingPower>
            <S.HorizontalLine none={true} />
            <S.VerticalLine />
            <S.ReceivedAndOwnedVotingPower>
              <S.OwnedVotingPower>
                <span>Owned Voting Power</span>
                <span className="bold">456.789</span>
              </S.OwnedVotingPower>
              <S.ReceivedVotingPower>
                <span>Received Voting Power</span>
                <span className="bold">123,000.000</span>
              </S.ReceivedVotingPower>
            </S.ReceivedAndOwnedVotingPower>
          </S.AllVotingPowerCard>
          <S.ManageDelegation>
            <Button
              onClick={() => setIsModalManageVotingPower(true)}
              size="large"
              text="Manage Delegation"
              backgroundSecondary
            />
            <ExternalLink text="Obtain Voting Power" hrefNext="#" />
          </S.ManageDelegation>
        </S.VotingPowerContent>
      </S.IntroWalletAddress>
      <ModalManageVotingPower
        modalOpen={isModalManageVotingPower}
        setModalOpen={setIsModalManageVotingPower}
      />
    </>
  )
}

export default WalletAddress
