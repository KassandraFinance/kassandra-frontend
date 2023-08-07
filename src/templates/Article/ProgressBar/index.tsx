import React from 'react'

import * as S from '../styles'

type ArticleProgressBarProps = {
  markdownContainerRef: React.RefObject<HTMLDivElement>
  headerContentRef: React.RefObject<HTMLDivElement>
}

export const ProgressBar = ({
  markdownContainerRef,
  headerContentRef
}: ArticleProgressBarProps) => {
  const [scrollProgress, setScrollProgress] = React.useState(0)
  const [totalScroll, setTotalScroll] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => {
      const markdownContentHeight =
        markdownContainerRef.current?.offsetHeight ?? 0
      const headerContentHeight = headerContentRef.current?.offsetHeight ?? 0
      // offset used to reach 100% when the last paragraph reaches about the middle of the screen
      const offsetToReachHundredPercent = 550

      const totScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const progress =
        (totScroll +
          windowHeight -
          markdownContentHeight -
          headerContentHeight +
          offsetToReachHundredPercent) /
        windowHeight

      setTotalScroll(totScroll)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [headerContentRef, markdownContainerRef])

  return (
    <S.ArticleProgressBar style={{ opacity: `${totalScroll === 0 ? 0 : 1}` }}>
      <span id="progress-backdrop" />
      <span
        id="progress-fill"
        style={{
          width: `${scrollProgress * 100 > 100 ? 100 : scrollProgress * 100}%`
        }}
      />
    </S.ArticleProgressBar>
  )
}
