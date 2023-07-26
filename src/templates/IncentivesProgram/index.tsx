import Hero from './Hero'
import JoinIncentiveProgram from './JoinIncentiveProgram'
import Questions from './Questions'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import VideoSection from './VideoSection'
import FeaturedManager from './FeaturedManager'

import * as S from './styles'

const IncentivesProgram = () => {
  return (
    <S.IncentivesProgram>
      <S.IncentivesProgramWrapper>
        <Hero />
        <VideoSection />
        <FeaturedManager />
        <Questions />
        <QuestionsAndAnswers />
        <JoinIncentiveProgram />
      </S.IncentivesProgramWrapper>
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
