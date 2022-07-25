import React from 'react'
import Image from 'next/image'

import Profile from '../../../../public/assets/logos/aave.svg'
import GoToPage from '../../../../public/assets/utilities/go-to-page.svg'
// import ArrowTwo from '../../../../public/assets/utilities/two-arrow.svg'

import { UserProps } from '../../Governance/UserDescription'
import substr from '../../../utils/substr'
import * as S from './styles'
import { useRouter } from 'next/router'
import NftImage from '../../NftImage'
import CopyToClipboard from 'react-copy-to-clipboard'
import { ToastInfo } from '../../Toastify/toast'
import ReactMarkdown from 'react-markdown'

type INftDataProps = {
  token_address: string,
  token_id: string,
  contract_type: string,
  token_uri: string,
  name: string,
  symbol: string,
  description: '',
  nftName: ''
}

interface IOperationsProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProps;
  NftUrl: string;
}

// eslint-disable-next-line prettier/prettier
const ModalCardOperations = ({ modalOpen, setModalOpen, userData, NftUrl }: IOperationsProps) => {
  const [isOpenDetails, setIsOpenDetails] = React.useState(true)
  const [nfts, setNfts] = React.useState<INftDataProps>({
    token_address: '',
    token_id: '',
    contract_type: '',
    token_uri: '',
    name: '',
    symbol: '',
    description: '',
    nftName: ''
  })

  const router = useRouter()

  const profileAddress = router.query.profileAddress

  async function getUsersNFTs() {
    const response = await fetch(
      `https://deep-index.moralis.io/api/v2/nft/${'0xbc4ca343167a5e2d9f700cf5b6b3f849585cd6fc'}/${'8'}?chain=eth&format=decimal`,
      {
        headers: {
          'X-API-Key':
            'TJPvpUWJKfdL2wEwhMPj6I1npWBg2w1RoeOhuVDIY1rwNH68ZGqDQBLlTEoBUF9N'
        }
      }
    )

    const data = await response.json()
    if (data) {
      const dataMetadata = JSON.parse(data.metadata)
      console.log(data)

      setNfts({
        contract_type: data.contract_type,
        description: dataMetadata.description,
        name: data.name,
        nftName: dataMetadata.name,
        symbol: data.symbol,
        token_address: data.token_address,
        token_id: data.token_id,
        token_uri: data.token_uri
      })
    }
  }

  React.useEffect(() => {
    getUsersNFTs()
  }, [])

  React.useEffect(() => {
    if (window.screen.width > 1000) {
      console.log(window.screen.width > 1000)
      setIsOpenDetails(true)
    } else {
      console.log(window.screen.width > 1000)
      setIsOpenDetails(false)
    }
  }, [window.screen.width])

  const handleCloseModalInfoNFT = () => {
    setModalOpen(false)
  }

  return (
    <>
      <S.Backdrop
        // style={{ display: modalOpen ? 'block' : 'none' }}
        onClick={() => handleCloseModalInfoNFT()}
      />

      <S.testDiv>
        <div id="Imagett">
          <S.testImage
            isOpenDetails={isOpenDetails}
            src="https://ik.imagekit.io/2j0dbks5n/img/static/crecos/assets/Final_Mint_Animation.gif"
            alt=""
          />
        </div>
        <S.ButtonViewNftDetails
          onClick={() => setIsOpenDetails(!isOpenDetails)}
        >
          <button>View NFT details</button>
        </S.ButtonViewNftDetails>

        {isOpenDetails && (
          <S.ModalInfoNftContainer modalOpen={modalOpen}>
            {/* <S.CloseModalContainer onClick={() => handleCloseModalInfoNFT()}>
                <Image src={ArrowTwo} width={30} height={30} />
              </S.CloseModalContainer> */}
            <S.ModalInfoNftContent>
              <S.NftHeader>
                <h1>{nfts.nftName}</h1>
                <p>{nfts.name}</p>
                <span>Verified collection by Moralis</span>
              </S.NftHeader>
              {/* <S.CreaterNftContent>
                <h3>CREATOR</h3>
                <S.CreateWalletNft>0xAiCp...C818d</S.CreateWalletNft>
                <span>
                  <p>Adress Name | </p>
                  <p>Address network</p>
                  </span>
                </S.CreaterNftContent> */}
              <S.OwnerContent>
                <h3>OWNER</h3>
                <div>
                  {/* <img src={NftUrl} width={40} height={40} /> */}
                  <NftImage NftUrl={NftUrl} imageSize="small" />
                  <span>
                    <p>{userData.nickname}</p>
                    <strong>{substr(profileAddress)}</strong>
                  </span>
                  <S.SocialIconsContainer>
                    <li>
                      <CopyToClipboard text={userData.discord}>
                        <S.SocialIcon
                          as="button"
                          isActiveSocial={
                            userData.discord !== '' &&
                            userData.discord !== undefined &&
                            userData.discord !== null
                          }
                          onClick={() => ToastInfo('Copy Id')}
                        >
                          <Image
                            src="/assets/socialMidia/discord.svg"
                            alt="Follow our Twitter feed"
                            width={15}
                            height={15}
                          />
                        </S.SocialIcon>
                      </CopyToClipboard>
                    </li>
                    <li>
                      <S.SocialIcon
                        href={`https://twitter.com/${userData.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        isActiveSocial={
                          userData.twitter !== '' &&
                          userData.twitter !== undefined &&
                          userData.twitter !== null
                        }
                      >
                        <Image
                          src="/assets/socialMidia/twitter.svg"
                          alt="Follow our Twitter feed"
                          width={15}
                          height={15}
                        />
                      </S.SocialIcon>
                    </li>
                    <li>
                      <S.SocialIcon
                        href={`https://t.me/${userData.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        isActiveSocial={
                          userData.telegram !== '' &&
                          userData.telegram !== undefined &&
                          userData.telegram !== null
                        }
                      >
                        <Image
                          src="/assets/socialMidia/telegram.svg"
                          alt="Follow our Twitter feed"
                          width={16}
                          height={16}
                        />
                      </S.SocialIcon>
                    </li>
                    <li>
                      <S.SocialIcon
                        href={userData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        isActiveSocial={
                          userData.website !== '' &&
                          userData.website !== undefined &&
                          userData.website !== null
                        }
                      >
                        <Image
                          src="/assets/socialMidia/webpage.svg"
                          alt="Follow our Twitter feed"
                          width={17}
                          height={17}
                        />
                      </S.SocialIcon>
                    </li>
                  </S.SocialIconsContainer>
                </div>
              </S.OwnerContent>
              <S.CollectionContent>
                <h3>COLLECTION</h3>
                <div>
                  {/* <Image src={Profile} width={40} height={40} /> */}
                  <span>
                    <p id="NftByName">
                      {nfts.token_id} by {nfts.name}
                    </p>
                    <p>Verified collection by Moralis</p>
                  </span>
                </div>
                {/* <p>
                    Egestas adipiscing risus id curabitur vestibulum. Habitasse
                    faucibus ut faucibus habitant odio risus{' '}
                  </p> */}
              </S.CollectionContent>
              <S.PropertiesContainer>
                <h3>DESCRIPTION</h3>
                <p>{nfts.description}</p>
              </S.PropertiesContainer>
              <S.NftDetailsContainer>
                <h3>NFT DETAILS</h3>
                <ul>
                  <li>
                    <p>Contact Address</p>
                    <span>{substr(nfts.token_address)}</span>
                  </li>
                  <li>
                    <p>Blockchain</p>
                    <span> ETH · Ethereum</span>
                  </li>
                  <li>
                    <p>number</p>
                    <span>#{nfts.token_id}</span>
                  </li>
                  <li>
                    <p>Token Standard</p>
                    <span>{nfts.contract_type}</span>
                  </li>
                </ul>
              </S.NftDetailsContainer>
              <S.WhatIsNftContainer>
                <h3>What is an Nft?</h3>
                <p>
                  NFTs (short for Non-Fungible Tokens) are digital items that
                  you own. Proof of ownership is stored on a blockchain, a
                  digital database that is publicly accessible.
                </p>
              </S.WhatIsNftContainer>
              <S.buttonOtherSite>
                <button>
                  See at this other site
                  <Image src={GoToPage} width={14} height={14} />
                </button>
              </S.buttonOtherSite>
            </S.ModalInfoNftContent>
          </S.ModalInfoNftContainer>
        )}
      </S.testDiv>
    </>
  )
}

export default ModalCardOperations
