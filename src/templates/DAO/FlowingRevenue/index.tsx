import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'
import { request } from 'graphql-request'
import Big from 'big.js'

import { SUBGRAPH_URL, products } from '../../../constants/tokenAddresses'

import { BNtoDecimal } from '../../../utils/numerals'

import { GET_WITHDRAW_FEE } from './graphql'

import * as S from './styles'

const FlowingRevenue = () => {
  const [allWithdrawFee, setAllWithdrawFees] = React.useState<Big>(new Big(0))
  const sipAddresses = products.map(product => product.sipAddress)

  const { data } = useSWR(
    [GET_WITHDRAW_FEE, sipAddresses],
    (query, sipAddresses) =>
      request(SUBGRAPH_URL, query, {
        ids: sipAddresses
      })
  )

  React.useEffect(() => {
    if (data) {
      const arrData = data.pools

      let withdrawFees = Big(0)

      for (const data of arrData) {
        withdrawFees = withdrawFees.add(
          data.withdraw.reduce((acc: Big, current: { volume_usd: string }) => {
            return Big(current.volume_usd).add(acc)
          }, 0)
        )
      }

      setAllWithdrawFees(withdrawFees)
    }
  }, [data])

  return (
    <S.Wrapper>
      <S.Header>
        <h2>DAO’s Flowing Revenue </h2>
        <p>
          A 3% fee is charged when investment tokens are redeemed to aid the
          {" DAO's"} innovation and development fund.
        </p>
      </S.Header>
      <S.HeroMobile>
        <S.ImageWrapper>
          <Image
            src="/assets/images/background-flowing-revenue-mobile.svg"
            layout="fill"
          />
        </S.ImageWrapper>
        <S.Card>
          <Image
            src="/assets/iconGradient/lamp.svg"
            width={33.47}
            height={28.97}
          />
          <S.CardText>
            <h5>{"DAO's"}</h5>
            <p>Development Fund Innovation</p>
          </S.CardText>
        </S.Card>
        <S.Data>
          <span>
            <strong>{BNtoDecimal(allWithdrawFee, 18, 2)}</strong> USD
          </span>
          <small>Accumulated Withdraw Fees since 2022</small>
        </S.Data>
      </S.HeroMobile>
      <S.Hero>
        <S.Data>
          <span>
            <strong>{BNtoDecimal(allWithdrawFee, 18, 2)}</strong> USD
          </span>
          <small>Accumulated Withdraw Fees since 2022</small>
        </S.Data>
      </S.Hero>
    </S.Wrapper>
  )
}

export default FlowingRevenue
