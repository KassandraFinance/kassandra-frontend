import Subtitle from '@/components/Subtitle'
import CircleGradient from '@/components/CircleGradient'
import FAQ from './FAQ'

import * as S from './styles'

const QuestionsAndAnswers = () => {
  return (
    <S.QuestionsAndAnswers>
      <S.QuestionsAndAnswersHeader>
        <CircleGradient text="?" width={4.4} height={4.4} />
        <Subtitle text="Questions & Answers" />
        <S.Hr />
      </S.QuestionsAndAnswersHeader>
      <FAQ />
    </S.QuestionsAndAnswers>
  )
}

export default QuestionsAndAnswers
