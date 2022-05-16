import React from 'react'

import * as S from './styles'

interface IUserNFTsProps {
  address: string;
  setUserImageModal: React.Dispatch<
    React.SetStateAction<{
      image_preview: string,
      image_file?: any
    }>
  >;

  isDropdownAddNft: boolean;
  setIsDropdownAddNft: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserNFTs = ({
  address,
  setUserImageModal,
  isDropdownAddNft,
  setIsDropdownAddNft
}: IUserNFTsProps) => {
  const [nfts, setNfts] = React.useState([])

  async function getUsersNFTs() {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`,
      {
        headers: {
          'X-API-Key':
            'TJPvpUWJKfdL2wEwhMPj6I1npWBg2w1RoeOhuVDIY1rwNH68ZGqDQBLlTEoBUF9N'
        }
      }
    )

    const data = await response.json()

    const formattedNFTs = data.result.map((nft: any) => {
      const parsedMetadata = JSON.parse(nft.metadata)

      if (
        !parsedMetadata ||
        !parsedMetadata.name ||
        parsedMetadata.name.length == 0
      ) {
        console.log(parsedMetadata)
      }

      return {
        id: nft.token_id,
        token_address: nft.token_address,
        metadata: {
          image: handleCheckUrl(parsedMetadata?.image || null),
          name: parsedMetadata?.name || '',
          desciption: parsedMetadata?.description || ''
        }
      }
    })

    setNfts(formattedNFTs)
  }

  const handleCheckUrl = (image: string) => {
    if (image) {
      const hashNft = image.match(/(?<=^ipfs:\/\/.*)[a-zA-Z0-9]{46}.*/)

      return hashNft ? `https://ipfs.infura.io/ipfs/${hashNft[0]}` : image
    }
  }

  React.useEffect(() => {
    getUsersNFTs()
  }, [address])

  return (
    <>
      <S.Backdrop
        style={{ display: isDropdownAddNft ? 'block' : 'none' }}
        onClick={() => setIsDropdownAddNft(false)}
      />
      <S.Container>
        {nfts.map(
          (nft: any) =>
            nft?.metadata?.image && (
              <li
                key={nft.key}
                onClick={() => (
                  setUserImageModal({
                    image_preview: nft?.metadata?.image,
                    image_file: null
                  }),
                  setIsDropdownAddNft(false)
                )}
              >
                <img
                  src={nft?.metadata?.image}
                  alt="NFT images"
                  loading="lazy"
                />
                <span>{nft?.metadata?.name}</span>
              </li>
            )
        )}
      </S.Container>
    </>
  )
}

export default UserNFTs
