import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useMatomo from '@/hooks/useMatomo'
import * as S from './styles'

interface IEventBannerProps {
  text: string
  textMobile: string
  link: string
  children: React.ReactNode
}

const EventBanner = ({
  text,
  textMobile,
  link,
  children
}: IEventBannerProps) => {
  const [isShowBanner, setIsShowBanner] = React.useState(true)
  const { trackEvent } = useMatomo()
  const router = useRouter()

  React.useEffect(() => {
    const clientWidth = document.documentElement.clientWidth
    if (router.route !== '/blog/[slug]' || clientWidth > 992) return

    const titleBarStyle = document.getElementById('titleBar')?.style
    const progressBackdrop = document.getElementById('progress-backdrop')?.style
    const progressFill = document.getElementById('progress-fill')?.style

    if (titleBarStyle && progressBackdrop && progressFill) {
      if (isShowBanner) {
        progressFill.top = '20rem'
        progressBackdrop.top = '20rem'
        titleBarStyle.top = '14rem'
      } else {
        titleBarStyle.top = '9.1rem'
        progressFill.top = '15.5rem'
        progressBackdrop.top = '15.5rem'
      }
    }
  }, [isShowBanner, router.route])

  return (
    <S.EventBanner
      id="event-banner"
      data-fixed={isShowBanner}
      isShowBanner={isShowBanner}
      isBlog={router.route === '/blog/[slug]'}
    >
      <S.EventBannerContent>
        <Link href={link} passHref>
          <S.BannerLink
            className="textDesktop"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | EventBanner | ${router.pathname}`,
                name: 'Take your pool to the next level.'
              })
            }
          >
            {text}
          </S.BannerLink>
        </Link>
        <Link href={link} passHref>
          <S.BannerLink
            className="textMobile"
            onClick={() =>
              trackEvent({
                category: router.pathname,
                action: `click-on-link | EventBanner | ${router.pathname}`,
                name: "Kassandra's Managers Incentive Program is noew live."
              })
            }
          >
            {textMobile}
          </S.BannerLink>
        </Link>

        <img
          src="/assets/utilities/close-icon.svg"
          alt=""
          onClick={() => setIsShowBanner(false)}
          width={16}
          height={16}
        />
      </S.EventBannerContent>

      {children}
    </S.EventBanner>
  )
}

export default EventBanner
