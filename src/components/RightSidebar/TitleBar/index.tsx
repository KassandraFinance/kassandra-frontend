import { ChevronIcon } from '@/Icons'
import * as S from './styles'

interface ITitleBarProps {
  handleSidebarButton: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>,
    slug?: string
  ) => void
  postTitle: string
  isContentShowing: boolean
}

const TitleBar = ({
  handleSidebarButton,
  postTitle,
  isContentShowing
}: ITitleBarProps) => {
  return (
    <S.TitleBar id="titleBar" onClick={handleSidebarButton}>
      <S.TitleBarTextWrapper>
        <S.TitleBarText>
          <p className="title">{postTitle}</p>
          <p className="content">Table of Contents</p>
        </S.TitleBarText>

        <S.TitleBarButton rotated={isContentShowing}>
          <ChevronIcon width={24} height={24} />
        </S.TitleBarButton>
      </S.TitleBarTextWrapper>
    </S.TitleBar>
  )
}

export default TitleBar
