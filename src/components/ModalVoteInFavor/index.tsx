import React from 'react'
import Button from '../Button'

import * as S from './styles'

interface IModalVoteInFavor {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalVoteInFavor = ({ modalOpen, setModalOpen }: IModalVoteInFavor) => {
  function handleCloseModal() {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop
        onClick={handleCloseModal}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.Container modalOpen={modalOpen}>
        <S.ModalTop>
          <S.TotalPercentage>For - 73%</S.TotalPercentage>
          <S.TotalVotes>1,723,124</S.TotalVotes>
        </S.ModalTop>
        <S.VoteBar></S.VoteBar>
        <S.ModalContent>
          <S.ModalContentTitle>
            <S.AddressTotal>30 address</S.AddressTotal>
            <S.Votes>Votes</S.Votes>
          </S.ModalContentTitle>
          <S.UserList>
            <S.UserName>User 1</S.UserName>
            <S.UserVote>User 2</S.UserVote>
          </S.UserList>
        </S.ModalContent>
        <Button
          text="Vote in favor"
          onClick={handleCloseModal}
          backgroundSecondary
        />
      </S.Container>
    </>
  )
}

export default ModalVoteInFavor
