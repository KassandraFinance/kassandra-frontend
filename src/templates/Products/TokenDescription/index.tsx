import React from 'react'
import Image from 'next/image'
import { useMatomo } from '@datapunt/matomo-tracker-react'

import iconBar from '../../../../public/assets/iconbar.svg'
import imageCalc from '../../../../public/assets/image-calc.svg'

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
          portfolio composed by selecting the most socially active
          cryptocurrencies in the last 30 days. This portfolio is weighted
          according to the values of social score made available by Heimdall and
          the technology provided by the Kassandra Protocol. The portfolio is a
          SIP (Smart Index Pool) and is rebalanced by arbitrageurs just like an
          usual liquidity pool. The index is accompanied by its own token $HEIM,
          allowing investors to buy the index by purchasing the token, just like
          an ETF.
        </p>

        <h2>Goal</h2>
        <p>
          The index primary goal is to offer exposure to the most popular
          cryptocurrencies in a simple and easy way. The investor needs only to
          acquire the index token. With this goal in mind it is paramount to
          develop a tool which can measure the popularity of a particular
          crytpo, this tool is the creation of Heimdall and it is the bedrock of
          the Index.
        </p>

        <h2>Dynamic Weights</h2>
        <span>
          The main aspect of the SIP is that the weights are not fixed, but
          change according to the social score dynamics in order to keep track
          of the most active tokens.
        </span>
        <p>
          The frequency and the amount in which the weights for each
          cryptocurrency inside the SIP are updated directly affect the value of
          the pool. Since any weight change can offer the opportunity for
          arbitrage, therefore decreasing the value of the pool. In addition,
          gas costs must be considered because changing weights means writing
          new information on the blockchain. The gas costs will be covered using
          funds from a wallet managed by the DAO and funded by the exit fees
          collected from the users.
        </p>
        <span>
          In general terms, the logic behind updating weights is the following:
        </span>
        <ol>
          <li>Social score data is retrieved using Heimdall API.</li>
          <li>
            Using API3 we make the weight data available in the blockchain.
          </li>
          <li>
            The new data is used to define the new weights in the SIP, incurring
            in gas costs.
          </li>
        </ol>
        <p>
          For the reasons above, we have determined that the weights will be
          updated day by day.To avoid jumps and to make the changes more
          predictable, the updates will occur at each block by called a custom
          function called pokeWeights
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
          <li> The project’s protocol must have significant usage.</li>
          <li>The project’s protocol must not be insolvent.</li>
        </ol>
        <span>
          The initial whitelist will be composed of the following
          cryptocurrencies:{' '}
        </span>
        <ol>
          <li> wbtc, eth, matic,link, uni, sushi, aave,</li>
          <li>chz, yfi, theta, rsr, grt, enj, ocean.</li>
        </ol>
        <h2>Index Value</h2>
        <p>The value of the index is given by:</p>
        <Image
          src={imageCalc}
          alt="The sum, for each token, of the token balance times its price divided by the index divisor"
        />
        <S.ToDocumention>
          <p>
            View full{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kassandrafoundation.medium.com/avalanche-social-index-4042a823c972"
              onClick={() => matomoEvent('click-on-link', 'ahype-documention')}
            >
              aHYPE
            </a>{' '}
            Documention
            <img src="assets/externalLink.svg" alt="" />
          </p>
        </S.ToDocumention>
      </S.Text>
    </>
  )
}

export default TokenDescription
