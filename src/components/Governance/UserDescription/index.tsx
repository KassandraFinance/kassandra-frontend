import React from 'react'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import { RootStateOrAny, useSelector } from 'react-redux'

import substr from '../../../utils/substr'
import { ToastInfo } from '../../Toastify/toast'

import infoGrayIcon from '../../../../public/assets/utilities/info-gray.svg'
import userProfile from '../../../../public/assets/userProfile.svg'

import ModalUserEditInfo from '../../Modals/ModalUserEditInfo'
import NftImage from '../../NftImage'

import * as S from './styles'

type UserProps = {
  nickname: string,
  twitter: string,
  website: string,
  telegram: string,
  discord: string,
  description: string,
  image?: {
    url: string,
    isNFT: false
  }
}

interface IUserDescriptionProps {
  userWalletUrl: string | string[] | undefined;
}

const UserDescription = ({ userWalletUrl }: IUserDescriptionProps) => {
  const { userWalletAddress } = useSelector((state: RootStateOrAny) => state)

  const [isOpenModal, setIsOpenModal] = React.useState(false)
  const [isStateSeeMore, setIsStateSeeMore] = React.useState(false)
  const [userDescription, setUserDescription] = React.useState('')

  const [imageUser, setImageUser] = React.useState({ url: '', isNFT: false })

  const [userData, setUserData] = React.useState<UserProps>({
    nickname: '',
    twitter: '',
    website: '',
    telegram: '',
    discord: '',
    description: ''
  })

  const isConnectWallet = userWalletAddress === userWalletUrl

  const walletUserString = Array.isArray(userWalletUrl)
    ? userWalletUrl[0]
    : userWalletUrl

  React.useEffect(() => {
    if (!userWalletUrl) return

    fetch(`/api/profile/${userWalletUrl}`)
      .then(res => res.json())
      .then(data => {
        const { image, ...profile } = data

        setUserData({
          ...profile,
          description: profile.description ?? ''
        }),
          setImageUser({ url: image, isNFT: data.isNFT })
      })
  }, [userWalletAddress, userWalletUrl, isOpenModal])

  React.useEffect(() => {
    if (window.screen.width > 768) {
      isStateSeeMore
        ? setUserDescription(userData.description)
        : userData.description.length > 340
        ? setUserDescription(userData.description.substring(0, 340) + '...')
        : setUserDescription(userData.description)
    } else {
      isStateSeeMore
        ? setUserDescription(userData.description)
        : userData.description.length > 100
        ? setUserDescription(userData.description.substring(0, 200) + '...')
        : setUserDescription(userData.description)
    }
  }, [isStateSeeMore, userData])

  return (
    <>
      <S.UserDescription>
        <S.UserInfo>
          <S.UserInfoContent>
            {imageUser.isNFT ? (
              <NftImage NftUrl={imageUser.url} imageSize="medium" />
            ) : imageUser.url !== undefined && imageUser.url !== '' ? (
              <img src={imageUser.url} alt="" width="90" height="90" />
            ) : (
              <Jazzicon
                diameter={73}
                seed={jsNumberForAddress(
                  String(userWalletUrl) ||
                    '0x1111111111111111111111111111111111111111'
                )}
              />
            )}

            {isConnectWallet && (
              <button onClick={() => setIsOpenModal(true)}>
                Edit info
                <img
                  src="/assets/utilities/edit-icon.svg"
                  alt="Follow our Twitter feed"
                  width="14"
                  height="14"
                />
              </button>
            )}
          </S.UserInfoContent>
          <S.UserProfileContent isSelectSeeMore={isStateSeeMore}>
            <p>{userData.nickname}</p>
            <S.UserAddressContent>
              {walletUserString && substr(walletUserString)}
              <CopyToClipboard text={walletUserString ? walletUserString : ''}>
                <button onClick={() => ToastInfo('Copy address')}>
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.00068 12.3334H1.16735C1.01269 12.3387 0.858581 12.3122 0.714603 12.2555C0.570625 12.1988 0.439858 12.113 0.330432 12.0036C0.221007 11.8942 0.135264 11.7634 0.0785358 11.6194C0.0218072 11.4755 -0.00469379 11.3214 0.000680608 11.1667L0.000680608 5.33336C-0.00469379 5.17871 0.0218072 5.0246 0.0785358 4.88062C0.135264 4.73664 0.221007 4.60587 0.330432 4.49645C0.439858 4.38702 0.570625 4.30128 0.714603 4.24455C0.858581 4.18782 1.01269 4.16132 1.16735 4.1667H3.50068V1.83336C3.49531 1.67871 3.52181 1.5246 3.57854 1.38062C3.63526 1.23664 3.72101 1.10587 3.83043 0.996448C3.93986 0.887023 4.07063 0.80128 4.2146 0.744551C4.35858 0.687823 4.51269 0.661322 4.66735 0.666696L10.5007 0.666696C10.6553 0.661322 10.8094 0.687823 10.9534 0.744551C11.0974 0.80128 11.2282 0.887023 11.3376 0.996448C11.447 1.10587 11.5328 1.23664 11.5895 1.38062C11.6462 1.5246 11.6727 1.67871 11.6673 1.83336V7.6667C11.6726 7.82133 11.6461 7.9754 11.5893 8.11934C11.5326 8.26328 11.4468 8.39401 11.3374 8.50342C11.228 8.61283 11.0973 8.69857 10.9533 8.75533C10.8094 8.81209 10.6553 8.83865 10.5007 8.83336H8.16735V11.1667C8.17264 11.3213 8.14608 11.4754 8.08932 11.6193C8.03256 11.7633 7.94681 11.894 7.8374 12.0034C7.728 12.1128 7.59726 12.1986 7.45333 12.2553C7.30939 12.3121 7.15532 12.3387 7.00068 12.3334ZM1.16735 5.33336V11.1667H7.00068V8.83336H4.66735C4.51271 8.83865 4.35864 8.81209 4.2147 8.75533C4.07076 8.69857 3.94003 8.61283 3.83062 8.50342C3.72122 8.39401 3.63547 8.26328 3.57871 8.11934C3.52195 7.9754 3.49539 7.82133 3.50068 7.6667V5.33336H1.16735ZM4.66735 1.83336V7.6667H10.5007V1.83336H4.66735Z"
                      fill="#ffffff"
                    />
                  </svg>
                </button>
              </CopyToClipboard>
              <a
                href={`https://testnet.snowtrace.io/address/${walletUserString}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.39998 3.19995H2.59998C2.04769 3.19995 1.59998 3.64767 1.59998 4.19995V13.4C1.59998 13.9522 2.04769 14.4 2.59997 14.4H11.8C12.3523 14.4 12.8 13.9522 12.8 13.4V9.59995"
                    stroke="#ffffff"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.04647 9.24647C5.85121 9.44173 5.85121 9.75832 6.04647 9.95358C6.24173 10.1488 6.55832 10.1488 6.75358 9.95358L6.04647 9.24647ZM14.1 2.40002C14.1 2.12388 13.8762 1.90002 13.6 1.90002L9.10002 1.90002C8.82388 1.90002 8.60002 2.12388 8.60002 2.40002C8.60002 2.67617 8.82388 2.90002 9.10002 2.90002L13.1 2.90002L13.1 6.90002C13.1 7.17617 13.3239 7.40002 13.6 7.40002C13.8762 7.40002 14.1 7.17617 14.1 6.90002L14.1 2.40002ZM6.75358 9.95358L13.9536 2.75358L13.2465 2.04647L6.04647 9.24647L6.75358 9.95358Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </S.UserAddressContent>
            <ul>
              {userData.discord && (
                <li>
                  <S.SocialIcon
                    href={`https://discord.com/${userData.discord}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/socialMidia/discord.svg"
                      alt="Follow our Twitter feed"
                      width={20}
                      height={20}
                    />
                  </S.SocialIcon>
                </li>
              )}
              {userData.twitter && (
                <li>
                  <S.SocialIcon
                    href={`https://twitter.com/${userData.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/socialMidia/twitter.svg"
                      alt="Follow our Twitter feed"
                      width={20}
                      height={20}
                    />
                  </S.SocialIcon>
                </li>
              )}
              {userData.telegram && (
                <li>
                  <S.SocialIcon
                    href={`https://telegram.com/${userData.telegram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/socialMidia/telegram.svg"
                      alt="Follow our Twitter feed"
                      width={20}
                      height={20}
                    />
                  </S.SocialIcon>
                </li>
              )}
              {userData.website && (
                <li>
                  <S.SocialIcon
                    href={userData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/assets/socialMidia/webpage.svg"
                      alt="Follow our Twitter feed"
                      width={20}
                      height={20}
                    />
                  </S.SocialIcon>
                </li>
              )}
            </ul>
            {isConnectWallet && (
              <S.EditInfoButton onClick={() => setIsOpenModal(true)}>
                Edit info
                <Image
                  src="/assets/utilities/edit-icon.svg"
                  alt="Follow our Twitter feed"
                  width={14}
                  height={14}
                />
              </S.EditInfoButton>
            )}
          </S.UserProfileContent>
        </S.UserInfo>
        <S.BarBottom />
        <S.ManagerInfo>
          <p className="titleManagerInfo">
            MANAGER INFO{' '}
            <Tippy content="Lorem ipsum">
              <span>
                <Image
                  src={infoGrayIcon}
                  alt="Explanation"
                  width={16}
                  height={16}
                />
              </span>
            </Tippy>
          </p>
          <S.DescriptionManagerInfo>
            {userDescription === ''
              ? 'This address has not written any information yet'
              : userDescription}

            {userData.description.length > 340 && (
              <S.ButtonSeeMore
                isSeeMore={isStateSeeMore}
                onClick={() => {
                  setIsStateSeeMore(!isStateSeeMore)
                }}
              >
                {isStateSeeMore ? 'SEE LESS' : 'SEE MORE'}
                <span>
                  <Image
                    src="/assets/utilities/arrow-select-down.svg"
                    alt="arrow select button"
                    width={13}
                    height={13}
                  />
                </span>
              </S.ButtonSeeMore>
            )}
          </S.DescriptionManagerInfo>
        </S.ManagerInfo>
      </S.UserDescription>
      {isOpenModal && (
        <ModalUserEditInfo
          modalOpen={isOpenModal}
          setModalOpen={setIsOpenModal}
          userData={userData}
          imageUser={imageUser}
          setUserImage={setImageUser}
          setUserData={setUserData}
        />
      )}
    </>
  )
}

export default UserDescription
