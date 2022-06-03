import React, { ReactNode } from 'react'
import Image from 'next/image'
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton
} from 'react-share'
import html2canvas from 'html2canvas'
import { v4 } from 'uuid'

import * as S from './styles'

interface ShareImageProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  children: ReactNode;
  poolId: string;
  productName: string;
}

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance',
  2: 'https://alpha.kassandra.finance',
  3: 'https://demo.kassandra.finance',
  4: 'http://localhost:3000'
}

const ShareImageModal = ({
  setOpenModal,
  openModal,
  children,
  poolId,
  productName
}: ShareImageProps) => {
  const [loading, setLoading] = React.useState(true)
  const printRef = React.useRef<HTMLInputElement>(null)
  const [url, setUrl] = React.useState(
    `${
      URL_API[process.env.NEXT_PUBLIC_URL_API || 4]
    }/shared/${v4()}-${productName.toLowerCase()}`
  )

  async function handleDownloadImage() {
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

  function handleShareClick() {
    setUrl(
      `${
        URL_API[process.env.NEXT_PUBLIC_URL_API || 4]
      }/shared/${v4()}-${productName.toLowerCase()}`
    )
    setOpenModal(false)
  }

  React.useEffect(() => {
    if (!openModal) return
    setTimeout(() => {
      ;(async () => {
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
          fetch(
            `${
              URL_API[process.env.NEXT_PUBLIC_URL_API || 4]
            }/api/funds/shared?id=${poolId}-${productName.toLowerCase()}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ image: file, id })
            }
          ).then(response => response.json())
        }
      })()
    }, 3000)
  }, [openModal])

  React.useEffect(() => {
    if (!openModal) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3400)
  }, [openModal])

  return (
    <>
      {openModal ? (
        <S.Backdrop onClick={() => setOpenModal(false)}>
          <S.ModalContainer onClick={event => event.stopPropagation()}>
            <S.ModalHeader>
              Share on your socials
              <Image
                className="close-modal"
                onClick={() => setOpenModal(false)}
                src="/assets/utilities/close-icon.svg"
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
                  disabled={loading}
                  onClick={handleShareClick}
                  title="Image of your stats on Kassandra Foundation"
                  url={url}
                >
                  <S.SocialMedia>
                    <Image
                      src="/assets/socialMediaShare/twitter-share.svg"
                      width={48}
                      height={48}
                    />
                    Twitter
                  </S.SocialMedia>
                </TwitterShareButton>
                <LinkedinShareButton
                  disabled={loading}
                  onClick={handleShareClick}
                  url={url}
                >
                  <S.SocialMedia>
                    <Image
                      src="/assets/socialMediaShare/linkedin-share.svg"
                      width={48}
                      height={48}
                    />
                    Linkedin
                  </S.SocialMedia>
                </LinkedinShareButton>
                <RedditShareButton
                  disabled={loading}
                  onClick={handleShareClick}
                  url={url}
                >
                  <S.SocialMedia>
                    <Image
                      src="/assets/socialMediaShare/reddit-share.svg"
                      width={48}
                      height={48}
                    />
                    Reddit
                  </S.SocialMedia>
                </RedditShareButton>
                <FacebookShareButton
                  disabled={loading}
                  onClick={handleShareClick}
                  url={url}
                >
                  <S.SocialMedia>
                    <Image
                      src="/assets/socialMediaShare/facebook-share.svg"
                      width={48}
                      height={48}
                    />
                    Facebook
                  </S.SocialMedia>
                </FacebookShareButton>
                <S.SocialMedia className="last" onClick={handleDownloadImage}>
                  <Image
                    src="/assets/socialMediaShare/download-share.svg"
                    width={48}
                    height={48}
                  />
                  Download
                </S.SocialMedia>
              </S.SocialMediaContainer>
            </S.ModalBody>
          </S.ModalContainer>
        </S.Backdrop>
      ) : null}
    </>
  )
}

export default ShareImageModal
