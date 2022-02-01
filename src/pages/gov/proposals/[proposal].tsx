import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import VoteCard from '../../../components/Governance/VoteCard'
import VotingPower from '../../../components/VotingPower'

import useStakingContract from '../../../hooks/useStakingContract'

import substr from '../../../utils/substr'

import { Staking } from '../../../constants/tokenAddresses'

import * as S from './styles'
import proposals from '../../../../public/assets/iconGradient/proposals.svg'
import ExternalLink from '../../../components/ExternalLink'
import ModalVotes from '../../../components/Governance/ModalVotes'

export type ModalProps = {
  voteType: string,
  percentage: string,
  totalVotingPower: string,
  totalAddresses: string
}

export default function Index() {
  const [modalVotes, setModalVotes] = React.useState<ModalProps | undefined>(
    undefined
  )

  const kacyStake = useStakingContract(Staking)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const router = useRouter()
  const { proposal } = router.query

  return (
    <>
      <S.BackgroundVote>
        <Header />
        <S.VoteContent>
          <S.DesktopScreen>
            <S.TitleWrapper>
              <S.TitleAndAuthor>
                <TitleSection image={proposals} title={'Proposta 01'} />
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Image
                    src={'/assets/avatar-author-proposal.svg'}
                    width={32}
                    height={32}
                  />
                  <span>
                    {substr('0xF84Db1d1868B03EaD9e799F55B4d1529687B691f')}
                  </span>
                </S.ProposeAuthorCard>
              </S.TitleAndAuthor>
              <S.VotingPowerAndLink>
                <VotingPower
                  getTotalVotes={kacyStake.totalVotes}
                  getCurrentVotes={kacyStake.currentVotes}
                  userWalletAddress={userWalletAddress}
                />
                <ExternalLink text={'Obtain more voting power'} href={'#'} />
              </S.VotingPowerAndLink>
            </S.TitleWrapper>
          </S.DesktopScreen>

          <S.MobileScreen>
            <S.TitleWrapper>
              <TitleSection image={proposals} title={'Proposta 01'} />
              <S.CardTitleWrapper>
                <S.VotingPowerAndLink>
                  <VotingPower
                    getTotalVotes={kacyStake.totalVotes}
                    getCurrentVotes={kacyStake.currentVotes}
                    userWalletAddress={userWalletAddress}
                  />
                  <ExternalLink text={'Obtain more voting power'} href={'#'} />
                </S.VotingPowerAndLink>
                <S.ProposeAuthorCard>
                  <p>Proposed by</p>
                  <Image
                    src={'/assets/avatar-author-proposal.svg'}
                    width={24}
                    height={24}
                  />
                  <span>
                    {substr('0xF84Db1d1868B03EaD9e799F55B4d1529687B691f')}
                  </span>
                </S.ProposeAuthorCard>
              </S.CardTitleWrapper>
            </S.TitleWrapper>
          </S.MobileScreen>

          <S.VoteCardWrapper>
            <VoteCard
              typeVote="For"
              percentage="73"
              totalVotingPower="1,723,124"
              onClickLink={() => {
                setModalVotes({
                  voteType: 'For',
                  percentage: '73',
                  totalVotingPower: '1,723,124',
                  totalAddresses: '1,723,124'
                })
              }}
            />
            <VoteCard
              typeVote="Against"
              percentage="27"
              totalVotingPower="1,723,124"
              onClickLink={() => {
                setModalVotes({
                  voteType: 'Against',
                  percentage: '27',
                  totalVotingPower: '1,723,124',
                  totalAddresses: '30'
                })
              }}
            />
          </S.VoteCardWrapper>
        </S.VoteContent>
      </S.BackgroundVote>
      {modalVotes && (
        <ModalVotes
          voteType={modalVotes.voteType}
          percentage={modalVotes.percentage}
          totalVotingPower={modalVotes.totalVotingPower}
          totalAddresses={modalVotes.totalAddresses}
          modalOpen={!!modalVotes}
          onClose={() => setModalVotes(undefined)}
        />
      )}
    </>
  )
}
