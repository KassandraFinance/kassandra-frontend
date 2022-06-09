import React from 'react'
import Image from 'next/image'
import Big from 'big.js'
import Link from 'next/link'
import { useSelector, RootStateOrAny } from 'react-redux'

import { ProductDetails } from '../../../constants/tokenAddresses'
import { TokenDetails } from '../../../store/modules/poolTokens/types'
import { BNtoDecimal } from '../../../utils/numerals'

import none from '../../../../public/assets/icons/coming-soon.svg'
import iconBar from '../../../../public/assets/iconGradient/product-bar.svg'

import * as S from './styles'

interface IpoolTokensArrayProps extends TokenDetails {
  dataYieldyak: {
    item: {
      urlFarmContract: string,
      farmName: string
    },
    apy: number
  };
}

interface IDistributionProps {
  product: ProductDetails;
}

const Distribution = ({ product }: IDistributionProps) => {
  const { poolTokensArray } = useSelector((state: RootStateOrAny) => state)

  const [isOpenYield, setIsOpenYield] = React.useState(false)

  React.useEffect(() => {
    setIsOpenYield(product.symbol === 'aHYPE' ? true : false)
  }, [product])

  return (
    <>
      {poolTokensArray.length > 1 && (
        <S.Distribution>
          <S.Title>
            <Image src={iconBar} alt="" width={18} height={18} />
            <h2>Distribution</h2>
          </S.Title>
          <S.Line />
          <S.Table>
            <thead>
              <S.Tr isOpenYield={isOpenYield}>
                <S.Th>Coin</S.Th>
                <S.Th>Allocation</S.Th>
                <S.Th>Holding</S.Th>
                <S.Th>Price 24h</S.Th>
                {isOpenYield ? '' : <S.Th>Yield</S.Th>}
              </S.Tr>
            </thead>
            <tbody>
              {poolTokensArray
                .slice(0, -1)
                .map((coin: IpoolTokensArrayProps) => {
                  return (
                    <S.Tr key={`key_${coin.name}`} isOpenYield={isOpenYield}>
                      <S.Td change24h={false}>
                        <S.Coin width={110}>
                          <img src={coin.image || none.src} alt="" />
                          <span>
                            {coin.symbol}
                            {isOpenYield ? (
                              ''
                            ) : (
                              <p>
                                {coin.dataYieldyak
                                  ? coin.dataYieldyak.item.farmName
                                  : ''}
                              </p>
                            )}
                          </span>
                        </S.Coin>
                      </S.Td>
                      <S.Td change24h={false}>
                        <S.Coin width={60}>{`${coin.allocation || 0}%`}</S.Coin>
                      </S.Td>
                      <S.Td change24h={false}>
                        {`$ ${BNtoDecimal(
                          Big(coin.balance_in_pool || 0).times(
                            Big(coin?.price || 0)
                          ),
                          18,
                          5,
                          2
                        )}`}
                        <S.BalanceCoin>{`${BNtoDecimal(
                          Big(coin.balance_in_pool || '0'),
                          18,
                          5
                        )} ${coin.symbol}`}</S.BalanceCoin>
                      </S.Td>
                      <S.Td>
                        <span>
                          ${BNtoDecimal(Big(coin?.price || 0), 18, 5, 2)}
                        </span>
                        <S.Coin
                          negative={(coin.priceChange || 0) < 0}
                          change24h={true}
                        >
                          {coin.priceChange
                            ? `${
                                coin.priceChange < 0 ? '' : '+'
                              }${coin.priceChange.toFixed(2)}%`
                            : '-'}
                        </S.Coin>
                      </S.Td>
                      {isOpenYield ? (
                        ''
                      ) : (
                        <S.Td>
                          {coin.dataYieldyak ? (
                            <>
                              <p>
                                {coin.dataYieldyak.apy
                                  ? coin.dataYieldyak.apy
                                  : '0.0'}
                                % APY
                              </p>
                              <Link
                                href={coin.dataYieldyak.item.urlFarmContract}
                                passHref
                              >
                                <S.yildyakContent target="_blank">
                                  Yield Yak{' '}
                                  <span>
                                    <svg
                                      width="12"
                                      height="13"
                                      viewBox="0 0 12 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.15137 1.39096C7.15137 1.09737 7.40876 0.859375 7.72628 0.859375L11.1757 0.859375C11.4933 0.859375 11.7507 1.09737 11.7507 1.39096V4.58049C11.7507 4.87408 11.4933 5.11208 11.1757 5.11208C10.8582 5.11208 10.6008 4.87408 10.6008 4.58049V2.77755L4.67968 8.2525C4.45516 8.4601 4.09115 8.4601 3.86663 8.2525C3.64211 8.0449 3.64211 7.70832 3.86663 7.50072L9.89942 1.92255H7.72628C7.40876 1.92255 7.15137 1.68455 7.15137 1.39096ZM1.97474 3.83564C1.82226 3.83564 1.67603 3.89164 1.56821 3.99133C1.46039 4.09103 1.39982 4.22624 1.39982 4.36722L1.39982 10.2147C1.39982 10.3557 1.46039 10.4909 1.56821 10.5906C1.67603 10.6903 1.82226 10.7463 1.97474 10.7463H8.29877C8.45124 10.7463 8.59748 10.6903 8.70529 10.5906C8.81311 10.4909 8.87368 10.3557 8.87368 10.2147V7.02516C8.87368 6.73158 9.13108 6.49358 9.44859 6.49358C9.76611 6.49358 10.0235 6.73158 10.0235 7.02516V10.2147C10.0235 10.6376 9.84179 11.0433 9.51834 11.3424C9.19489 11.6414 8.7562 11.8095 8.29877 11.8095H1.97474C1.51731 11.8095 1.07861 11.6414 0.755163 11.3424C0.431713 11.0433 0.25 10.6376 0.25 10.2147L0.25 4.36722C0.25 3.94427 0.431713 3.53863 0.755163 3.23956C1.07861 2.94048 1.51731 2.77246 1.97474 2.77246H5.42421C5.74172 2.77246 5.99912 3.01046 5.99912 3.30405C5.99912 3.59764 5.74172 3.83564 5.42421 3.83564H1.97474Z"
                                        fill="#969696"
                                      />
                                    </svg>
                                  </span>
                                </S.yildyakContent>
                              </Link>
                            </>
                          ) : (
                            <S.isThereNoYieldyak>no Yield</S.isThereNoYieldyak>
                          )}
                        </S.Td>
                      )}
                    </S.Tr>
                  )
                })}
            </tbody>
          </S.Table>
        </S.Distribution>
      )}
    </>
  )
}

export default Distribution
