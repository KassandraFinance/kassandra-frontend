import React from 'react'
import useMatomoEcommerce from '@/hooks/useMatomoEcommerce'

import * as S from './styles'
import { FAQminus } from '@/Icons/FAQminus'
import { FAQmore } from '@/Icons/FAQmore'

interface QuestionCardProps {
  question: string
  answer: string
  background?: string
  link?: string
  linkText?: string
}

const QuestionCard = ({
  question,
  answer,
  background = 'linear-gradient(134deg, #333437 0%, #1B1D22 100%)',
  link,
  linkText
}: QuestionCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <S.Question>
      <S.QuestionText
        background={background}
        onClick={() => {
          setIsOpen(!isOpen)
          trackEventFunction(
            'click-on-button',
            'frequently-asked-questions',
            'faq'
          )
        }}
      >
        <p>{question}</p>
        <S.IconWrapper>
          {isOpen ? (
            <FAQminus width="16" height="16" />
          ) : (
            <FAQmore width="16" height="16" />
          )}
        </S.IconWrapper>
      </S.QuestionText>
      <S.Answer isOpen={isOpen}>
        <S.Answer isOpen={isOpen}>
          <S.AnswerText dangerouslySetInnerHTML={{ __html: answer }} />
          <a href={link} target="_blank" rel="noreferrer">
            {linkText}
          </a>
        </S.Answer>
      </S.Answer>
    </S.Question>
  )
}

export default QuestionCard
