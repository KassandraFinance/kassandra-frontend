import React from 'react'

import * as S from './styles'

interface IUserNFTsProps {
  address: string;
  setUserImageModal: React.Dispatch<
    React.SetStateAction<{
      image_preview: string,
      image_file?: any,
      isNFTPreviewModal: boolean
    }>
  >;

  isDropdownAddNft: boolean;
  setIsDropdownAddNft: React.Dispatch<React.SetStateAction<boolean>>;
  inputRefModal: React.RefObject<HTMLInputElement>;
}

const chains = ['eth', 'avalanche', 'bsc', 'matic', 'fantom', 'cronos']

const UserNFTs = ({
  address,
  setUserImageModal,
  isDropdownAddNft,
  setIsDropdownAddNft,
  inputRefModal
}: IUserNFTsProps) => {
  const [nfts, setNfts] = React.useState<any[]>([])

  async function getUsersNFTs() {
    const arr = []

    for (let i = 0; i < chains.length; i++) {
      const response = await fetch(
        `https://deep-index.moralis.io/api/v2/${address}/nft?chain=${chains[i]}&format=decimal`,
        {
          headers: {
            'X-API-Key':
              'TJPvpUWJKfdL2wEwhMPj6I1npWBg2w1RoeOhuVDIY1rwNH68ZGqDQBLlTEoBUF9N'
          }
        }
      )

      const data = await response.json()

      arr.push(...data.result)
    }

    const formattedNFTs = arr?.map((nft: any) => {
      const parsedMetadata = JSON.parse(nft.metadata)

      if (
        !parsedMetadata ||
        !parsedMetadata.name ||
        parsedMetadata.name.length == 0
      ) {
        return
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
        {nfts.length > 0 ? (
          <>
            {nfts.map(
              (nft: any) =>
                nft?.metadata?.image && (
                  <li
                    key={nft.key}
                    onClick={() => (
                      setUserImageModal({
                        image_preview: nft?.metadata?.image,
                        image_file: null,
                        isNFTPreviewModal: true
                      }),
                      setIsDropdownAddNft(false),
                      inputRefModal.current &&
                        (inputRefModal.current.value = '')
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
          </>
        ) : (
          <S.noHaveNFT>You don&apos;t have NFT</S.noHaveNFT>
        )}
      </S.Container>
    </>
  )
}

export default UserNFTs
