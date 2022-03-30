import React from 'react'
import Image from 'next/image'
import router from 'next/router'
import useSWR from 'swr'
import BigNumber from 'bn.js'
import { request } from 'graphql-request'

import { GET_MODALVOTES } from './graphql'
import { SUBGRAPH_URL } from '../../../constants/tokenAddresses'

import substr from '../../../utils/substr'
import { BNtoDecimal } from '../../../utils/numerals'

import ImageAddress from '../../../../public/assets/team/jony-reis.png'

import Button from '../../Button'

import * as S from './styles'

interface IModalVotes {
  voteType: string;
  percentage: string;
  totalVotingPower: string;
  checkAllVoterModal: boolean;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IModalVotesList {
  support: boolean;
  voter: {
    id: string
  };
  votingPower: BigNumber;
}

const ModalVotes = ({
  isModalOpen,
  setIsModalOpen,
  voteType,
  percentage,
  totalVotingPower,
  checkAllVoterModal
}: IModalVotes) => {
  // eslint-disable-next-line prettier/prettier
  const [modalVotesList, setModalVotesList] = React.useState<IModalVotesList[]>([])

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  const { data } = useSWR(
    () => isModalOpen && [GET_MODALVOTES],
    query =>
      request(SUBGRAPH_URL, query, {
        number: Number(router.query.proposal),
        support: checkAllVoterModal
      })
  )

  React.useEffect(() => {
    if (data) {
      const votes = data.proposals[0].votes.map((prop: IModalVotesList) => {
        return {
          support: prop.support,
          voter: {
            id: prop.voter.id
          },
          votingPower: prop.votingPower
        }
      })

      setModalVotesList(votes)
    }
  }, [data])

  return (
    <>
      <S.Backdrop onClick={handleCloseModal} />

      <S.Container modalOpen={isModalOpen}>
        <S.ModalHeaderContainer>
          <S.Close>
            <button type="button" onClick={() => handleCloseModal()}>
              <img src="/assets/close.svg" alt="Close Modal Votes" />{' '}
            </button>
          </S.Close>
          <S.ModalHeader>
            <S.TotalPercentageAndVotes>
              <S.TotalPercentage>
                {voteType} - {percentage}%
              </S.TotalPercentage>
              <S.TotalVotes>{totalVotingPower}</S.TotalVotes>
            </S.TotalPercentageAndVotes>
            <S.VoteBar>
              <S.ProgressBar
                VotingState={voteType}
                value={percentage}
                max="100"
              />
            </S.VoteBar>
          </S.ModalHeader>
        </S.ModalHeaderContainer>
        <S.Thead>
          <S.Th>{modalVotesList.length} addresses</S.Th>
          <S.Th>Votes</S.Th>
        </S.Thead>
        <S.TableContainer>
          <S.Table>
            <S.UserList>
              {modalVotesList.map(user => (
                <S.UserData key={user.voter.id}>
                  <S.UserName>
                    <S.UserAvatar>
                      <Image
                        src={ImageAddress}
                        alt="user wallet photo Modal Votes"
                        width={18}
                        height={18}
                      />
                    </S.UserAvatar>
                    {substr(user.voter.id)}
                  </S.UserName>
                  <S.UserVote>{BNtoDecimal(user.votingPower, 0, 2)}</S.UserVote>
                </S.UserData>
              ))}
            </S.UserList>
          </S.Table>
        </S.TableContainer>
        <S.ButtonWrapper>
          <Button
            text={voteType === 'For' ? 'Vote in Favor' : 'Vote Against'}
            onClick={handleCloseModal}
            backgroundSecondary
          />
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
}

export default ModalVotes
