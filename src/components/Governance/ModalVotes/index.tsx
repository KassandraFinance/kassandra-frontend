import React from 'react'
import Image from 'next/image'

import substr from '../../../utils/substr'

import Button from '../../Button'

import * as S from './styles'

interface IModalVotes {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalVotes = ({ modalOpen, setModalOpen }: IModalVotes) => {
  function handleCloseModal() {
    setModalOpen(false)
  }

  const userList = [
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    },
    {
      address: '0xF84Db1d1868B03EaD9e799F55B4d1529687B691f',
      image: '/static/images/avatar-1.png',
      votingPower: '123,458.789 '
    }
  ]

  return (
    <>
      <S.Backdrop
        onClick={handleCloseModal}
        style={{ display: modalOpen ? 'block' : 'none' }}
      />
      <S.Container modalOpen={modalOpen}>
        <S.ModalHeaderContainer>
          <S.Close>
            <button type="button" onClick={() => setModalOpen(false)}>
              <img src="/assets/close.svg" alt="Close" />{' '}
            </button>
          </S.Close>
          <S.ModalHeader>
            <S.TotalPercentageAndVotes>
              <S.TotalPercentage>For - 73%</S.TotalPercentage>
              <S.TotalVotes>1,723,124</S.TotalVotes>
            </S.TotalPercentageAndVotes>
            <S.VoteBar>
              <S.VotesFavor></S.VotesFavor>
              <S.VotesAgainst></S.VotesAgainst>
            </S.VoteBar>
          </S.ModalHeader>
        </S.ModalHeaderContainer>
        <S.Thead>
          <S.Th>30 addresses</S.Th>
          <S.Th>Votes</S.Th>
        </S.Thead>
        <S.TableContainer>
          <S.Table>
            {/* <S.Divider /> */}
            <S.UserList>
              {userList.map(user => (
                <S.UserData key={user.address}>
                  <S.UserName>
                    <S.UserAvatar>
                      <Image src={user.image} alt="" width={18} height={18} />
                    </S.UserAvatar>
                    {substr(user.address)}
                  </S.UserName>
                  <S.UserVote>{user.votingPower}</S.UserVote>
                </S.UserData>
              ))}
            </S.UserList>
          </S.Table>
        </S.TableContainer>
        <S.ButtonWrapper>
          <Button
            text="Vote in favor"
            onClick={handleCloseModal}
            backgroundSecondary
          />
        </S.ButtonWrapper>
      </S.Container>
    </>
  )
}

export default ModalVotes
