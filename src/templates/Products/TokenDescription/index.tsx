import React from 'react'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import iconBar from '../../../../public/assets/iconbar.svg'
import imageCalc from '../../../../public/assets/image-calc.png'

import * as S from './styles'

const TokenDescription = () => {
  const { trackEvent } = useMatomo()

  function matomoEvent(action: string, name: string) {
    trackEvent({
      category: 'summary-invest',
      action,
      name
    })
  }

  return (
    <>
      <S.Title>
        <Image src={iconBar} alt="" />
        <h2>Token Description</h2>
      </S.Title>
      <S.Line />
      <S.Text>
        <p>
          The Avalanche Social Index (aHYPE) tracks the performance of a
          portfolio composed of the most socially active cryptocurrencies in the
          last 30 days. This portfolio is weighted according to the social score
          made available by Heimdall and the technology provided by the
          Kassandra Protocol. The portfolio is a SIP (Smart Index Pool) and is
          rebalanced by arbitrageurs just like a usual liquidity pool. The index
          is accompanied by its own token $aHYPE, allowing investors to buy the
          index by purchasing the token, just like an ETF.
        </p>

        <h2>Goal</h2>
        <p>
          The index primary goal is to offer exposure to the most popular
          cryptocurrencies in a simple and easy way, the investor needs only to
          acquire the index token. With this goal in mind it is paramount to
          develop a tool which can measure the popularity of a particular
          crypto, this tool is the creation of Heimdall and it is the bedrock of
          the index.
        </p>

        <h2>Dynamic Weights</h2>
        <span>
          The main aspect of the Configurable Rights Pool (CRP) is that weights
          are not fixed, but change according to the social score dynamics in
          order to keep track of the most active tokens.
        </span>
        <p>
          The frequency and the amount in which weights are updated for each
          cryptocurrency inside the CRP directly correlate with the value of the
          fund. For any weight change can offer the opportunity for arbitrage,
          that decreases the value of the pool, and gas costs are incurred to
          write the new weights on the blockchain. These gas costs will be
          covered using funds from a wallet managed by the DAO and funded by the
          exit fees collected from users. Losses in arbitrage are alleviated by
          swap fees and the smart allocation of the assets.
        </p>
        <span>
          In general terms, the logic behind updating weights is the following:
        </span>
        <ol>
          <li>Social score data is retrieved using Heimdall API.</li>
          <li>
            Using API3 we make the social score data available in the
            blockchain.
          </li>
          <li>
            The new data is used to define the new weights in the CRP, incurring
            in gas costs.
          </li>
        </ol>
        <p>
          For the reasons above, we have determined that weights are to be
          updated every 24 hours. To avoid large jumps that could lead to large
          impermanent loss and to make the changes more predictable, weights
          smoothly change on each block. To make this change in the blockchain,
          arbitrageurs call pokeWeights to take advantage of arbitrage
          opportunities created by those weight changes.
        </p>
        <h2>Index Maintenance</h2>
        <p>
          At first, the Avalanche Social Index will have a whitelist already
          determined by the Kassandra Foundation. However, as mentioned before,
          the $KACY token holders will be able to alter the whitelist if they
          managed to reach a consensus.It is required that any token to be added
          to the whitelist must be available on the Avalanche blockchain and
          meet other conditions such as:
        </p>
        <ol>
          <li>
            Accurate market data. Price, market cap and circulating supply.
          </li>
          <li>The project’s protocol must have significant usage.</li>
          <li>The project’s protocol must not be insolvent.</li>
        </ol>
        <span>
          The initial whitelist will be composed of the following
          cryptocurrencies:
        </span>
        <ol>
          <li>wAVAX, JOE, KACY, PNG, QI, YAK</li>
        </ol>
        <h2>Index Value</h2>
        <p>The value of the index is given by:</p>
        <Image
          src={imageCalc}
          alt="The sum, for each token, of the token balance times its price divided by the index divisor"
        />
        <S.ToDocumentation>
          <p>
            View{' '}
            <a
              href="https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972"
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => matomoEvent('click-on-link', 'ahype-documention')}
            >
              aHYPE
            </a>{' '}
            documentation
          </p>
          <img src="/assets/externalLink.svg" alt="" />
        </S.ToDocumentation>
      </S.Text>
    </>
  )
}

export default TokenDescription
