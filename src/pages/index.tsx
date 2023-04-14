import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Big from 'big.js'

import { useAppDispatch } from '../store/hooks'
import { setDaoInfo, IDaoInfo } from '../store/reducers/daoInfoSlice'

import { SUBGRAPH_URL } from '../constants/tokenAddresses'

import Home from '../templates/Home'

interface IHomePageProps {
  daoInfo: IDaoInfo;
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
        <meta
          name="description"
          content="Manage, tokenized
          investment funds effortlessly"
        />
        <meta
          property="og:image"
          content="https://kassandra.finance/kacy-og.png"
        />
        <meta property="og:image:width" content="1012" />
        <meta property="og:image:height" content="506" />
        <meta property="og:url" content="https://kassandra.finance/" />

        <meta
          name="description"
          content="Create, Manage and invest in tokenized index funds effortlessly."
        />

        <title>Kassandra Finance</title>
      </Head>

      <Home />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(SUBGRAPH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query {
        factory(id: "0x958c051B55a173e393af696EcB4C4FF3D6C13930") {
          total_value_locked_usd
          total_volume_usd
          total_fees_swap_usd
          total_fees_exit_usd
        }
      }
      `
    })
  }).then(res => res.json())

  const arrData = response?.data?.factory

  const daoInfo = {
    daoInfo: [
      {
        value: Big(arrData.total_value_locked_usd).toString(),
        title: 'TVL'
      },
      {
        value: Big(arrData.total_volume_usd).toString(),
        title: 'volume'
      },
      {
        value: Big(arrData.total_fees_swap_usd).toString(),
        title: 'Swap fees'
      },
      {
        value: Big(arrData.total_fees_exit_usd).toString(),
        title: 'withdraw fees'
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
