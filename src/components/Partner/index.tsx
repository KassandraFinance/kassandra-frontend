import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

import useMatomo from '@/hooks/useMatomo'
export interface PartnerData {
  href: string
  image: {
    src: StaticImageData
    width: number
    height: number
  }
  name: string
}

const Partner = ({ href, image, name }: PartnerData) => {
  const { trackEvent } = useMatomo()
  const router = useRouter()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEvent({
          category: router.pathname,
          action: `click-on-link | Partner | ${router.pathname}`,
          name: `${name}`
        })
      }
    >
      <Image
        src={image.src}
        alt={name}
        width={image.width}
        height={image.height}
      />
    </a>
  )
}

export default Partner
