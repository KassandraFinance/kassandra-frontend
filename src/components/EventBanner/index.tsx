import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
  const router = useRouter()

  return (
    <S.EventBanner
      id="event-banner"
      data-fixed={isShowBanner}
      isShowBanner={isShowBanner}
      isBlog={router.asPath === 'Blog'}
    >
      <S.EventBannerContent>
        <Link href={link} passHref>
          <S.BannerLink className="textDesktop">{text}</S.BannerLink>
        </Link>
        <Link href={link} passHref>
          <S.BannerLink className="textMobile">{textMobile}</S.BannerLink>
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
