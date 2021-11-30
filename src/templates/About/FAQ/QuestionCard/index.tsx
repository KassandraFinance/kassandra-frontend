import React from 'react'

import * as S from './styles'

interface QuestionCardProps {
  question: string;
  answer: string;
}

const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Question onClick={() => setIsOpen(!isOpen)}>
      <S.QuestionText>
        {question}
        {isOpen ? (
          <img src="assets/FAQ-minus-icon.svg" />
        ) : (
          <img src="assets/FAQ-more-icon.svg" />
        )}
      </S.QuestionText>
      <S.Answer isOpen={isOpen}>
        <S.AnswerText>{answer}</S.AnswerText>
      </S.Answer>
    </S.Question>
  )
}

export default QuestionCard
