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

import { IAssetsValueWalletProps, IKacyLpPool } from '..'

import * as S from './styles'

type IpriceInDolarProps = {
  tokenizedFunds: Big,
  assetsToken: Big,
  totalInvestmented: Big
}

interface IProfileProps {
  profileAddress: string;
  assetsValueInWallet: IAssetsValueWalletProps;
  cardstakesPool: IKacyLpPool[];
  priceToken: IPriceToken;
  myFunds: ImyFundsType;
  priceInDolar: IpriceInDolarProps;
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
  myFunds,
  priceInDolar
}: IProfileProps) => {
  const router = useRouter()
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  // eslint-disable-next-line prettier/prettier
  const [tokenizedFunds, setTokenizedFunds] = React.useState<ProductDetails[]>([])
  const [isModalWallet, setIsModalWallet] = React.useState<boolean>(false)
  const [balanceFunds, setBalanceFunds] = React.useState<IBalanceType>({})
  const [amountProdInPool, setAmountProdInPool] =
    React.useState<IAssetsValueWalletProps>({ '': new BigNumber(0) })
  const [cardstakesPoolNew, setCardStakesPoolNew] = React.useState<
    IKacyLpPool[]
  >([])

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
  }, [profileAddress, assetsValueInWallet, router, userWalletAddress])

  return (
    <>
      <S.paddingWrapper>
        <PortfolioHeading
          image={AssetsIcon}
          title="Tokenized Funds"
          usd={BNtoDecimal(priceInDolar.tokenizedFunds, 6, 2, 2)}
          tippy="The amount in US Dollars that this address holds in tokenized funds."
        />
      </S.paddingWrapper>

      {tokenizedFunds && tokenizedFunds[0] ? (
        <S.paddingLeftWrapper>
          <AssetsTable assets={tokenizedFunds} balanceFunds={balanceFunds} />
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
          usd={BNtoDecimal(priceInDolar.assetsToken, 6, 2, 2)}
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
