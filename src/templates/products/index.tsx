import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'


import HeimOperations from '../../components/HeimOperations'
import IndexDetails from '../../components/IndexDetails'
import Web3Disabled from '../../components/Web3Disabled'
import web3 from '../../utils/web3'

import * as S from './styles'

declare let window: {
  ethereum: any,
}

const Products = () => {
  const [coinInfoList, setCoinInfoList] = React.useState<Array<any>>([])
  const [chainId, setChainId] = React.useState<string>('')

  const { poolTokensArray, userWalletAddress } = useSelector((state: RootStateOrAny) => state)


  async function getCoinList() {
    const URL = 'https://api.coingecko.com/api/v3/coins/list'
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => res.forEach((item: any) => isTokenPool(item)))
      .catch(err => err)
  }

  function isTokenPool(value: any) {
    for (let i = 0; i < poolTokensArray.length; i++) {
      let element = poolTokensArray[i];
      // let newName = element.name.replace("Kassandra Test ", "")

      if (value.symbol === element.symbol.toLowerCase()) {
        if (value.symbol === "uni" && value.name !== "Uniswap") {
          continue
        }
        if (value.symbol === "grt" && value.name !== "The Graph") {
          continue
        }
        getCoin(value.id, element.allocation)
      }
    }
  }

  async function getCoin(id: string, allocation: number) {
    const URL = `https://api.coingecko.com/api/v3/coins/${id}`
    await fetch(URL, {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => setCoinInfoList(prevState => [...prevState, { ...res, allocation }]))
      .catch(err => err)
  }

  React.useEffect(() => {
    if (poolTokensArray.length < 1) {
      return
    }
    getCoinList()
    setCoinInfoList([])
  }, [poolTokensArray])

  async function getChainId() {
    if (web3.currentProvider === null) {
      return
    }

    const id = await window.ethereum.request({ method: 'eth_chainId' })
    setChainId(id)
    if (id !== '0x3') {

    }
  }

  React.useEffect(() => {
    getChainId()
  }, [userWalletAddress])

  return (
    <>
      {web3.currentProvider !== null && userWalletAddress && chainId === "0x3" ?
        <>
          <S.Intro>
            <div style={{ display: 'flex' }}>
              <img src='assets/logo-heim.svg ' alt='logo-heim' />
              <div>
                <h1>Heim Social Index</h1>
                <span>Heim</span>
              </div>
            </div>
            <S.IntroValues>
              <S.IntroPrice>
                <h3>
                  Price
                </h3>
                <div />
                <span>
                  $1,235.124
                </span>
              </S.IntroPrice>
              <S.IntroTVL>
                <h3>
                  TVL
                </h3>
                <div />
                <span>
                  $785,345.67
                </span>
              </S.IntroTVL>
            </S.IntroValues>
          </S.Intro>
          <S.ProductsContainer>
            <S.ComingSoon src="assets/coming-soon.png" alt="coming-soon" />

            <HeimOperations />
          </S.ProductsContainer>
          <section>
            <IndexDetails coinInfoList={coinInfoList} />
          </section>
          <S.Text>
            <h2>The Heimdall Social Index</h2>
            <span>The Heimdall Social Index (HEIM) tracks the performance of a portfolio composed by selecting the most socially active cryptocurrencies in the last 30 days. This portfolio is weighted according to the values of social score made available by Heimdall and the technology provided by the Kassandra Protocol. The portfolio is a SIP (Smart Index Pool) and is rebalanced by arbitrageurs just like an usual liquidity pool. The index is accompanied by its own token $HEIM, allowing investors to buy the index by purchasing the token, just like an ETF.</span>

            <h2>Goal</h2>
            <span>The index primary goal is to offer exposure to the most popular cryptocurrencies in a simple and easy way. The investor needs only to acquire the index token. With this goal in mind it is paramount to develop a tool which can measure the popularity of a particular crytpo, this tool is the creation of Heimdall and it is the bedrock of the Index.</span>

            <h2>Dynamic Weights</h2>
            <span>The main aspect of the SIP is that the weights are not fixed, but change according to the social score dynamics in order to keep track of the most active tokens.</span>
            <span>The frequency and the amount in which the weights for each cryptocurrency inside the SIP are updated directly affect the value of the pool. Since any weight change can offer the opportunity for arbitrage, therefore decreasing the value of the pool. In addition, gas costs must be considered because changing weights means writing new information on the blockchain. The gas costs will be covered using funds from a wallet managed by the DAO and funded by the exit fees collected from the users.</span>
            <span>
              In general terms, the logic behind updating weights is the following:
            </span>
            <ol>
              <li>
                Social score data is retrieved using Heimdall API.
              </li>
              <li>
                Using API3 we make the weight data avaiable in the blockchain.
              </li>
              <li>
                The new data is used to define the new weights in the SIP, incurring in gas costs.
              </li>
            </ol>
            <span>
              For the reasons above, we have determined that the weights will be updated day by day.To avoid jumps and to make the changes more predictable, the updates will occur at each block by called a custom function called pokeWeights
            </span>
            <h2>Index Maintenance</h2>
            <span>
              At first, the Heimdall Social Index will have a whitelist already determined by the Kassandra Foundation. However, as mentioned before, the $KACY token holders will be able to alter the whitelist if they managed to reach a consensus.It is required that any token to be added to the whitelist must be available on the Ethereum blockchain and meet other conditions such as:
            </span>
            <ol>
              <li>Accurate market data.Price, market cap and circulating supply</li>
              <li> The project’s protocol must have significant usage.</li>
              <li>The project’s protocol must not be insolvent.</li>
            </ol>
            <span>The initial whitelist will be composed of the following cryptocurrencies: </span>
            <ol>
              <li> wbtc, eth, matic,link, uni, sushi, aave,</li>
              <li>chz, yfi, theta, rsr, grt, enj, ocean.</li>
            </ol>
            <h2>Index Value</h2>
            <span>The value of the index is given by:</span>
            <img src="assets/image 24.svg" alt="index value calc" />
            <S.Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/heimdall-research-crypto/the-heimdall-social-index-9595fdfb9ddc"
              >
                Check full document on <b>Medium</b>.
              </a>
            </S.Link>

          </S.Text>
        </>
        :
        <>
          {web3.currentProvider === null && (
            <Web3Disabled
              textButton="Install Metamask"
              textHeader="Wallet connection to ETH mainnet is required"
              bodyText="To have access to all our staking pools, please connect your wallet"
              type="install"
            />
          )}
          {!userWalletAddress && chainId === "0x3" && (
            <Web3Disabled
              textButton="Connect Wallet"
              textHeader="Wallet connection to ETH mainnet is required"
              bodyText="To have access to all our staking pools, please connect your wallet"
              type="connect"
            />
          )}
          {web3.currentProvider !== null && chainId !== "0x3" && (
            <Web3Disabled
              textButton="Connect to Ropsten"
              textHeader="Your wallet is set to the wrong network. Please switch to the test Ropsten network."
              bodyText="To have access to all our staking pools, please switch the network."
              type="changeChain"
            />
          )}
        </>
      }
    </>
  )
}
export default Products
