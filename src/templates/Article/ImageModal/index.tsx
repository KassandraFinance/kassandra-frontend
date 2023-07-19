import React from 'react'
import Image from 'next/image'
import * as RadixModal from '@radix-ui/react-dialog'

import * as S from './styles'

export const ImageModalRoot = RadixModal.Root
export const ImageModalTrigger = S.ImageModalTrigger
const ModalPortal = RadixModal.Portal

interface IImageModalProps {
  imageData: {
    src: string
    alt: string
  }
  onCloseAutoFocus?: (e: Event) => void
  onOpenAutoFocus?: (e: Event) => void
}

const ImageModal = ({
  imageData,
  onCloseAutoFocus,
  onOpenAutoFocus
}: IImageModalProps) => {
  return (
    <ModalPortal>
      <S.ModalOverlay />
      <S.ImageModalContent
        onCloseAutoFocus={onCloseAutoFocus}
        onOpenAutoFocus={onOpenAutoFocus}
      >
        <Image
          src={imageData.src}
          alt={imageData.alt}
          width={1920}
          height={1080}
          objectFit="contain"
        />
      </S.ImageModalContent>
    </ModalPortal>
  )
}

export default ImageModal
