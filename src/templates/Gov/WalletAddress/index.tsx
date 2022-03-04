import Image from 'next/image'

import Header from '../../../components/Header'
import TitleSection from '../../../components/TitleSection'
import IntroWalletAddress from '../../../components/Governance/IntroWalletAddress'
import AnyCard from '../../../components/Governance/AnyCard'

import proposals from '../../../../public/assets/iconGradient/proposals.svg'
import externalLink from '../../../../public/assets/icons/external-link.svg'

import * as S from './styles'

const WalletAddress = () => {
  return (
    <S.BackgroundVote>
      <Header />
      <S.VoteContent>
        <IntroWalletAddress />
        <TitleSection image={proposals} title="Voting Power Distribution" />
        <AnyCard text="This address doesn’t seem to have any KACY staked" />

        <S.TitleAndLinkContent>
          <TitleSection
            image={proposals}
            title="Voting History"
            text="Velit lacus vel porta purus"
          />
          <S.LinkForum
            href="https://t.me/KassandraDAO"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Discuss the proposals at the Forum</span>
            <Image src={externalLink} alt="" />
          </S.LinkForum>
        </S.TitleAndLinkContent>
        <AnyCard text="This address has not voted on a governance proposal yet " />
      </S.VoteContent>
    </S.BackgroundVote>
  )
}

export default WalletAddress
