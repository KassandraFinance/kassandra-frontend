import Lottie from 'lottie-light-react'

import heimdallLoadingAnimation from '@/lottieAnimations/heimdall-loading.json'

type LoadingProps = React.CSSProperties

export const Loading = ({ height, width }: LoadingProps) => {
  return (
    <Lottie
      animationData={heimdallLoadingAnimation}
      style={{
        height,
        width
      }}
    />
  )
}
