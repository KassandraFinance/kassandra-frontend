import React from 'react'

import Subtitle from '@/components/Subtitle'
import Paragraph from '@/components/Paragraph'

import * as S from './styles'

const Questions = () => {
  React.useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <S.Questions>
      <S.QuestionsText>
        <Subtitle text="Got a Questions?" />
        <Paragraph text="We understand the importance of personalized support in bringing your pool to success. Book a meeting with our team to discuss your ideas, address any questions or concerns, and receive guidance throughout the process." />
      </S.QuestionsText>
      <S.QuestionsWidget
        className="calendly-inline-widget"
        data-url="https://calendly.com/guilhermescorrea20/30min"
      />
    </S.Questions>
  )
}

export default Questions
