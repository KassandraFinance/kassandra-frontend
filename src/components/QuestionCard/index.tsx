import React from 'react'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'

import { FAQminus } from '@/Icons/FAQminus'
import { FAQmore } from '@/Icons/FAQmore'

import * as S from './styles'

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

  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <S.Question>
      <S.QuestionText
        background={background}
        onClick={() => {
          setIsOpen(!isOpen)
          trackEvent({
            category: router.pathname,
            action: `click-on-button | frequently-asked-questions | ${router.pathname}`,
            name: 'faq-question'
          })
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
