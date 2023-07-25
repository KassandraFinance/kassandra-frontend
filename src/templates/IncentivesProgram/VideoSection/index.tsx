import Paragraph from '@/components/Paragraph'

import * as S from './styles'
import SectionSubtitle from '@/components/SectionSubtitle'

const VideoSection = () => {
  return (
    <S.VideoSection>
      <S.VideoWrapper>
        <iframe
          title="video"
          src="https://www.youtube.com/embed/Bfm3Ms2cTg0"
          allowFullScreen
        />
      </S.VideoWrapper>

      <S.TextWrapper>
        <SectionSubtitle text="Empower Our Community" />
        <Paragraph text="Kassandra’s Manager Incentive Program is about fostering collaboration, encouraging community participation, and ultimately, elevating Kassandra as the go-to DeFi platform for managers and investors." />
      </S.TextWrapper>
    </S.VideoSection>
  )
}

export default VideoSection
