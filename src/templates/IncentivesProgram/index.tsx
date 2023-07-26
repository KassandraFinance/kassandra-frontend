import Hero from './Hero'
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
      </S.IncentivesProgramWrapper>
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
