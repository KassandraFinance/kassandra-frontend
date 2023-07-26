import Paragraph from '@/components/Paragraph'
import FadeIn from '@/components/Animations/FadeIn'
import SectionSubtitle from '@/components/SectionSubtitle'

import * as S from './styles'

const YOUTUBE_LINK_INCENTIVE_PROGRAM =
  'https://www.youtube.com/embed/Bfm3Ms2cTg0'

const VideoSection = () => {
  return (
    <S.VideoSection>
      <FadeIn threshold={0.2}>
        <S.VideoWrapper>
          <iframe
            title="video"
            src={YOUTUBE_LINK_INCENTIVE_PROGRAM}
            allowFullScreen
          />
        </S.VideoWrapper>
      </FadeIn>

      <S.TextWrapper>
        <SectionSubtitle text="Empower Our Community" />
        <Paragraph text="Kassandra’s Manager Incentive Program is about fostering collaboration, encouraging community participation, and ultimately, elevating Kassandra as the go-to DeFi platform for managers and investors." />
      </S.TextWrapper>
    </S.VideoSection>
  )
}

export default VideoSection
