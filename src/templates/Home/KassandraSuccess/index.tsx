import React from 'react'

import * as S from './styles'

const KassandraSuccess = () => {
  return (
    <S.KassandraSuccess>
      <h1>Earn with the success of the Kassandra products</h1>
      <p>Like traditional fund managers, the $KACY token holders
        benefit directly and indirectly from the investment products
        deployed on Kassandra Protocol</p>
      <S.Success>
        <S.SuccessItem>
          <img src="assets/group-success-5percent.svg" alt="5%" />
          <h2>$KACY Holding Rule</h2>
          <p>To flow value to $KACY token holders, every Kassandra investment product must hold at least 5% of $KACY tokens as part of the portfolio. This ensures that the success of the products will result in the growth of the $KACY token value.</p>
        </S.SuccessItem>
        <S.SuccessItem>
          <img src="assets/group-success-3percent.svg" alt="3%" />
          <h2>Redeem Fee</h2>
          <p>A 3% fee is charged whenever investment tokens are redeemed. The fees collected this way are under total governance control and can be used for purchasing and subsequently burn $KACY tokens.</p>
        </S.SuccessItem>
        <S.SuccessItem>
          <img src="assets/group-success-vote.svg" alt="" />
          <h2>Vote Lock</h2>
          <p>When voting in governance proposals $KACY holders may choose to lock their tokens for different time periods and earn more voting power, thus making $KACY more scarce and the governance more secure.</p>
        </S.SuccessItem>
      </S.Success>
    </S.KassandraSuccess>
  )
}

export default KassandraSuccess