import Hero from './Hero'
import Questions from './Questions'

import * as S from './styles'

const IncentivesProgram = () => {
  return (
    <S.IncentivesProgram>
      <S.IncentivesProgramWrapper>
        <Hero />

        <S.VideoWrapper>
          <div>Video</div>
        </S.VideoWrapper>
        <Questions />
      </S.IncentivesProgramWrapper>
    </S.IncentivesProgram>
  )
}

export default IncentivesProgram
