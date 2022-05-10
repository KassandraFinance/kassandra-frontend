import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

export interface PartnerData {
  href: string;
  image: {
    src: StaticImageData,
    width: number,
    height: number
  };
  name: string;
}

const Partner = ({ href, image, name }: PartnerData) => {
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'powered-invest',
      action,
      name
    })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => matomoEvent('click-on-partner', name)}
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
