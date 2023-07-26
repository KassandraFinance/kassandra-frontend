import Subtitle from '@/components/Subtitle'
import CircleGradient from '@/components/CircleGradient'
import FAQ from './FAQ'
import FadeInVertical from '@/components/Animations/FadeInVertical'

import * as S from './styles'

const QuestionsAndAnswers = () => {
  return (
    <S.QuestionsAndAnswers>
      <FadeInVertical threshold={0.4}>
        <S.QuestionsAndAnswersHeader>
          <CircleGradient text="?" width={4.4} height={4.4} />
          <Subtitle text="Questions & Answers" />
          <S.Hr />
        </S.QuestionsAndAnswersHeader>
      </FadeInVertical>
      <FadeInVertical threshold={0.4}>
        <FAQ />
      </FadeInVertical>
    </S.QuestionsAndAnswers>
  )
}

export default QuestionsAndAnswers
