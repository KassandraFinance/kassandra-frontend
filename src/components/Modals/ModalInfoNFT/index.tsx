import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard'

import { ToastInfo } from '../../Toastify/toast'
import NftImage from '../../NftImage'
import { UserProps } from '../../Governance/UserDescription'

import substr from '../../../utils/substr'

import GoToPage from '../../../../public/assets/utilities/go-to-page.svg'
import arrowDown from '../../../../public/assets/utilities/arrow-select-down.svg'

import * as S from './styles'

type INftDataProps = {
  token_address: string,
  token_id: string,
  contract_type: string,
  name: string,
  symbol: string,
  description: string,
  nftName: string,
  chain: string
}

interface IOperationsProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userData: UserProps;
  NftUrl: string;
}

const ChainName: { [key: string]: string } = {
  ETH: 'Ethereum',
  AVAX: 'Avalanche',
  BSC: 'Binance Smart Chain',
  MATIC: 'Polygon',
  FTM: 'Fantom',
  CRO: 'Cronos'
}

// eslint-disable-next-line prettier/prettier
const ModalCardOperations = ({ modalOpen, setModalOpen, userData, NftUrl }: IOperationsProps) => {
  const [isOpenDetails, setIsOpenDetails] = React.useState(false)
  const [nftDetails, setNftDetails] = React.useState<INftDataProps>({
    token_address: '',
    token_id: '',
    contract_type: '',
    name: '',
    symbol: '',
    description: '',
    nftName: '',
    chain: ''
  })

  const router = useRouter()

  const profileAddress = Array.isArray(router.query.profileAddress)
    ? router.query.profileAddress[0]
    : router.query.profileAddress

  const handleCloseModalInfoNFT = () => {
    setModalOpen(false)
  }

  React.useEffect(() => {
    if (userData.nft) {
      const {
        chain,
        collectionName,
        contractType,
        nftDescription,
        nftName,
        symbol,
        tokenAddress,
        tokenId
      } = userData.nft

      setNftDetails({
        token_address: tokenAddress ? tokenAddress : '-',
        token_id: tokenId ? tokenId : '-',
        contract_type: contractType ? contractType : '-',
        name: collectionName ? collectionName : '-',
        symbol: symbol ? symbol : '-',
        description: nftDescription ? nftDescription : '-',
        nftName: nftName ? nftName : '-',
        chain: chain ? chain : '-'
      })
    }
  }, [userData])

  return (
    <>
      <S.ModalNftContainer>
        <S.CloseModalContainer onClick={() => handleCloseModalInfoNFT()}>
          <Image
            src="/assets/utilities/close-icon.svg"
            width={12}
            height={12}
          />
        </S.CloseModalContainer>
        <S.Backdrop
          style={{ display: modalOpen ? 'block' : 'none' }}
          onClick={handleCloseModalInfoNFT}
        />
        <S.ImageContainerNft>
          <S.NftImage
            isOpenDetails={isOpenDetails}
            src={NftUrl}
            alt="Nft Image"
          />
        </S.ImageContainerNft>
        <S.ButtonViewNftContainer
          onClick={() => setIsOpenDetails(!isOpenDetails)}
          isOpenDetails={isOpenDetails}
        >
          <S.ButtonViewNftDetails>
            {!isOpenDetails && (
              <>
                <h1>{nftDetails.nftName}</h1>
                <span>
                  <p>{nftDetails.name} </p>· Verified collection by Moralis
                </span>
              </>
            )}
            <button>
              View NFT details{' '}
              <Image src={arrowDown} alt="" width={12} height={12} />{' '}
            </button>
          </S.ButtonViewNftDetails>
        </S.ButtonViewNftContainer>

        <S.ModalInfoNftContainer
          modalOpen={modalOpen}
          isOpenDetails={isOpenDetails}
        >
          <S.ModalInfoNftContent>
            <S.NftHeader>
              <h1>{nftDetails.nftName}</h1>
              <p>{nftDetails.name}</p>
              <span>Verified collection by Moralis</span>
            </S.NftHeader>
            <S.OwnerContainer>
              <h3>OWNER</h3>
              <S.OwnerContent>
                <NftImage NftUrl={NftUrl} imageSize="small" />
                <span>
                  <p>{userData.nickname}</p>
                  <strong>
                    {substr(profileAddress ? profileAddress : '')}
                  </strong>
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
              </S.OwnerContent>
            </S.OwnerContainer>
            <S.CollectionContent>
              <h3>COLLECTION</h3>
              <span>
                {nftDetails.name}
                <p>Verified collection by Moralis</p>
              </span>
              <p>{nftDetails.description}</p>
            </S.CollectionContent>
            <S.NftDetailsContainer>
              <h3>NFT DETAILS</h3>
              <ul>
                <li>
                  <p>Contact Address</p>
                  <span>{substr(nftDetails.token_address)}</span>
                  <CopyToClipboard text={nftDetails.token_address}>
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
                </li>
                <li>
                  <p>Blockchain</p>
                  <span>
                    {' '}
                    {nftDetails.chain} · {ChainName[nftDetails.chain]}
                  </span>
                </li>
                <li>
                  <p>number</p>
                  <span>#{nftDetails.token_id}</span>
                </li>
                <li>
                  <p>Token Standard</p>
                  <span>{nftDetails.contract_type}</span>
                </li>
              </ul>
            </S.NftDetailsContainer>
            <S.WhatIsNftContainer>
              <h3>What is an Nft?</h3>
              <p>
                NFTs (short for Non-Fungible Tokens) are digital items that you
                own. Proof of ownership is stored on a blockchain, a digital
                database that is publicly accessible.
              </p>
            </S.WhatIsNftContainer>
            <S.OtherSiteContainer>
              <Link href="#" passHref>
                <a>
                  See at this other site
                  <Image src={GoToPage} width={14} height={14} />
                </a>
              </Link>
            </S.OtherSiteContainer>
          </S.ModalInfoNftContent>
        </S.ModalInfoNftContainer>
      </S.ModalNftContainer>
    </>
  )
}

export default ModalCardOperations
