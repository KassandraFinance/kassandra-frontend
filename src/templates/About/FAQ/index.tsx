import React from 'react'
import QuestionCard from './QuestionCard'

import * as S from './styles'

const FAQ = () => {
  return (
    <S.Container>
      <S.Icon>
        <img src="assets/FAQ-icon.svg" alt="" />
      </S.Icon>
      <S.Title>
        Frequently asked questions
        <S.Divider />
      </S.Title>
      <QuestionCard
        question="What is the difference between a business and a company?"
        answer="A business is a legal entity, while a company is a business entity that is incorporated."
      />
      <QuestionCard
        question="What is the difference between a business and a company?"
        answer="A business is a legal entity, while a company is a business entity that is incorporated."
      />
      <QuestionCard
        question="What is the difference between a business and a company?"
        answer="A business is a legal entity, while a company is a business entity that is incorporated."
      />
      <QuestionCard
        question="What is the difference between a business and a company?"
        answer="A business is a legal entity, while a company is a business entity that is incorporated."
      />
    </S.Container>
  )
}

export default FAQ
