import Image from 'next/image'

import ExternalLink from '@/components/ExternalLink'
import FadeInHorizontal from '@/components/Animations/FadeInHorizontal'
import Paragraph from '@/components/Paragraph'
import SectionSubtitle from '@/components/SectionSubtitle'

import certik from '@assets/iconGradient/certik.svg'
import lock from '@assets/iconGradient/lock.svg'
import walletLock from '@assets/iconGradient/wallet-lock.svg'

import * as S from './styles'

const Products = () => {
  return (
    <S.Protocol>
      <FadeInHorizontal threshold={0.5}>
        <S.DescriptionProtocol>
          <S.Span>PROTOCOL SAFETY</S.Span>
          <SectionSubtitle
            text="Make the most of your money while keeping it safe"
            as="h2"
          />
          <Paragraph
            text="This is how we ensure that user funds are always protected. All
              infrastructure is governed by up-to-date smart contracts and
              audited by trusted players in the space."
          />
          <ExternalLink
            hrefLink="https://kassandrafoundation.medium.com/how-kassandra-works-ac50630601f6"
            text="Learn more"
          />
        </S.DescriptionProtocol>
      </FadeInHorizontal>

      <FadeInHorizontal threshold={0.5}>
        <S.DetailsProtocol>
          <S.Detail>
            <S.Icon>
              <Image src={walletLock} alt="Wallet" />
            </S.Icon>
            <S.Topic>
              <span>NON CUSTODIAL</span>
              <Paragraph
                text="Your assets never leave your wallet. You’re always in control
                  of your funds and you can pull them out anytime."
              />
            </S.Topic>
          </S.Detail>
          <S.Detail>
            <S.Icon>
              <Image src={lock} alt="Lock" />
            </S.Icon>
            <S.Topic>
              <span>PERMISSIONLESS</span>
              <Paragraph
                text="Invest when you want and how you want it. Transactions are
                  fast, automatic and in your complete control."
              />
            </S.Topic>
          </S.Detail>
          <S.Detail>
            <S.Icon>
              <Image src={certik} alt="Certik" />
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
      </FadeInHorizontal>
    </S.Protocol>
  )
}

export default Products
