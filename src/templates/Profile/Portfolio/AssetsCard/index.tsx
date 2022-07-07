import React from 'react'
import Image from 'next/image'
import BigNumber from 'bn.js'
import Big from 'big.js'
import Tippy from '@tippyjs/react'

import AnyCard from '../../../../components/AnyCard'

import { BNtoDecimal } from '../../../../utils/numerals'
import { useAppSelector } from '../../../../store/hooks'

import infoGray from '../../../../../public/assets/utilities/info-gray.svg'

import * as S from './styles'

export interface IKacyLpPool {
  pid: number;
  symbol: string;
  poolName: string;
  properties?: {
    logo: {
      src: string,
      style: {
        width: string
      }
    },
    title?: string,
    linkLp?: string
  };
  amount: BigNumber;
}

export interface IPriceToken {
  [key: string]: Big;
}

export interface IAssetsValueWalletProps {
  [key: number]: BigNumber;
}

interface IStakingTableProps {
  profileAddress: string;
  cardstakesPoolNew: IKacyLpPool[];
  priceToken: IPriceToken;
}

const namePools: { [key: string]: string } = {
  KACY: 'BY KASSANDRA',
  'LP-JOE': 'by HEIMDALL.land & Trader Joe',
  LP: 'by HEIMDALL.land & pangolin '
}

// eslint-disable-next-line prettier/prettier
const AssetsCard = ({ profileAddress, priceToken, cardstakesPoolNew }: IStakingTableProps) => {
  const userWalletAddress = useAppSelector(state => state.userWalletAddress)

  return (
    <>
      {cardstakesPoolNew.length > 0 ? (
        <S.AssetsContainer isThreeCards={cardstakesPoolNew.length > 2}>
          {cardstakesPoolNew.map(stake => {
            return (
              <S.AssetsHeaderContent key={stake.pid + stake.poolName}>
                <span>
                  {stake.symbol === 'KACY' ? (
                    <Image
                      src={stake.properties ? stake.properties.logo.src : ''}
                      width={52}
                      height={52}
                    />
                  ) : (
                    <Image
                      src={stake.properties ? stake.properties.logo.src : ''}
                      width={140}
                      height={90}
                    />
                  )}
                </span>
                <S.AssetsBodyContent>
                  <S.Balance>
                    BALANCE
                    <Tippy content="Tippy">
                      <S.Tooltip tabIndex={0}>
                        <Image
                          src={infoGray}
                          alt="Explanation"
                          layout="responsive"
                        />
                      </S.Tooltip>
                    </Tippy>
                  </S.Balance>
                  <S.AssetsValue>
                    {BNtoDecimal(stake.amount, 18, 2)}
                    <strong>{stake.symbol === 'KACY' ? 'KACY' : 'LP'}</strong>
                  </S.AssetsValue>
                  <S.AssetsValueDollar>
                    $
                    {priceToken[stake.symbol]
                      ? BNtoDecimal(
                          Big(stake.amount.toString())
                            .mul(priceToken[stake.symbol])
                            .div(Big(10).pow(18)),
                          6,
                          2,
                          2
                        )
                      : 0}
                  </S.AssetsValueDollar>
                  <S.LineSeperator />
                  <S.AssetsName>{stake.poolName}</S.AssetsName>
                  <S.AssetsSob>{namePools[stake.symbol]}</S.AssetsSob>
                </S.AssetsBodyContent>
              </S.AssetsHeaderContent>
            )
          })}
        </S.AssetsContainer>
      ) : profileAddress === userWalletAddress ? (
        <AnyCard
          text="It seems you have not staked any KACY"
          button={true}
          link="/farm"
          buttonText="I Want To Stake Some Tokens"
        />
      ) : (
        <AnyCard text="This address has nothing staked" />
      )}
    </>
  )
}

export default AssetsCard
