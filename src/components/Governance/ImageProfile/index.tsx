import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

import substr from '../../../utils/substr'

import NftImage from '../../NftImage'

import * as S from './styles'

interface IImageProfileProps {
  address: string;
  diameter: number;
  hasAddress: boolean;
  isLink: boolean;
  fontSize?: number;
  tab?: string;
}

const ImageProfile = ({
  address,
  diameter,
  hasAddress,
  isLink,
  fontSize,
  tab
}: IImageProfileProps) => {
  const [dataImageProfile, setDataImageProfile] = React.useState({
    name: '',
    image: '',
    isNFT: false
  })

  const router = useRouter()

  async function getImageAndNickname() {
    const response = await fetch(`/api/profile/${address}`)
    const userProfile = await response.json()

    if (userProfile.nickname) {
      setDataImageProfile({
        name: userProfile?.nickname || '',
        image: userProfile?.image || '',
        isNFT: userProfile?.isNFT || false
      })
    }
  }

  React.useEffect(() => {
    if (address !== '') {
      getImageAndNickname()
    }
  }, [address])

  return (
    <S.Image
      fontSize={fontSize}
      onClick={() => isLink && router.push(`/profile/${address}${tab}`)}
    >
      {dataImageProfile.name !== '' ? (
        dataImageProfile.isNFT ? (
          <NftImage NftUrl={dataImageProfile.image} imageSize="small" />
        ) : (
          <img className="user-image" src={dataImageProfile.image} alt="" />
        )
      ) : (
        <Jazzicon diameter={diameter} seed={jsNumberForAddress(address)} />
      )}
      {hasAddress ? (
        dataImageProfile.name ? (
          isLink ? (
            <Link href={`/profile/${address}${tab}`}>
              {dataImageProfile.name}
            </Link>
          ) : (
            <span>{dataImageProfile.name}</span>
          )
        ) : isLink ? (
          <Link href={`/profile/${address}${tab}`}>{substr(address)}</Link>
        ) : (
          <span>{substr(address)}</span>
        )
      ) : null}
    </S.Image>
  )
}

export default ImageProfile
