/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

import IncentivesProgram from '@/templates/IncentivesProgram'

export default function Index() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Kassandra's Managers Incentive Program</title>
        <meta
          name="description"
          content="Stand out as an incentivized manager, elevate your profits, and enjoy exclusive benefits, including highlighted placement for your portfolio, active marketing support from our team, and staking rewards for your investors in our native KACY token."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:url" content="https://kassandra.finance/dao" />
        <meta
          property="og:description"
          content="Stand out as an incentivized manager, elevate your profits, and enjoy exclusive benefits, including highlighted placement for your portfolio, active marketing support from our team, and staking rewards for your investors in our native KACY token."
        />

        {/* Twitter */}
        <meta property="twitter:url" content="https://kassandra.finance/dao" />
        <meta
          property="twitter:description"
          content="Stand out as an incentivized manager, elevate your profits, and enjoy exclusive benefits, including highlighted placement for your portfolio, active marketing support from our team, and staking rewards for your investors in our native KACY token."
        />
      </Head>

      <IncentivesProgram />
    </>
  )
}
