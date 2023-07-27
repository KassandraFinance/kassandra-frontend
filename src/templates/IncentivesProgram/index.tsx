import Hero from './Hero'
import Questions from './Questions'
import VideoSection from './VideoSection'
import FeaturedManager from './FeaturedManager'
import QuestionsAndAnswers from './QuestionsAndAnswers'
import JoinIncentiveProgram from './JoinIncentiveProgram'
import FadeIn from '@/components/Animations/FadeIn'
import FadeInVertical from '@/components/Animations/FadeInVertical'

import * as S from './styles'

const IncentivesProgram = () => {
  return (
    <S.IncentivesProgram>
      <S.BackgroundBall top={25} right={-60} />
      <S.BackgroundBall top={-10} left={-60} />
      <S.BackgroundBall top={120} left={-50} deg={0} />
      <S.IncentivesProgramWrapper>
        <FadeIn threshold={0.5}>
          <Hero />
        </FadeIn>
        <VideoSection />
        <FeaturedManager />
        <Questions />
        <QuestionsAndAnswers />
        <FadeInVertical threshold={0.5}>
          <JoinIncentiveProgram />
        </FadeInVertical>
      </S.IncentivesProgramWrapper>
      <S.BackgroundBall bottom={250} right={-50} deg={0} />
      <S.BackgroundBall bottom={110} right={-60} deg={0} />
      <S.BackgroundBall bottom={38} left={-60} deg={0} />
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
