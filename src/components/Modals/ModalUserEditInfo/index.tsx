import React, { FormEvent } from 'react'
import Image from 'next/image'

import Button from '../../Button'

import userProfile from '../../../../public/assets/userProfile.svg'

import * as S from './styles'

interface IModalUserEditInfoProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type UserEditInfoFormProps = {
  userName: string,
  twitter: string,
  webpage: string,
  telegran: string,
  discord: string,
  userDescription: string
}

const ModalUserEditInfo = ({
  modalOpen,
  setModalOpen
}: IModalUserEditInfoProps) => {
  const [isStateSocialMidia, setIsStateSocialMidia] = React.useState(false)
  const [isStateManagerInfo, setIsStateManagerInfo] = React.useState(false)
  // eslint-disable-next-line prettier/prettier
  const [editYourProfileInput, setEditYourProfileInput] = React.useState<UserEditInfoFormProps>({
      userName: '',
      twitter: '',
      webpage: '',
      telegran: '',
      discord: '',
      userDescription: ''
    })
  const [userImage, setUserImage] = React.useState({
    image_preview: '',
    image_file: userProfile
  })

  function handleCloseModal() {
    setModalOpen(false)
  }

  function handleValueTextarea(value: number) {
    return 0 + value
  }

  function handleFormChangeEditInfo(event: FormEvent) {
    event.preventDefault()

    // if (userImage.image_file !== null) {
    //   const formData = new FormData()
    //   formData.append('customFile', userImage.image_file)
    // }
  }

  function handleImagePreview(event: FileList) {
    if (event) {
      const image_as_base64 = URL.createObjectURL(event[0])
      const image_as_files = event[0]

      setUserImage({
        image_preview: image_as_base64,
        image_file: image_as_files
      })
    }
  }

  React.useEffect(() => {
    if (window.screen.width > 768) {
      setIsStateSocialMidia(true)
      setIsStateManagerInfo(true)
    } else {
      setIsStateSocialMidia(false)
      setIsStateManagerInfo(false)
    }
  }, [modalOpen])

  return (
    <>
      <S.Backdrop
        style={{ display: modalOpen ? 'block' : 'none' }}
        onClick={handleCloseModal}
      />
      <S.ModalEditInfo
        modalOpen={modalOpen}
        onChange={handleFormChangeEditInfo}
      >
        <S.HeaderModalEditInfo>
          <p>Edit Your Profile</p>
          <button type="button" onClick={() => setModalOpen(false)}>
            <Image
              src="/assets/utilities/close-icon.svg"
              alt="Close"
              width={12}
              height={12}
            />
          </button>
        </S.HeaderModalEditInfo>
        <S.BodyModalEditInfo>
          <S.UserProfileInfoContent>
            <S.UserProfileInfo>
              <S.UserImageContent>
                <Image
                  src={
                    userImage.image_preview
                      ? userImage.image_preview
                      : userProfile
                  }
                  alt="Image from User"
                  width={123}
                  height={123}
                />
                <span>
                  <label htmlFor="InputFile">Add Image</label>
                  <input
                    id="InputFile"
                    type="file"
                    onChange={event => {
                      if (event.target.files !== null) {
                        handleImagePreview(event.target.files)
                      }
                    }}
                  />
                  <button type="button">Add image NFT</button>
                </span>
              </S.UserImageContent>
              <S.UserNameContent>
                <p>NICKNAME</p>
                <input
                  placeholder="Your Name"
                  onChange={event =>
                    setEditYourProfileInput({
                      ...editYourProfileInput,
                      userName: event.target.value
                    })
                  }
                  value={editYourProfileInput?.userName}
                />
              </S.UserNameContent>
            </S.UserProfileInfo>
            <S.UserSocialAndInfoButton
              type="button"
              isStateSocialMidia={isStateSocialMidia}
              onClick={() => setIsStateSocialMidia(!isStateSocialMidia)}
            >
              SOCIAL MEDIA
              <span id="ImageContainer">
                <Image
                  src="/assets/utilities/arrow-select-down.svg"
                  alt="arrow select button"
                  width={13}
                  height={13}
                />
              </span>
            </S.UserSocialAndInfoButton>
            <S.UserSocialMidia isStateSocialMidia={isStateSocialMidia}>
              <p>SOCIAL MEDIA</p>
              <ul>
                <S.SocialIcon>
                  <span>
                    <Image
                      src="/assets/socialMidia/twitter.svg"
                      alt="Follow our Twitter feed"
                      width={18}
                      height={18}
                    />
                  </span>
                  <input
                    placeholder="Twitter"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        twitter: event.target.value
                      })
                    }
                    value={editYourProfileInput?.twitter}
                  />
                </S.SocialIcon>
                <S.SocialIcon>
                  <span>
                    <Image
                      src="/assets/socialMidia/webpage.svg"
                      alt="Follow our Twitter feed"
                      width={18}
                      height={18}
                    />
                  </span>
                  <input
                    placeholder="Webpage"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        webpage: event.target.value
                      })
                    }
                    value={editYourProfileInput?.webpage}
                  />
                </S.SocialIcon>
                <S.SocialIcon>
                  <span>
                    <Image
                      src="/assets/socialMidia/telegram.svg"
                      alt="Follow our Twitter feed"
                      width={18}
                      height={18}
                    />
                  </span>
                  <input
                    placeholder="Telegran"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        telegran: event.target.value
                      })
                    }
                    value={editYourProfileInput?.telegran}
                  />
                </S.SocialIcon>
                <S.SocialIcon>
                  <span>
                    <Image
                      src="/assets/socialMidia/discord.svg"
                      alt="Follow our Twitter feed"
                      width={18}
                      height={18}
                    />
                  </span>
                  <input
                    placeholder="Discord"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        discord: event.target.value
                      })
                    }
                    value={editYourProfileInput?.discord}
                  />
                </S.SocialIcon>
              </ul>
            </S.UserSocialMidia>
          </S.UserProfileInfoContent>
          <S.UserSocialAndInfoButton
            id="managerInfoButton"
            type="button"
            isStateSocialMidia={isStateManagerInfo}
            onClick={() => setIsStateManagerInfo(!isStateManagerInfo)}
          >
            MANAGER INFO
            <span id="ImageContainer">
              <Image
                src="/assets/utilities/arrow-select-down.svg"
                alt="arrow select button"
                width={13}
                height={13}
              />
            </span>
          </S.UserSocialAndInfoButton>
          <S.ModalManagerInfo isStateManagerInfo={isStateManagerInfo}>
            <p>MANAGER INFO</p>
            <textarea
              placeholder="Your description..."
              maxLength={500}
              onChange={event =>
                setEditYourProfileInput({
                  ...editYourProfileInput,
                  userDescription: event.target.value
                })
              }
              value={editYourProfileInput?.userDescription}
            />
            <span>
              {handleValueTextarea(editYourProfileInput.userDescription.length)}
              /500
            </span>
          </S.ModalManagerInfo>
          <S.UserEditInfoButtons>
            <Button
              type="button"
              text="Save Changes"
              size="claim"
              backgroundSecondary
              fullWidth
              onClick={() => setModalOpen(false)}
            />
            <Button
              type="button"
              text="Cancel"
              size="claim"
              backgroundBlack
              fullWidth
              onClick={() => setModalOpen(false)}
            />
          </S.UserEditInfoButtons>
        </S.BodyModalEditInfo>
      </S.ModalEditInfo>
    </>
  )
}

export default ModalUserEditInfo
