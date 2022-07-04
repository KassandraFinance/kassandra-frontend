import React from 'react'
import useMatomoEcommerce from '../../../../hooks/useMatomoEcommerce'

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

  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.Question>
      <S.QuestionText
        onClick={() => {
          setIsOpen(!isOpen)
          trackEventFunction(
            'click-on-button',
            'frequently-asked-questions',
            'faq'
          )
        }}
      >
        {question}
        {isOpen ? (
          <img src="assets/iconGradient/FAQ-minus.svg" />
        ) : (
          <img src="assets/iconGradient/FAQ-more.svg" />
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
