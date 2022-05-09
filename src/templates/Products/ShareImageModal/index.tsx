import React, { ReactNode } from 'react'
import Image from 'next/image'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton
} from 'react-share'
import html2canvas from 'html2canvas'

import * as S from './styles'

interface ShareImageProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: ReactNode;
}

const ShareImageModal = ({
  setOpenModal,
  openModal,
  children
}: ShareImageProps) => {
  const printRef = React.useRef<any>(0)
  const [url, setUrl] = React.useState('https://kassandra.finance/shared/123')

  const handleDownloadImage = async () => {
    const element = printRef.current

    if (element) {
      const canvas = await html2canvas(element, {
        windowWidth: 1280
      })
      const data = canvas.toDataURL('image/png')

      const link = document.createElement('a')

      if (typeof link.download === 'string') {
        link.href = data
        link.download = 'image.png'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }
  }

  async function sendData() {
    const element = printRef.current

    if (element) {
      html2canvas(element, { windowWidth: 1280 }).then((canvas: any) => {
        const file = canvas.toDataURL('image/png')
        const baseUrl =
          process.env.NODE_ENV === 'production'
            ? 'https://kassandra.finance/'
            : 'http://localhost:3000'

        fetch(`${baseUrl}/api/funds/shared?id=123`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ image: file })
        }).then(() => setUrl(`${baseUrl}/shared/123`))
      })
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
            <div className="teste">{children}</div>
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
              onClick={sendData}
              title="Image of your stats on Kassandra Foundation"
              url={url}
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
            <LinkedinShareButton onClick={sendData} url={url}>
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/linkedin-icon.svg"
                  width={56}
                  height={56}
                />
                Linkedin
              </S.SocialMedia>
            </LinkedinShareButton>
            <S.SocialMedia>
              <Image
                src="/assets/socialMedia/instagram-icon.svg"
                width={56}
                height={56}
              />
              Instagram
            </S.SocialMedia>
            <FacebookShareButton onClick={sendData} url={url}>
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/facebook-icon.svg"
                  width={56}
                  height={56}
                />
                Facebook
              </S.SocialMedia>
            </FacebookShareButton>
            <S.SocialMedia className="last" onClick={handleDownloadImage}>
              <Image
                src="/assets/socialMedia/download-icon.svg"
                width={56}
                height={56}
              />
              Download
            </S.SocialMedia>
          </S.SocialMediaContainer>
        </S.ModalBody>
      </S.ModalContainer>
    </S.Backdrop>
  )
}

export default ShareImageModal
