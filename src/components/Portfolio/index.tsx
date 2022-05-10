import React from 'react'

import PortfolioHeading from '../../components/PortfolioHeading'
import AssetsTable from './AssetsTable'

import AssetsIcon from '../../../public/assets/iconGradient/section-title-Assets.svg'
import StakedPoolsIcon from '../../../public/assets/iconGradient/section-title-Staked-pools.svg'
import aHYPE from '../../../public/assets/ahype.svg'
import AvalancheIcon from '../../../public/assets/avalancheIcon.svg'

import * as S from './styles'
import StakingTable from './StakingTable'

const Portfolio = () => {
  const assetsArr = [
    {
      name: 'Avalanche Hype Index',
      symbol: 'aHYPE',
      network: 'Avalanche',
      networkIcon: AvalancheIcon,
      fundIcon: aHYPE,
      price: '394,34',
      tvl: '785,345.67',
      monthUp: 28,
      dayUp: -2,
      balance: '4,000,000.00',
      balanceUSD: '$10,000,000.00'
    }
  ]

  const stakingArr = [
    {
      name: '$KACY-AVAX PNG LP',
      poolIcons: [aHYPE, aHYPE, aHYPE],
      network: 'Avalanche',
      networkIcon: AvalancheIcon,
      apy: '394,34',
      tvl: '785,345.67',
      staked: '4,000,000.00',
      stakedUSD: '$10,000,000.00',
      reward: '4,000,000.00',
      rewardUSD: '$10,000,000.00',
      token: 'kacy'
    }
  ]

  return (
    <>
      <S.paddingWrapper>
        <PortfolioHeading
          image={AssetsIcon}
          title="Assets"
          usd={'16,000,000.00'}
          change={0.11}
        />
      </S.paddingWrapper>

      <S.paddingLeftWrapper>
        <AssetsTable assets={assetsArr} />
      </S.paddingLeftWrapper>

      <S.paddingWrapper>
        <PortfolioHeading
          image={StakedPoolsIcon}
          title="Staking and Farming"
          usd={'16,000,000.00'}
          change={-0.11}
        />
      </S.paddingWrapper>

      <S.paddingLeftWrapper>
        <StakingTable stakes={stakingArr} />
      </S.paddingLeftWrapper>
    </>
  )
}

export default Portfolio
