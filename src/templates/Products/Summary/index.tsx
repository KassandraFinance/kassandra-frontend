import React from 'react'
import useSWR from 'swr'
import { request } from 'graphql-request'
import { useMatomo } from '@datapunt/matomo-tracker-react'
import Image from 'next/image'
import CopyToClipboard from 'react-copy-to-clipboard'

import {
  HeimCRPPOOL,
  HeimCorePool,
  SUBGRAPH_URL
} from '../../../constants/tokenAddresses'

import substr from '../../../utils/substr'
import { registerToken } from '../../../utils/registerToken'

import { ToastInfo } from '../../../components/Toastify/toast'

import iconBar from '../../../../public/assets/iconbar.svg'
import metaMaskIcon from '../../../../public/assets/metaMaskIcon.svg'
import avalancheIcon from '../../../../public/assets/avalanche_social_index_logo.svg'

import { GET_INFO_POOL } from '../graphql'

import * as S from './styles'

const Summary = () => {
  const { trackEvent } = useMatomo()

  const { data } = useSWR([GET_INFO_POOL], query =>
    request(SUBGRAPH_URL, query, {
      id: HeimCRPPOOL
    })
  )

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'summary-invest',
      action,
      name
    })
  }

  const handleCopyLink = () => {
    ToastInfo('Address copied to clipboad!')
  }

  return (
    <S.Summary>
      <S.Title>
        <Image src={iconBar} alt="" />
        <h2>Summary</h2>
      </S.Title>
      <S.Line />
      <p>
        The Social Index $aHYPE reflects the performance of a portfolio selected
        from the most socially active cryptocurrencies in the past 30 days,
        using Heimdall Social Score data.
      </p>
      <S.LinkContent>
        {/* <a href="https://coinmarketcap.com/">
          View On CoinMarketCap <img src="/assets/externalLink.svg" alt="" />
        </a> */}
        <a
          href="https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => matomoEvent('click-on-link', 'discover-ahype')}
        >
          Discover aHYPE
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.57924 2.78973C9.57924 2.44566 9.85816 2.16675 10.2022 2.16675H13.9401C14.2841 2.16675 14.5631 2.44566 14.5631 2.78973V6.52759C14.5631 6.87165 14.2841 7.15057 13.9401 7.15057C13.596 7.15057 13.3171 6.87165 13.3171 6.52759V4.41832L6.90487 10.8306C6.66158 11.0738 6.26713 11.0738 6.02385 10.8306C5.78056 10.5873 5.78056 10.1928 6.02385 9.94954L12.5607 3.4127H10.2022C9.85816 3.4127 9.57924 3.13379 9.57924 2.78973ZM3.97245 5.65542C3.80722 5.65542 3.64877 5.72106 3.53194 5.83789C3.41511 5.95472 3.34947 6.11317 3.34947 6.2784V13.1312C3.34947 13.2964 3.41511 13.4548 3.53194 13.5717C3.64877 13.6885 3.80722 13.7541 3.97245 13.7541H10.8252C10.9904 13.7541 11.1489 13.6885 11.2657 13.5717C11.3825 13.4548 11.4482 13.2964 11.4482 13.1312V9.39329C11.4482 9.04923 11.7271 8.77031 12.0712 8.77031C12.4152 8.77031 12.6941 9.04923 12.6941 9.39329V13.1312C12.6941 13.6268 12.4972 14.1022 12.1467 14.4527C11.7962 14.8032 11.3209 15.0001 10.8252 15.0001H3.97245C3.47678 15.0001 3.00141 14.8032 2.65091 14.4527C2.30042 14.1022 2.10352 13.6268 2.10352 13.1312L2.10352 6.2784C2.10352 5.78273 2.30042 5.30736 2.65091 4.95686C3.00141 4.60637 3.47678 4.40947 3.97245 4.40947H7.71031C8.05437 4.40947 8.33329 4.68838 8.33329 5.03244C8.33329 5.37651 8.05437 5.65542 7.71031 5.65542H3.97245Z"
              fill="white"
            />
          </svg>
        </a>
      </S.LinkContent>
      <S.ContractsName>AVALANCHE C-CHAIN CONTRACTS</S.ContractsName>
      <S.CopyContract>
        <S.Blockchain>
          <div className="image">
            <Image src={avalancheIcon} alt="" />
          </div>
          <span>CONTROLLER/AHYPE TOKEN</span>
        </S.Blockchain>
        <button
          type="button"
          className="metamask"
          onClick={() => {
            registerToken(HeimCRPPOOL, 'aHYPE', 18)
            matomoEvent('click-on-metamask', 'add-token')
          }}
        >
          <Image
            src={metaMaskIcon}
            alt="Add token to Metamask"
            title="Add token to Metamask"
            height={20}
            width={20}
          />
        </button>
        <CopyToClipboard text={HeimCRPPOOL}>
          <button
            type="button"
            onClick={() => {
              handleCopyLink()
              matomoEvent('click-to-copy', 'controller-ahype')
            }}
          >
            {substr(HeimCRPPOOL)}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00068 12.3334H1.16735C1.01269 12.3387 0.858581 12.3122 0.714603 12.2555C0.570625 12.1988 0.439858 12.113 0.330432 12.0036C0.221007 11.8942 0.135264 11.7634 0.0785358 11.6194C0.0218072 11.4755 -0.00469379 11.3214 0.000680608 11.1667L0.000680608 5.33336C-0.00469379 5.17871 0.0218072 5.0246 0.0785358 4.88062C0.135264 4.73664 0.221007 4.60587 0.330432 4.49645C0.439858 4.38702 0.570625 4.30128 0.714603 4.24455C0.858581 4.18782 1.01269 4.16132 1.16735 4.1667H3.50068V1.83336C3.49531 1.67871 3.52181 1.5246 3.57854 1.38062C3.63526 1.23664 3.72101 1.10587 3.83043 0.996448C3.93986 0.887023 4.07063 0.80128 4.2146 0.744551C4.35858 0.687823 4.51269 0.661322 4.66735 0.666696L10.5007 0.666696C10.6553 0.661322 10.8094 0.687823 10.9534 0.744551C11.0974 0.80128 11.2282 0.887023 11.3376 0.996448C11.447 1.10587 11.5328 1.23664 11.5895 1.38062C11.6462 1.5246 11.6727 1.67871 11.6673 1.83336V7.6667C11.6726 7.82133 11.6461 7.9754 11.5893 8.11934C11.5326 8.26328 11.4468 8.39401 11.3374 8.50342C11.228 8.61283 11.0973 8.69857 10.9533 8.75533C10.8094 8.81209 10.6553 8.83865 10.5007 8.83336H8.16735V11.1667C8.17264 11.3213 8.14608 11.4754 8.08932 11.6193C8.03256 11.7633 7.94681 11.894 7.8374 12.0034C7.728 12.1128 7.59726 12.1986 7.45333 12.2553C7.30939 12.3121 7.15532 12.3387 7.00068 12.3334ZM1.16735 5.33336V11.1667H7.00068V8.83336H4.66735C4.51271 8.83865 4.35864 8.81209 4.2147 8.75533C4.07076 8.69857 3.94003 8.61283 3.83062 8.50342C3.72122 8.39401 3.63547 8.26328 3.57871 8.11934C3.52195 7.9754 3.49539 7.82133 3.50068 7.6667V5.33336H1.16735ZM4.66735 1.83336V7.6667H10.5007V1.83336H4.66735Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </CopyToClipboard>
      </S.CopyContract>
      <S.CopyContract>
        <S.Blockchain>
          <div className="image">
            <Image src={avalancheIcon} alt="" />
          </div>
          <span>POOL CONTRACT</span>
        </S.Blockchain>
        <CopyToClipboard text={HeimCorePool}>
          <button
            type="button"
            onClick={() => {
              handleCopyLink()
              matomoEvent('click-to-copy', 'pool-contract')
            }}
          >
            {substr(HeimCorePool)}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00068 12.3334H1.16735C1.01269 12.3387 0.858581 12.3122 0.714603 12.2555C0.570625 12.1988 0.439858 12.113 0.330432 12.0036C0.221007 11.8942 0.135264 11.7634 0.0785358 11.6194C0.0218072 11.4755 -0.00469379 11.3214 0.000680608 11.1667L0.000680608 5.33336C-0.00469379 5.17871 0.0218072 5.0246 0.0785358 4.88062C0.135264 4.73664 0.221007 4.60587 0.330432 4.49645C0.439858 4.38702 0.570625 4.30128 0.714603 4.24455C0.858581 4.18782 1.01269 4.16132 1.16735 4.1667H3.50068V1.83336C3.49531 1.67871 3.52181 1.5246 3.57854 1.38062C3.63526 1.23664 3.72101 1.10587 3.83043 0.996448C3.93986 0.887023 4.07063 0.80128 4.2146 0.744551C4.35858 0.687823 4.51269 0.661322 4.66735 0.666696L10.5007 0.666696C10.6553 0.661322 10.8094 0.687823 10.9534 0.744551C11.0974 0.80128 11.2282 0.887023 11.3376 0.996448C11.447 1.10587 11.5328 1.23664 11.5895 1.38062C11.6462 1.5246 11.6727 1.67871 11.6673 1.83336V7.6667C11.6726 7.82133 11.6461 7.9754 11.5893 8.11934C11.5326 8.26328 11.4468 8.39401 11.3374 8.50342C11.228 8.61283 11.0973 8.69857 10.9533 8.75533C10.8094 8.81209 10.6553 8.83865 10.5007 8.83336H8.16735V11.1667C8.17264 11.3213 8.14608 11.4754 8.08932 11.6193C8.03256 11.7633 7.94681 11.894 7.8374 12.0034C7.728 12.1128 7.59726 12.1986 7.45333 12.2553C7.30939 12.3121 7.15532 12.3387 7.00068 12.3334ZM1.16735 5.33336V11.1667H7.00068V8.83336H4.66735C4.51271 8.83865 4.35864 8.81209 4.2147 8.75533C4.07076 8.69857 3.94003 8.61283 3.83062 8.50342C3.72122 8.39401 3.63547 8.26328 3.57871 8.11934C3.52195 7.9754 3.49539 7.82133 3.50068 7.6667V5.33336H1.16735ZM4.66735 1.83336V7.6667H10.5007V1.83336H4.66735Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </CopyToClipboard>
      </S.CopyContract>
      <S.CopyContract>
        <S.Blockchain>
          <div className="image">
            <Image src={avalancheIcon} alt="" />
          </div>
          <span>STRATEGY CONTRACT</span>
        </S.Blockchain>
        <CopyToClipboard text={data?.pool && data?.pool.strategy}>
          <button
            type="button"
            onClick={() => {
              handleCopyLink()
              matomoEvent('click-to-copy', 'strategy-contract')
            }}
          >
            {data?.pool && substr(data?.pool.strategy)}
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00068 12.3334H1.16735C1.01269 12.3387 0.858581 12.3122 0.714603 12.2555C0.570625 12.1988 0.439858 12.113 0.330432 12.0036C0.221007 11.8942 0.135264 11.7634 0.0785358 11.6194C0.0218072 11.4755 -0.00469379 11.3214 0.000680608 11.1667L0.000680608 5.33336C-0.00469379 5.17871 0.0218072 5.0246 0.0785358 4.88062C0.135264 4.73664 0.221007 4.60587 0.330432 4.49645C0.439858 4.38702 0.570625 4.30128 0.714603 4.24455C0.858581 4.18782 1.01269 4.16132 1.16735 4.1667H3.50068V1.83336C3.49531 1.67871 3.52181 1.5246 3.57854 1.38062C3.63526 1.23664 3.72101 1.10587 3.83043 0.996448C3.93986 0.887023 4.07063 0.80128 4.2146 0.744551C4.35858 0.687823 4.51269 0.661322 4.66735 0.666696L10.5007 0.666696C10.6553 0.661322 10.8094 0.687823 10.9534 0.744551C11.0974 0.80128 11.2282 0.887023 11.3376 0.996448C11.447 1.10587 11.5328 1.23664 11.5895 1.38062C11.6462 1.5246 11.6727 1.67871 11.6673 1.83336V7.6667C11.6726 7.82133 11.6461 7.9754 11.5893 8.11934C11.5326 8.26328 11.4468 8.39401 11.3374 8.50342C11.228 8.61283 11.0973 8.69857 10.9533 8.75533C10.8094 8.81209 10.6553 8.83865 10.5007 8.83336H8.16735V11.1667C8.17264 11.3213 8.14608 11.4754 8.08932 11.6193C8.03256 11.7633 7.94681 11.894 7.8374 12.0034C7.728 12.1128 7.59726 12.1986 7.45333 12.2553C7.30939 12.3121 7.15532 12.3387 7.00068 12.3334ZM1.16735 5.33336V11.1667H7.00068V8.83336H4.66735C4.51271 8.83865 4.35864 8.81209 4.2147 8.75533C4.07076 8.69857 3.94003 8.61283 3.83062 8.50342C3.72122 8.39401 3.63547 8.26328 3.57871 8.11934C3.52195 7.9754 3.49539 7.82133 3.50068 7.6667V5.33336H1.16735ZM4.66735 1.83336V7.6667H10.5007V1.83336H4.66735Z"
                fill="#C4C4C4"
              />
            </svg>
          </button>
        </CopyToClipboard>
      </S.CopyContract>
    </S.Summary>
  )
}

export default Summary
