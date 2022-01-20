import React from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

export interface PartnerData {
  href: string;
  image: any; // eslint-disable-line @typescript-eslint/no-explicit-any
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
      <img
        src={image.src}
        alt={name}
        width={image.width}
        height={image.height}
      />
    </a>
  )
}

export default Partner
