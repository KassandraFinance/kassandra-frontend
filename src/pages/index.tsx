import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Big from 'big.js'

import { useAppDispatch } from '../store/hooks'
import { setDaoInfo, IDaoInfo } from '../store/reducers/daoInfoSlice'

import { BACKEND_KASSANDRA } from '../constants/tokenAddresses'

import Home from '../templates/Home'

interface IHomePageProps {
  daoInfo: IDaoInfo
}

export default function HomePage({ daoInfo }: IHomePageProps) {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (daoInfo) {
      dispatch(setDaoInfo(daoInfo))
    }
  }, [daoInfo])

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra Finance</title>
        <meta
          name="description"
          content="Create, manage and invest in tokenized crypto portfolios."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/" />
        <meta
          property="og:description"
          content="Create, manage and invest in tokenized crypto portfolios."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/" />
        <meta
          property="twitter:description"
          content="Create, manage and invest in tokenized crypto portfolios."
        />
      </Head>

      <Home />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(BACKEND_KASSANDRA, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query {
        factories(where: {id_in: ["0x958c051B55a173e393af696EcB4C4FF3D6C13930", "1370x228885c9d0440Ae640B88fBeE31522CC6a59Fd2F"]}) {
          total_value_locked_usd
          total_volume_usd
          total_fees_swap_usd
          total_fees_exit_usd
        }
      }
      `
    })
  }).then(res => res.json())

  type FactoryType = {
    total_value_locked_usd: Big
    total_volume_usd: Big
    total_fees_swap_usd: Big
    total_fees_exit_usd: Big
  }

  const arrData = response?.data?.factories
  const sum = arrData?.reduce(
    (acc: FactoryType, factory: FactoryType) => {
      return {
        total_value_locked_usd: acc.total_value_locked_usd.add(
          factory.total_value_locked_usd
        ),
        total_volume_usd: acc.total_volume_usd.add(factory.total_volume_usd),
        total_fees_swap_usd: acc.total_fees_swap_usd.add(
          factory.total_fees_swap_usd
        ),
        total_fees_exit_usd: acc.total_fees_exit_usd.add(
          factory.total_fees_exit_usd
        )
      }
    },
    {
      total_value_locked_usd: Big(0),
      total_volume_usd: Big(0),
      total_fees_swap_usd: Big(0),
      total_fees_exit_usd: Big(0)
    }
  )

  const daoInfo = {
    daoInfo: [
      {
        value: sum.total_value_locked_usd.toString(),
        title: 'TVL'
      },
      {
        value: sum.total_volume_usd.toString(),
        title: 'volume'
      },
      {
        value: sum.total_fees_swap_usd.toString(),
        title: 'Swap fees'
      },
      {
        value: sum.total_fees_exit_usd.toString(),
        title: 'PROTOCOL FEES'
      }
    ]
  }

  return {
    props: {
      daoInfo: daoInfo
    },
    revalidate: 300
  }
}
