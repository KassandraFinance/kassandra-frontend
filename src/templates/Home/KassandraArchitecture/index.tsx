import React from 'react'

import * as S from './styles'

const KassandraArchitecture = () => {
  return (
    <S.Container>
      <S.Token>
        <p>OUR PROJECTS</p>
        <S.Divider />
        <h1>Earn with the success of the Kassandra products</h1>
        <span>Tokens backed by a basket of assets, managed by autonomous strategies with data from external data providers</span>
        <S.KassandraCardWrapper>
          <S.KassandraCard>
            <img src="assets/holdingIcon.png" alt="" />
            <p>5% HOLDING RULE</p>
            <h1>Each launching values $KACY</h1>
            <span>Every new investment product created on Kassandra must hold at least 5% of $KACY tokens as part of its portfolio. This ensures that the success of the products will result in the growth of the $KACY token value.</span>
          </S.KassandraCard>
          <S.KassandraCard className='secondCard'>
            <img src="assets/feeIcon.png" alt="" />
            <p>3% REDEEM FEE</p>
            <h1>Each launching values $KACY</h1>
            <span>A 3% fee is charged whenever investment tokens are redeemed. The fees collected this way are under total governance control and can be used for purchasing and subsequently burn $KACY tokens.</span>
          </S.KassandraCard>
          <S.KassandraCard className="thirdCard">
            <img src="assets/voteIcon.png" alt="" />
            <p>VOTE LOCK</p>
            <h1>Each launching values $KACY</h1>
            <span>When voting in governance proposals $KACY holders may choose to lock their tokens for different time periods and earn more voting power, thus making $KACY more scarce and the governance more secure.</span>
          </S.KassandraCard>
        </S.KassandraCardWrapper>
      </S.Token>
    </S.Container>
  )
}

export default KassandraArchitecture
