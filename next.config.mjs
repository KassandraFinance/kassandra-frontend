import { withSentryConfig } from '@sentry/nextjs'
import './src/env.mjs'

const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'assets.coingecko.com',
      'cdn-images-1.medium.com',
      'tokens.1inch.io',
      'github.com',
      'pub-4e527f88aa294361b4cde90de69d965d.r2.dev',
      'storage.googleapis.com'
    ]
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/foundation',
        permanent: false
      },
      {
        source: '/farm',
        destination: 'https://app.kassandra.finance/farm?tab=stake',
        permanent: true
      },
      {
        source: '/profile',
        destination: 'https://app.kassandra.finance/profile',
        permanent: true
      },
      {
        source: '/pool/:slug',
        destination: 'https://app.kassandra.finance/pool/:slug',
        permanent: true
      },
      {
        source: '/gov',
        destination: 'https://app.kassandra.finance/gov',
        permanent: true
      },
      {
        source: '/gov/proposals',
        destination: 'https://app.kassandra.finance/gov/proposals',
        permanent: true
      },
      {
        source: '/gov/leaderboard',
        destination: 'https://app.kassandra.finance/gov/leaderboard?page=1',
        permanent: true
      }
    ]
  }
}

export default withSentryConfig(
  config,
  {
    silent: true,
    org: process.env.SENTRY_ORG,
    project: process.env.SENTRY_PROJECT
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true
  }
)
