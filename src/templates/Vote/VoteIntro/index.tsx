import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import overview from '../../../../public/assets/iconGradient/overview.svg'
import tooltip from '../../../../public/assets/icons/tooltip.svg'

import * as S from '../styles'

export const VoteIntro = () => {
  return (
    <>
      <S.Title>
        <S.TitleContent>
          <Image src={overview} />
          <h1>Overview</h1>
        </S.TitleContent>
        <h2>Velit lacus vel porta purus</h2>
      </S.Title>
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
          <S.ValueVoting>123,456.789</S.ValueVoting>
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
          <S.ValueVoting>987,123,456.789</S.ValueVoting>
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
          <S.ValueVoting>1,456</S.ValueVoting>
        </S.VotingDataCard>
      </S.VotginCards>
      <S.Links>
        <Link href="/farm">
          <a>
            Obtain more
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.2L12.2 8.99999L9 5.79999"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7998 9H12.1998"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Link>
        <Link href="/farm">
          <a>
            Manage Delegation
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.2L12.2 8.99999L9 5.79999"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.7998 9H12.1998"
                stroke="#F1F0F1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </Link>
      </S.Links>
    </>
  )
}
