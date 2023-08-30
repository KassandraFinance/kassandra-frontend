import { SvgProps } from '@/Icons'
import { CommunityGradientIcon } from '@/Icons/CommunityGradient'
import { KacyGradientIcon } from '@/Icons/KacyGradientIcon'
import { ProtocolGradientIcon } from '@/Icons/ProtocolGradient'
import { WalletGradientIcon } from '@/Icons/WalletGradient'
import { InexpensiveGradientIcon } from '@/Icons/inexpensiveGradient'

export type ILinkListProps = {
  text: string
  description: string
  route: string
  Icon: (props: SvgProps) => JSX.Element
}

export interface IHeaderLinkInfoProps {
  sectionName: string
  description?: string
  route?: string
  isResources?: boolean
  linkList?: ILinkListProps[]
}

const investors = {
  text: 'For Investors',
  description: 'Diversify your portfolio in multiple tokenized managed pools',
  route: '/investors',
  Icon: WalletGradientIcon
}

const managers = {
  text: 'For Managers',
  description:
    'Earn fees for maintaining an active strategy in your managed pool',
  route: '/managers',
  Icon: CommunityGradientIcon
}

const dao = {
  text: 'KACY token',
  description:
    'What the KACY token is, how it works, and ways to benefit from it',
  route: '/dao',
  Icon: KacyGradientIcon
}

const incentivesProgram = {
  text: 'Incentives Program',
  description:
    'Stand out as a manager, increase your profits and enjoy the benefits',
  route: '/incentives-program',
  Icon: InexpensiveGradientIcon
}

const forum = {
  text: 'Forum',
  description:
    'What the KACY token is, how it works, and ways to benefit from it',
  route: 'https://gov.kassandra.finance/',
  Icon: ProtocolGradientIcon
}

const blog = {
  text: 'Blog',
  description: 'In-depth research material for DeFi investors and managers',
  route: '/blog',
  Icon: ProtocolGradientIcon
}

export const headerLinkInfo: IHeaderLinkInfoProps[] = [
  {
    sectionName: 'Product',
    description: 'Create, manage, or invest in tokenized crypto portfolios',
    linkList: [investors, managers]
  },
  {
    sectionName: 'Community',
    description: 'Join the future of decentralized asset management',
    linkList: [dao, incentivesProgram, forum]
  },
  {
    sectionName: 'Resources',
    description:
      'Enter our dedicated blog, access our channels, read our documentation',
    isResources: true,
    linkList: [blog]
  },
  {
    sectionName: 'About us',
    route: '/foundation'
  }
]
