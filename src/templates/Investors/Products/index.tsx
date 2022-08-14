import Image from 'next/image'

import { products } from '../../../constants/tokenAddresses'
import FundCard from '../FundCard'

import certik from '../../../../public/assets/iconGradient/certik.svg'
import lock from '../../../../public/assets/iconGradient/lock.svg'
import walletLock from '../../../../public/assets/iconGradient/wallet-lock.svg'

import * as S from './styles'
import ExternalLink from '../../../components/ExternalLink'

const Products = () => {
  return (
    <S.Products>
      <h1>Start exploring KassandraDAO</h1>
      <span>Here are some index funds created by us...</span>
      <S.FundsCards>
        {products.map(product => (
          <FundCard key={product.symbol} fund={product} />
        ))}
      </S.FundsCards>
      <S.Protocol>
        <S.DescriptionProtocol>
          <S.Span>PROTOCOL SAFETY</S.Span>
          <h1>Make the most of your money while keeping it safe</h1>
          <span>
            This is how we ensure that user funds are always protected. All
            infrastructure is governed by up-to-date smart contracts and audited
            by trusted players in the space.
          </span>
          <ExternalLink
            hrefLink="https://kassandrafoundation.medium.com/how-kassandra-works-ac50630601f6"
            text="Learn more"
          />
        </S.DescriptionProtocol>
        <S.DetailsProtocol>
          <S.Detail>
            <S.Icon>
              <Image src={walletLock} />
            </S.Icon>
            <S.Topic>
              <span>NON CUSTODIAL</span>
              <p>
                Your assets never leave your wallet. You’re always in control of
                your funds and you can pull them out anytime.
              </p>
            </S.Topic>
          </S.Detail>
          <S.Detail>
            <S.Icon>
              <Image src={lock} />
            </S.Icon>
            <S.Topic>
              <span>PERMISSIONLESS</span>
              <p>
                Invest when you want and how you want it. Transactions are fast,
                automatic and in your complete control.
              </p>
            </S.Topic>
          </S.Detail>
          <S.Detail>
            <S.Icon>
              <Image src={certik} />
            </S.Icon>
            <S.Topic>
              <span>CERTIK AUDIT</span>
              <p>
                Our protocol was thoroughly audited by Certik, and you can
                verify this information{' '}
                <a href="https://www.certik.com/projects/kassandra-finance">
                  here.
                </a>
              </p>
            </S.Topic>
          </S.Detail>
        </S.DetailsProtocol>
      </S.Protocol>
    </S.Products>
  )
}

export default Products
