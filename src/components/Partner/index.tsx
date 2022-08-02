import React from 'react'
import Image, { StaticImageData } from 'next/image'
import useMatomoEcommerce from '../../hooks/useMatomoEcommerce'

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
  const { trackEventFunction } = useMatomoEcommerce()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackEventFunction('click-on-partner', name, 'powered-invest')
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
