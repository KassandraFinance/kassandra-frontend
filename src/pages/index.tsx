import React from 'react'
import Big from 'big.js'

import Head from 'next/head'
import { GetStaticProps } from 'next'

import { useAppDispatch } from '../store/hooks'
import { setDaoInfo } from '../store/reducers/daoInfoSlice'

import { SUBGRAPH_URL, products } from '../constants/tokenAddresses'

import Home from '../templates/Home'

interface IHomePageProps {
  daoInfo: {
    factory: {
      swap: [{ volume_usd: string }],
      total_value_locked_usd: string,
      volumes: [],
      withdraw: []
    }
  };
}

export default function HomePage({ daoInfo }) {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    if (daoInfo) {
      const arrData = daoInfo.factory

      let swapFees = Big(0)
      let withdrawFees = Big(0)
      let volume = Big(0)

      swapFees = swapFees.add(
        arrData.swap.reduce((acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        }, 0)
      )

      withdrawFees = withdrawFees.add(
        arrData.withdraw.reduce((acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        }, 0)
      )

      volume = volume.add(
        arrData.volumes.reduce((acc: Big, current: { volume_usd: string }) => {
          return Big(current.volume_usd).add(acc)
        }, 0)
      )

      dispatch(
        setDaoInfo({
          daoInfo: [
            {
              value: Big(arrData.total_value_locked_usd).toString(),
              title: 'TVL'
            },
            {
              value: volume.toString(),
              title: 'volume'
            },
            {
              value: swapFees.toString(),
              title: 'Swap fees'
            },
            {
              value: withdrawFees.toString(),
              title: 'withdraw fees'
            }
          ]
        })
      )
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
          content="Create, Manage and invest in tokenized investment funds effortlessly."
        />

        <title>Kassandra Finance</title>
      </Head>

      <Home />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sipAddresses = products.map(product => product.sipAddress)

  const response = await fetch(SUBGRAPH_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
      query ($ids: [ID!]!) {
        factory(id: "0x958c051B55a173e393af696EcB4C4FF3D6C13930") {
          total_value_locked_usd
          withdraw: fees(where: { period: 604800, type: "exit" }, first: 1000) {
            volume_usd
          }
          swap: fees(where: { period: 604800, type: "swap" }, first: 1000) {
            volume_usd
          }
          volumes(where: { period: 604800 }, first: 1000) {
            volume_usd
          }
        }
      }
      `,
      variables: {
        ids: sipAddresses
      }
    })
  }).then(res => res.json())

  return {
    props: {
      daoInfo: response.data,
      revalidate: 300
    }
  }
}
