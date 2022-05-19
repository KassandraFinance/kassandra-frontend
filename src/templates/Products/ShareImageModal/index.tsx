import React, { ReactNode } from 'react'
import Image from 'next/image'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton
} from 'react-share'
import html2canvas from 'html2canvas'

import * as S from './styles'
import { v4 } from 'uuid'

interface ShareImageProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: ReactNode;
  poolId: string;
  productName: string;
}

const baseURL = 'https://alpha.kassandra.finance'
const ShareImageModal = ({
  setOpenModal,
  openModal,
  children,
  poolId,
  productName
}: ShareImageProps) => {
  const printRef = React.useRef<HTMLInputElement>(null)
  const [url, setUrl] = React.useState(
    `${baseURL}/shared/${v4()}-${productName.toLowerCase()}`
  )

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
      const canvas = await html2canvas(element, {
        windowWidth: 1280,
        onclone: function (doc: any) {
          doc.querySelector('.image-container').style.display = 'block'
          doc.querySelector('.bg-image-color').style.background = '#2d152b'
        }
      })
      const file = canvas.toDataURL('image/png')
      const id = url.split('/').pop()
      const res = await fetch(
        `${baseURL}/api/funds/shared?id=${poolId}-${productName.toLowerCase()}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ image: file, id })
        }
      )
      await res.json()
      setUrl(`${baseURL}/shared/${v4()}-${productName.toLowerCase()}`)
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
          <S.ImageContainer className="image-container" ref={printRef}>
            <div className="scroll">{children}</div>
          </S.ImageContainer>

          <S.SocialMediaContainer>
            <TwitterShareButton
              // onClick={sendData}
              beforeOnClick={() =>
                (async () => {
                  await sendData()
                })()
              }
              title="Image of your stats on Kassandra Foundation"
              url={url}
            >
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/twitter-icon.svg"
                  width={48}
                  height={48}
                />
                Twitter
              </S.SocialMedia>
            </TwitterShareButton>
            <LinkedinShareButton onClick={sendData} url={url}>
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/linkedin-icon.svg"
                  width={48}
                  height={48}
                />
                Linkedin
              </S.SocialMedia>
            </LinkedinShareButton>
            <RedditShareButton onClick={sendData} url={url}>
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/reddit-icon.svg"
                  width={48}
                  height={48}
                />
                Reddit
              </S.SocialMedia>
            </RedditShareButton>
            <FacebookShareButton onClick={sendData} url={url}>
              <S.SocialMedia>
                <Image
                  src="/assets/socialMedia/facebook-icon.svg"
                  width={48}
                  height={48}
                />
                Facebook
              </S.SocialMedia>
            </FacebookShareButton>
            <S.SocialMedia className="last" onClick={handleDownloadImage}>
              <Image
                src="/assets/socialMedia/download-icon.svg"
                width={48}
                height={48}
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