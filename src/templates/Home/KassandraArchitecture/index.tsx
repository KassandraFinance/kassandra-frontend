import React from 'react'

import * as S from './styles'

const KassandraArchitecture = () => {
  return (
    <S.Token>
      <p>DAO MEMBER BENEFITS</p>
      <S.Divider />
      <h1>Earn with Kassandra management</h1>
      <span>
        Joining a decentralized organization shouldn&#39;t be about
        responsibilities, but about earning money with it
      </span>
      <S.KassandraCardWrapper>
        <S.KassandraCard className="firstCard">
          <img
            src="assets/about-distribution-icon.svg"
            alt=""
            width="48"
            height="57"
          />
          <p>5% HOLDING RULE</p>
          <h1>Growing $KACY value</h1>
          <span>
            Every investment product created with Kassandra must hold at least
            5% of $KACY tokens as part of its portfolio. This ensures that the
            success of the products will result in the growth of the $KACY token
            value.
          </span>
        </S.KassandraCard>
        <S.KassandraCard className="secondCard">
          <img src="assets/feeIcon.svg" alt="" />
          <p>3% REDEEM FEE</p>
          <h1>Flowing revenue to the DAO</h1>
          <span>
            A 3% fee is charged whenever investment tokens are redeemed. The
            fees collected this way are under total governance control and can
            be used for purchasing and subsequently burn $KACY tokens.
          </span>
        </S.KassandraCard>
        <S.KassandraCard className="thirdCard">
          <img src="assets/voteIcon.svg" alt="" width="52" height="45" />
          <p>VOTE LOCK</p>
          <h1>Making $KACY scarse</h1>
          <span>
            When voting in governance proposals $KACY holders may choose to lock
            their tokens for different time periods and earn more voting power,
            thus making $KACY more scarce and the governance more secure.
          </span>
        </S.KassandraCard>
      </S.KassandraCardWrapper>
    </S.Token>
  )
}

export default KassandraArchitecture
