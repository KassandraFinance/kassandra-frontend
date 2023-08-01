import React from 'react'
import Link from 'next/link'

import * as S from './styles'

interface IEventBannerProps {
  text: string
  link: string
  children: React.ReactNode
}

const EventBanner = ({ text, link, children }: IEventBannerProps) => {
  const [isShowBanner, setIsShowBanner] = React.useState(true)

  return (
    <S.EventBanner isShowBanner={isShowBanner}>
      <S.EventBannerContent>
        <Link href={link} passHref>
          <S.BannerLink>{text}</S.BannerLink>
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
