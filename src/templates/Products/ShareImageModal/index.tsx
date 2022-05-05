import React from 'react'
import Image from 'next/image'
import { TwitterShareButton } from 'react-share'
import html2canvas from 'html2canvas'

import SharedImage from '../SharedImage'

import * as S from './styles'

interface ShareImageProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}

const ShareImageModal = ({ setOpenModal, openModal }: ShareImageProps) => {
  const printRef = React.useRef<any>(0)

  const handleDownloadImage = async () => {
    const element = printRef.current

    if (element) {
      const canvas = await html2canvas(element)
      const data = canvas.toDataURL('image/jpg')

      const link = document.createElement('a')

      if (typeof link.download === 'string') {
        link.href = data
        link.download = 'image.jpg'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }
  }

  return (
    <S.Backdrop style={{ display: openModal ? 'flex' : 'none' }}>
      <S.ModalContainer>
        <S.ModalHeader>
          Share on your socials
          <Image
            className="close-modal"
            onClick={() => setOpenModal(false)}
            src="/assets/close.svg"
            width={12}
            height={12}
          />
        </S.ModalHeader>
        <S.ModalBody>
          <S.ImageContainer ref={printRef}>
            <div className="teste">
              <SharedImage />
            </div>
          </S.ImageContainer>

          <S.SocialMediaContainer>
            <S.SocialMedia>
              <Image
                src="/assets/socialMedia/discord-icon.svg"
                width={56}
                height={56}
              />
              Discord
            </S.SocialMedia>
            <TwitterShareButton
              onClick={handleDownloadImage}
              url="https://twitter.com/"
            >
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/twitter-icon.svg"
                  width={56}
                  height={56}
                />
                Twitter
              </S.SocialMedia>
            </TwitterShareButton>
            <S.SocialMedia>
              <Image
                src="/assets/socialMedia/linkedin-icon.svg"
                width={56}
                height={56}
              />
              Linkedin
            </S.SocialMedia>
            <S.SocialMedia>
              <Image
                src="/assets/socialMedia/instagram-icon.svg"
                width={56}
                height={56}
              />
              Instagram
            </S.SocialMedia>
            <S.SocialMedia>
              <Image
                src="/assets/socialMedia/facebook-icon.svg"
                width={56}
                height={56}
              />
              Facebook
            </S.SocialMedia>
          </S.SocialMediaContainer>
        </S.ModalBody>
      </S.ModalContainer>
    </S.Backdrop>
  )
}

export default ShareImageModal
