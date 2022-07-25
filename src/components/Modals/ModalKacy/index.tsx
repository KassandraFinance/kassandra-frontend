import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

import Kacy from './Kacy'

import kacy96 from '../../../../public/assets/logos/kacy-96.svg'

import * as S from './styles'

const poolPlatform =
  process.env.NEXT_PUBLIC_MASTER === '1' ? 'Avalanche' : 'Fuji'

const URL_API: { [key: number | string]: string } = {
  1: 'https://kassandra.finance/api/overview',
  2: 'https://alpha.kassandra.finance/api/overview',
  3: 'https://demo.kassandra.finance/api/overview',
  4: 'http://localhost:3000/api/overview'
}

interface IKacyMarketDataProps {
  price: number;
  marketCap: number;
  supply: number;
  kacyPercentage: number;
}

// interface IModalKacyProps {}

const ModalKacy = () => {
  const [isModalKacy, setIsModalKacy] = React.useState(false)
  const [kacyMarketData, setKacyMarketData] =
    React.useState<IKacyMarketDataProps>({
      price: 0,
      marketCap: 0,
      supply: 0,
      kacyPercentage: 0
    })

  const { data } = useSWR(URL_API[process.env.NEXT_PUBLIC_URL_API || 4])

  React.useEffect(() => {
    if (data) {
      setKacyMarketData({
        price: data.kacyPrice,
        marketCap: data.marketCap,
        supply: data.supply,
        kacyPercentage: data.kacyPercentage
      })
    }
  }, [poolPlatform, data])

  return (
    <>
      <S.KacyAmount onClick={() => setIsModalKacy(true)}>
        <Image src={kacy96} alt="kacy" width={13.86} height={11.86} />
        100k KACY
      </S.KacyAmount>

      {isModalKacy && (
        <Kacy
          setIsModalKacy={setIsModalKacy}
          price={kacyMarketData.price}
          supply={kacyMarketData.supply}
        />
      )}
    </>
  )
}

export default ModalKacy
