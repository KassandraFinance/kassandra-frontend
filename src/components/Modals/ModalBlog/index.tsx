import React from 'react'
import Image from 'next/image'
import * as RadixModal from '@radix-ui/react-dialog'

import type { SVGFuncElement } from '@/types/svg'

import { CloseIcon } from '@/Icons/Close'

import * as S from './styles'

export const ModalRoot = RadixModal.Root
export const ModalContentWrapper = S.ModalContentWrapper
export const ModalFooter = S.ModalFooter
export const ModalTrigger = RadixModal.Trigger
export const ModalClose = RadixModal.Close
const ModalPortal = RadixModal.Portal
const ModalTitle = S.ModalTitle

interface IModalProps {
  children: React.ReactNode
  title: string
  icon?: SVGFuncElement
  image?: string
  onCloseAutoFocus?: (e: Event) => void
  onOpenAutoFocus?: (e: Event) => void
}

// structure:
/*
 * <Modal title={"title"} icon={Icon}>
 *  <ModalContentWrapper>
 *    {...anything you want}
 *  </ModalContentWrapper>
 * </Modal>
 *
 * It must be inside a <ModalRoot>
 */

const ModalBlog = ({
  children,
  title,
  icon,
  image,
  onCloseAutoFocus
}: IModalProps) => {
  const Icon = icon

  return (
    <ModalPortal>
      <S.ModalOverlay />
      <S.ModalContent
        onCloseAutoFocus={onCloseAutoFocus}
        onOpenAutoFocus={onCloseAutoFocus}
      >
        {title && (
          <ModalTitle>
            {Icon && <Icon />} {title}
          </ModalTitle>
        )}
        {image && (
          <ModalTitle>
            <Image className="modal-image" src={image} width={32} height={32} />{' '}
            {title}
          </ModalTitle>
        )}
        {children}

        <S.ModalCloseButton>
          <CloseIcon />
        </S.ModalCloseButton>
      </S.ModalContent>
    </ModalPortal>
  )
}

export default ModalBlog
