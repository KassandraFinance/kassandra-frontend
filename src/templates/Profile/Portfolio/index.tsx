import React from 'react'
import Big from 'big.js'
import BigNumber from 'bn.js'
import { useRouter } from 'next/router'

import PortfolioHeading from '../../../components/PortfolioHeading'
import AssetsTable from './AssetsTable'
import AnyCard from '../../../components/AnyCard'
import ModalWalletConnect from '../../../components/Modals/ModalWalletConnect'
import AssetsCard, { IPriceToken } from './AssetsCard'

import AssetsIcon from '../../../../public/assets/iconGradient/assets-distribution.svg'
import StakedPoolsIcon from '../../../../public/assets/iconGradient/staking-pools.svg'

import { BNtoDecimal } from '../../../utils/numerals'

import { useAppSelector } from '../../../store/hooks'

import { products, ProductDetails } from '../../../constants/tokenAddresses'

import * as S from './styles'
import { IAssetsValueWalletProps, IKacyLpPool } from '..'

interface IProfileProps {
  profileAddress: string;
  assetsValueInWallet: IAssetsValueWalletProps;
  cardstakesPool: IKacyLpPool[];
  priceToken: IPriceToken;
  myFunds: ImyFundsType;
}

interface ImyFundsType {
  [key: string]: string;
}
export interface IBalanceType {
  [key: string]: BigNumber;
}

const Portfolio = ({
  profileAddress,
  assetsValueInWallet,
  cardstakesPool,
  priceToken,
  myFunds
}: IProfileProps) => {
  const router = useRouter()
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  // eslint-disable-next-line prettier/prettier
  const [tokenizedFunds, setTokenizedFunds] = React.useState<ProductDetails[]>(
    []
  )
  const [totalBalanceFunds, setTotalBalanceFunds] = React.useState<Big>(Big(0))
  const [totalDolarInPools, setTotalDolarInPools] = React.useState(new Big(0))
  const [balanceFunds, setBalanceFunds] = React.useState<IBalanceType>({})
  const [amountProdInPool, setAmountProdInPool] =
    React.useState<IAssetsValueWalletProps>({ '': new BigNumber(0) })
  // eslint-disable-next-line prettier/prettier
  const [cardstakesPoolNew, setCardStakesPoolNew] = React.useState<
    IKacyLpPool[]
  >([])
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)

  React.useEffect(() => {
    setCardStakesPoolNew([])

    cardstakesPool.forEach(pool => {
      const tokenAmount = pool.amount.add(
        assetsValueInWallet[pool.address]
          ? assetsValueInWallet[pool.address]
          : new BigNumber(0)
      )

      if (pool.address === myFunds[pool.address]) {
        setAmountProdInPool(prevState => ({
          ...prevState,
          [pool.address]: pool.amount
        }))
      } else {
        if (tokenAmount.gt(new BigNumber(0))) {
          setCardStakesPoolNew(prevState => [
            ...prevState,
            {
              address: pool.address,
              amount: tokenAmount,
              pid: pool.pid,
              poolName: pool.poolName,
              symbol: pool.symbol,
              properties: pool.properties
            }
          ])
        }
      }
    })
  }, [cardstakesPool, router, assetsValueInWallet])

  React.useEffect(() => {
    setTokenizedFunds([])

    products.forEach(prod => {
      const balanceInWallet = assetsValueInWallet[prod.sipAddress]
      const balanceInPool = amountProdInPool[prod.sipAddress]
      const balanceProductAll = balanceInWallet
        ? balanceInWallet.add(balanceInPool ? balanceInPool : new BigNumber(0))
        : new BigNumber(0)

      if (balanceProductAll.gt(new BigNumber(0))) {
        setTokenizedFunds(prevState => [...prevState, prod])
      }

      setBalanceFunds(prevState => ({
        ...prevState,
        [prod.sipAddress]: balanceProductAll
      }))
    })
  }, [profileAddress, assetsValueInWallet, router])

  React.useEffect(() => {
    let tokenValueOnDolar = new Big(0)

    if (profileAddress && cardstakesPoolNew.length > 0) {
      cardstakesPoolNew.forEach(pool => {
        tokenValueOnDolar = tokenValueOnDolar.add(
          Big(pool.amount.toString())
            .mul(priceToken[pool.symbol])
            .div(Big(10).pow(18))
        )
      })
    }

    if (tokenValueOnDolar.gt(0)) {
      setTotalDolarInPools(tokenValueOnDolar)
    }
  }, [profileAddress, cardstakesPoolNew, priceToken])

  return (
    <>
      <S.paddingWrapper>
        <PortfolioHeading
          image={AssetsIcon}
          title="Tokenized Funds"
          usd={BNtoDecimal(totalBalanceFunds, 6, 2, 2)}
          tippy="The amount in US Dollars that this address holds in tokenized funds."
        />
      </S.paddingWrapper>

      {tokenizedFunds && tokenizedFunds[0] ? (
        <S.paddingLeftWrapper>
          <AssetsTable
            assets={tokenizedFunds}
            setTotalBalance={setTotalBalanceFunds}
            balanceFunds={balanceFunds}
          />
        </S.paddingLeftWrapper>
      ) : (
        <S.paddingWrapper>
          {profileAddress === userWalletAddress ? (
            <AnyCard
              text="Looks like you have not invested in anything yet"
              button={true}
              link="/explore"
              buttonText="I Want To Invest"
            />
          ) : (
            <AnyCard text="This address has not yet invested in anything" />
          )}
        </S.paddingWrapper>
      )}

      <S.paddingWrapper>
        <PortfolioHeading
          image={StakedPoolsIcon}
          title="Assets"
          usd={BNtoDecimal(totalDolarInPools, 6, 2, 2)}
          tippy="The amount in US Dollars that this address holds in KACY and liquidity tokens."
        />
      </S.paddingWrapper>

      <S.AssetsCardContainer>
        <AssetsCard
          profileAddress={profileAddress}
          cardstakesPoolNew={cardstakesPoolNew}
          priceToken={priceToken}
        />
      </S.AssetsCardContainer>

      {isModalWallet && <ModalWalletConnect setModalOpen={setIsModalWallet} />}
    </>
  )
}

export default Portfolio
