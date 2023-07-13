import React from 'react'

import { useMatomo as rawUseMatomo } from '@datapunt/matomo-tracker-react'

type TrackPageViewOptions = {
  documentTitle?: string
  href?: string
  customDimensions?: {
    id: number
    value: string
  }[]
}

type UseMatomoProps = {
  trackPageView?: true | TrackPageViewOptions
}

const useMatomo = (props?: UseMatomoProps) => {
  const { trackPageView, trackEvents, trackEvent, trackLink, trackSiteSearch } =
    rawUseMatomo()

  React.useEffect(() => {
    if (!props?.trackPageView) return

    const isObjectEmpty = Object.keys(props.trackPageView).length === 0

    if (props.trackPageView === true || isObjectEmpty) {
      trackPageView({})
      return
    }

    trackPageView(props.trackPageView)
  }, [props?.trackPageView, trackPageView])

  return { trackEvents, trackEvent, trackSiteSearch, trackLink, trackPageView }
}

export default useMatomo
