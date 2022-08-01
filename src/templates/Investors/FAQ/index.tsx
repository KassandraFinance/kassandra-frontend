import React from 'react'
import QuestionCard from './QuestionCard'

import * as S from './styles'

const FAQ = () => {
  return (
    <S.Container>
      <S.Icon>
        <img src="assets/iconGradient/FAQ.svg" alt="" />
      </S.Icon>
      <S.Title>
        Frequently asked questions
        <S.Divider />
      </S.Title>
      <QuestionCard
        question="What is Kassandra?"
        answer="Kassandra is an autonomous organization that governs tokenized data-driven investment funds."
      />
      <QuestionCard
        question="Does Kassandra have a native token?"
        answer="Yes! KACY is the native token of the Kassandra DAO."
      />
      <QuestionCard
        question="How does KACY acquire value?"
        answer="Every investment product created with Kassandra must hold at least 5% of $KACY tokens as part of its portfolio. This ensures that the success of the products will result in the growth of the $KACY token value."
      />
      <QuestionCard
        question="How to be part of the Kassandra ecosystem?"
        answer="Every KACY holder is a fundamental part in the development of the DAO, and acquiring this status leads to rewards. When voting in governance proposals $KACY holders must lock their tokens for different time periods to earn voting power, thus making $KACY scarcer and the governance more secure."
      />
      <QuestionCard
        question="What is a data-driven investment fund?"
        answer={`Data-driven investment funds are funds that make their allocation decisions based on specific pieces of market data.
        `}
      />
      <QuestionCard
        question="What kinds of market data does Kassandra takes into consideration to build its fund portfolio?"
        answer={`Any kind of data can be plugged into our products, leading to multiple possibilities of investment strategies.`}
      />
      <QuestionCard
        question="What is 'social score'?"
        answer="The social score is a key metric measuring the social relevance of users, tweets, and whole communities. It’s heavily based on graph theory and was inspired by Google’s search engine algorithm.
        You can find more information on the following "
        link="https://medium.com/heimdall-research-crypto/heimdall-69ca860e2d94"
        linkText="link"
      />
      <QuestionCard
        question="How does the token distribution works?"
        answer="You can read our full tokenomics "
        link="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
        linkText="here"
      />
    </S.Container>
  )
}

export default FAQ
