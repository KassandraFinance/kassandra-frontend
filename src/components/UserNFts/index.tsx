import React from 'react'

import * as S from './styles'

interface IUserNFTsProps {
  address: string;
}

const UserNFTs = ({ address }: IUserNFTsProps) => {
  const [nfts, setNfts] = React.useState([])

  async function getUsersNFTs() {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2/${address}/nft?chain=eth&format=decimal`,
      {
        headers: {
          'X-API-Key': 'YOUR_API_KEY_FROM_MORALIS_ACCOUNT'
        }
      }
    )

    const data = await response.json()

    const formattedNFTs = data.result.map((nft: any) => {
      const parsedMetadata = JSON.parse(nft.metadata)

      return {
        id: nft.token_id,
        token_address: nft.token_address,
        metadata: {
          image: parsedMetadata?.image || null,
          name: parsedMetadata?.name || '',
          desciption: parsedMetadata?.description || ''
        }
      }
    })

    setNfts(formattedNFTs)
  }

  React.useEffect(() => {
    getUsersNFTs()
  }, [address])

  return (
    <S.Container>
      {nfts.map(
        (nft: any) =>
          nft?.metadata?.image && <img src={nft?.metadata?.image} alt="" />
      )}
    </S.Container>
  )
}

export default UserNFTs
