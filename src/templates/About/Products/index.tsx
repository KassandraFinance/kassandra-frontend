import React from 'react'
import ExternalLink from '../../../components/ExternalLink'

import * as S from './styles'

const Products = () => {
  return (
    <S.Container>
      <S.ImageKassandra>
        <img
          src="/assets/images/about-products.svg"
          alt="Understanding the parts that make Kassandra"
          width="594"
          height="568"
        />
      </S.ImageKassandra>
      <S.CardWrapper>
        <S.Card>
          <S.MobileCardTitle>
            <img src="/assets/iconGradient/about-products.svg" alt="" />
            <h3>PROTOCOL</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra Protocol is the core technology that allows the DAO to
            deploy investment products. It allows building tokenized investment
            baskets that are permissionless, non-custodial and actively managed,
            yet monetary efficient.
          </p>
          <ExternalLink
            hrefLink="https://kassandrafoundation.medium.com/kassandra-protocol-d9cb71c02b02"
            text="How It Works"
          />
        </S.Card>
        <S.Card>
          <S.MobileCardTitle>
            <img src="/assets/iconGradient/about-products.svg" alt="" />
            <h3>DAO</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra DAO is the only owner of the Kassandra Protocol,
            represented by the KACY token holders, and earns management fees
            over all the Kassandra investment funds.
          </p>
          <ExternalLink
            hrefLink="https://kassandrafoundation.medium.com/kassandra-dao-token-8bc046d55a00"
            text="Documentation"
          />
        </S.Card>
        <S.Card>
          <S.MobileCardTitle>
            <img src="/assets/iconGradient/about-products.svg" alt="" />
            <h3>FOUNDATION</h3>
          </S.MobileCardTitle>
          <p>
            The Kassandra Foundation is the entity funded by token sale events,
            run by the core team of Kassandra founders, with the purpose of
            promoting and developing Kassandra in both technological and
            marketing aspects.
          </p>
          <ExternalLink
            hrefLink="https://kassandrafoundation.medium.com/kassandra-foundation-team-4f46bf13c887"
            text="Connect With Us"
          />
        </S.Card>
      </S.CardWrapper>
    </S.Container>
  )
}

export default Products
