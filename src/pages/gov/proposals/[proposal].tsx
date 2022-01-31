import { useRouter } from 'next/router'
import Image from 'next/image'
import { useSelector, RootStateOrAny } from 'react-redux'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import VoteCard from '../../../components/VoteCard'
import VotingPower from '../../../components/VotingPower'

import useStakingContract from '../../../hooks/useStakingContract'

import substr from '../../../utils/substr'

import { Staking } from '../../../constants/tokenAddresses'

import * as S from './styles'
import proposals from '../../../../public/assets/iconGradient/proposals.svg'

export default function Index() {
  const kacyStake = useStakingContract(Staking)
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const router = useRouter()
  const { proposal } = router.query

  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
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
            <a href="#">
              Obtain more voting power
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 16C12.6421 16 16 12.6421 16 8.5C16 4.35786 12.6421 1 8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 11.5L11.5 8.5L8.5 5.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 8.5H11.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </S.VotingPowerAndLink>
        </S.TitleWrapper>
        <S.VoteCardWrapper>
          <VoteCard
            typeVote="For"
            percentage="73"
            totalVotingPower="1,723,124"
          />
          <VoteCard
            typeVote="Against"
            percentage="27"
            totalVotingPower="1,723,124"
          />
        </S.VoteCardWrapper>
      </S.VoteContent>
    </S.BackgroundVote>
  )
}
