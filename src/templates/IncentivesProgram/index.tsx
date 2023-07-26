import Hero from './Hero'
import Questions from './Questions'
import VideoSection from './VideoSection'
import FeaturedManager from './FeaturedManager'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import JoinIncentiveProgram from './JoinIncentiveProgram'

import * as S from './styles'

const IncentivesProgram = () => {
  return (
    <S.IncentivesProgram>
      <S.BackgroundBall top={25} right={-60} />
      <S.BackgroundBall top={-10} left={-60} />
      <S.BackgroundBall top={120} left={-50} deg={0} />
      <S.IncentivesProgramWrapper>
        <Hero />
        <VideoSection />
        <FeaturedManager />
        <Questions />
        <QuestionsAndAnswers />
        <JoinIncentiveProgram />
      </S.IncentivesProgramWrapper>
      <S.BackgroundBall bottom={250} right={-50} deg={0} />
      <S.BackgroundBall bottom={110} right={-60} deg={0} />
      <S.BackgroundBall bottom={38} left={-60} deg={0} />
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
