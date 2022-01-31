import React from 'react'
import Image from 'next/image'

import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import tooltip from '../../../../public/assets/icons/tooltip.svg'

import * as S from './styles'

export const Overview = () => {
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
    </S.Overview>
  )
}

export default Overview
