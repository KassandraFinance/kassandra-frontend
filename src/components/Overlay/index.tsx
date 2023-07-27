import * as S from './styles'

interface IOverlayProps {
  isOpen?: boolean
  onClick: () => void
  onAnimationEnd?: () => void
}

const Overlay = ({
  onClick,
  isOpen = true,
  onAnimationEnd = () => {
    return
  }
}: IOverlayProps) => {
  return (
    <S.Overlay
      isShowMenu={isOpen}
      onClick={onClick}
      onAnimationEnd={() => {
        if (isOpen === false) {
          onAnimationEnd()
        }
      }}
    />
  )
}

export default Overlay
