import Hero from './Hero'
import Questions from './Questions'
import VideoSection from './VideoSection'

import * as S from './styles'

const IncentivesProgram = () => {
  return (
    <S.IncentivesProgram>
      <S.IncentivesProgramWrapper>
        <Hero />
        <VideoSection />
        <Questions />
      </S.IncentivesProgramWrapper>
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
