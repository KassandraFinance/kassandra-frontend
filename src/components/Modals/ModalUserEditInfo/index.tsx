import React, { FormEvent } from 'react'
import Image from 'next/image'
import 'tippy.js/dist/tippy.css'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import web3 from '../../../utils/web3'

import { useAppSelector, useAppDispatch } from '../../../store/hooks'
import { setModalAlertText } from '../../../store/reducers/modalAlertText'

import Button from '../../Button'
import UserNFTs, { INftDetailsListProps } from '../../UserNFts'
import NftImage from '../../NftImage'
import { NftDetailsProps } from '../../Governance/UserDescription'

import * as S from './styles'

interface IModalUserEditInfoProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserEditInfoFormProps;
  setUserImage: React.Dispatch<React.SetStateAction<any>>;
  setUserData: React.Dispatch<React.SetStateAction<UserEditInfoFormProps>>;
  imageUser: {
    url: string,
    isNFT: boolean
  };
}

type UserEditInfoFormProps = {
  nickname: string,
  twitter: string,
  website: string,
  telegram: string,
  discord: string,
  description: string,
  nft: NftDetailsProps | undefined
}

const ModalUserEditInfo = ({
  modalOpen,
  setModalOpen,
  userData,
  imageUser,
  setUserImage,
  setUserData
}: IModalUserEditInfoProps) => {
  const [isStateSocialMidia, setIsStateSocialMidia] = React.useState(false)
  const [isStateManagerInfo, setIsStateManagerInfo] = React.useState(false)
  const [isDropdownAddNft, setIsDropdownAddNft] = React.useState(false)
  const [userNftDetails, setUserNftDetails] =
    React.useState<INftDetailsListProps>()
  const [editYourProfileInput, setEditYourProfileInput] =
    React.useState<UserEditInfoFormProps>({
      ...userData
    })
  const [userImageModal, setUserImageModal] = React.useState<any>({
    image_preview: imageUser.url,
    image_file: '',
    isNFTPreviewModal: imageUser.isNFT
  })

  const dispatch = useAppDispatch()
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  const inputRefModal = React.useRef<HTMLInputElement>(null)

  function handleCloseModal() {
    setModalOpen(false)
  }

  function handleValueTextarea(value: number) {
    return 0 + value
  }

  async function handleFormChangeEditInfo(event: FormEvent) {
    event.preventDefault()
    const { nickname, twitter, website, telegram, discord, description } =
      editYourProfileInput

    const nftDetails = userImageModal.isNFTPreviewModal
      ? {
          contractType: userNftDetails?.contract_type,
          collectionName: userNftDetails?.name,
          symbol: userNftDetails?.symbol,
          tokenAddress: userNftDetails?.token_address,
          tokenId: userNftDetails?.token_id,
          chain: userNftDetails?.chain,
          nftName: userNftDetails?.metadata.name,
          nftDescription: userNftDetails?.metadata.description
        }
      : undefined

    try {
      const response = await fetch('/api/nonce')
      const { nonce } = await response.json()
      const message = JSON.stringify(
        { ...editYourProfileInput, nonce, address: userWalletAddress },
        null,
        2
      )
      const signature = await web3.eth.personal.sign(
        message,
        userWalletAddress,
        nonce
      )

      const responseAuth = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: JSON.parse(message), signature })
      })

      const { authorized } = await responseAuth.json()
      if (authorized) {
        await fetch(`/api/profile/${userWalletAddress}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nickname,
            twitter,
            website,
            telegram,
            discord,
            description,
            image: userImageModal.image_file
              ? ''
              : userImageModal.image_preview,
            isNFT: userImageModal.isNFTPreviewModal,
            nft: nftDetails
          })
        })
        setUserData(editYourProfileInput)

        if (userImageModal.image_file) {
          const formData = new FormData()
          formData.append('image', userImageModal.image_file)

          fetch(`/api/profile/${userWalletAddress}/upload-img`, {
            method: 'PUT',
            body: formData
          })
            .then(res => res.json())
            .then(data => setUserImage({ url: data.image, isNFT: false }))
          setModalOpen(false)
          return
        }
        setModalOpen(false)
      }
    } catch (error) {
      return error
    }
  }

  function handleImagePreview(event: FileList) {
    if (event[0].size > 300000) {
      dispatch(
        setModalAlertText({
          errorText: 'Image is bigger than 300KB.',
          solutionText: 'Image should be less than 300KB.'
        })
      )
      return
    }

    const allowedFileTypes = ['image/png', 'image/jpeg', 'image/gif']

    if (allowedFileTypes.indexOf(event[0].type) === -1) {
      dispatch(
        setModalAlertText({
          errorText: 'Wrong image format.',
          solutionText: 'Image should be jpg, jpeg or png.'
        })
      )
      return
    }

    if (event) {
      const image_as_base64 = URL.createObjectURL(event[0])
      const image_as_files = event[0]

      setUserImageModal({
        image_preview: image_as_base64,
        image_file: image_as_files,
        isNFTPreviewModal: false
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
        onSubmit={handleFormChangeEditInfo}
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
                {userImageModal.image_file ? (
                  <img
                    src={userImageModal.image_preview}
                    id="userImageSelect"
                    alt=""
                    width={123}
                    height={123}
                  />
                ) : userImageModal.isNFTPreviewModal ? (
                  <S.UserImage>
                    <NftImage
                      NftUrl={`${userImageModal.image_preview}`}
                      imageSize="large"
                    />
                  </S.UserImage>
                ) : userImageModal.image_preview !== '' &&
                  userImageModal.image_preview !== undefined ? (
                  <img
                    src={userImageModal.image_preview}
                    id="userImageSelect"
                    alt=""
                    width={123}
                    height={123}
                  />
                ) : (
                  <Jazzicon
                    diameter={100}
                    seed={jsNumberForAddress(
                      String(userWalletAddress) ||
                        '0x1111111111111111111111111111111111111111'
                    )}
                  />
                )}

                <span>
                  <label htmlFor="InputFile">Add Image</label>
                  <input
                    id="InputFile"
                    ref={inputRefModal}
                    type="file"
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={event => {
                      if (event.target.files !== null) {
                        handleImagePreview(event.target.files)
                      }
                    }}
                  />
                  <S.ButtonAddNft
                    type="button"
                    isDropdownAddNft={isDropdownAddNft}
                    onClick={() => setIsDropdownAddNft(!isDropdownAddNft)}
                  >
                    Add Image NFT
                    <Image
                      src="/assets/utilities/arrow-select-down.svg"
                      alt="arrow select button"
                      width={13}
                      height={13}
                    />
                  </S.ButtonAddNft>
                  <S.UserAddNftImage isDropdownAddNft={isDropdownAddNft}>
                    <UserNFTs
                      address={userWalletAddress}
                      setUserImageModal={setUserImageModal}
                      isDropdownAddNft={isDropdownAddNft}
                      setIsDropdownAddNft={setIsDropdownAddNft}
                      inputRefModal={inputRefModal}
                      setUserNftDetails={setUserNftDetails}
                    />
                  </S.UserAddNftImage>
                </span>
              </S.UserImageContent>
              <S.UserNameContent>
                <S.NicknameTilte>NICKNAME</S.NicknameTilte>
                <input
                  placeholder="Your Name"
                  onChange={event =>
                    setEditYourProfileInput({
                      ...editYourProfileInput,
                      nickname: event.target.value
                    })
                  }
                  value={editYourProfileInput?.nickname}
                  maxLength={15}
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
                    placeholder="Insert Username"
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
                    placeholder="Insert Website"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        website: event.target.value
                      })
                    }
                    value={editYourProfileInput?.website}
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
                    placeholder="Insert Username"
                    onChange={event =>
                      setEditYourProfileInput({
                        ...editYourProfileInput,
                        telegram: event.target.value
                      })
                    }
                    value={editYourProfileInput?.telegram}
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
                    placeholder="Insert Username"
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
                  description: event.target.value
                })
              }
              value={editYourProfileInput?.description}
            />
            <span>
              {handleValueTextarea(editYourProfileInput.description.length)}
              /500
            </span>
          </S.ModalManagerInfo>
          <S.UserEditInfoButtons>
            <Button
              type="submit"
              text="Save Changes"
              size="claim"
              backgroundSecondary
              fullWidth
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
