import React from 'react'

import QuestionCard from '@/components/QuestionCard'

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
        question="What is KassandraDAO?"
        answer="Kassandra is an autonomous organization that connects users and investors by governing tokenized index funds that are easy to create and invest in."
      />
      <QuestionCard
        question="How does KACY acquire value?"
        answer="Every investment product created with Kassandra must hold a percentage of KACY tokens as part of its portfolio. This ensures that the success of dETFs will result in the growth of the KACY token value."
      />
      <QuestionCard
        question="How can I be part of KassandraDAO and contribute to it?"
        answer="Every KACY holder is a fundamental piece of the development of the DAO, and acquiring this status leads to rewards. When voting in governance proposals, KACY holders must lock their tokens for different periods of time to earn voting power, thus making KACY scarcer and the governance more secure."
      />
      <QuestionCard
        question="How does the token distribution work?"
        answer="You can read about our tokenomics "
        link="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
        linkText="here"
      />
    </S.Container>
  )
}

export default FAQ
