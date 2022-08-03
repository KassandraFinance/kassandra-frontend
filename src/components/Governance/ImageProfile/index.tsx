import React from 'react'
import Link from 'next/link'
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
}

const ImageProfile = ({
  address,
  diameter,
  hasAddress,
  isLink,
  fontSize
}: IImageProfileProps) => {
  const [dataImageProfile, setDataImageProfile] = React.useState({
    name: '',
    image: '',
    isNFT: false
  })

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
    <S.Image fontSize={fontSize}>
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
            <Link href={`/profile/${address}`}>{dataImageProfile.name}</Link>
          ) : (
            <span>{dataImageProfile.name}</span>
          )
        ) : isLink ? (
          <Link href={`/profile/${address}`}>{substr(address)}</Link>
        ) : (
          <span>{substr(address)}</span>
        )
      ) : null}
    </S.Image>
  )
}

export default ImageProfile
