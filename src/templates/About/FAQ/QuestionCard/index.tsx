import React from 'react'

import * as S from './styles'

interface QuestionCardProps {
  question: string;
  answer: string;
  link?: string;
  linkText?: string;
}

const QuestionCard = ({
  question,
  answer,
  link,
  linkText
}: QuestionCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <S.Question>
      <S.QuestionText onClick={() => setIsOpen(!isOpen)}>
        {question}
        {isOpen ? (
          <img src="assets/FAQ-minus-icon.svg" />
        ) : (
          <img src="assets/FAQ-more-icon.svg" />
        )}
      </S.QuestionText>
      <S.Answer isOpen={isOpen}>
        <S.AnswerText>
          {answer}
          {
            <a href={link} target="_blank" rel="noreferrer">
              {linkText}
            </a>
          }
        </S.AnswerText>
      </S.Answer>
    </S.Question>
  )
}

export default QuestionCard
