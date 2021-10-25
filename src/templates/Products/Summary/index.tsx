import React from 'react'
import Link from 'next/link'
import CopyToClipboard from 'react-copy-to-clipboard'

import { HeimCorePool } from '../../../constants/tokenAddresses'
import substr from '../../../utils/substr'

import * as S from './styles'

const Summary = () => {
  const handleCopyLink = () => {
    // setIsClick(false);
    // addToast({
    //   type: 'success',
    //   title: '',
    //   description: 'Link copiado!',
    // });
    alert("Link copiado!")
  };

  return (
    <S.Summary>
      <S.Title>
        <img src="assets/iconbar.svg" alt="-" />
        <h2>Summary</h2>
      </S.Title>
      <S.Line />
      <p>
        The Social Index $HEIM reflects the performance of a portfolio 
        selected from the most socially active cryptocurrencies in the 
        past 30 days, using Heimdall Social Score data.
      </p>
      <S.LinkContent>
        <a  href="https://coinmarketcap.com/">View In CoinMarketCap <img src="assets/externalLink.svg" alt="" /></a>
        <Link href="/heim">
          <a>Discover Heim <img src="assets/externalLink.svg" alt="" /></a> 
        </Link>
      </S.LinkContent>
      <p style={{ margin: '20px 0 10px' }}>CONTRACT</p>
      <S.CopyContract>
        <S.Blockchain>
          <img src="assets/avalanche.svg" alt="" />
          <span>Avalanche C-Chain</span>
        </S.Blockchain>
        <CopyToClipboard text={HeimCorePool}>
          <button
            type="button"
            onClick={handleCopyLink}
          >
            {substr(HeimCorePool)}
            <img src="assets/copy.svg" alt="" style={{ marginLeft: '16px' }} />
          </button>
        </CopyToClipboard>
      </S.CopyContract>
    </S.Summary>
  )
}

export default Summary