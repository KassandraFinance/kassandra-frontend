module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['assets.coingecko.com', 'cdn-images-1.medium.com']
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
        source: '/explore',
        destination: 'https://app.kassandra.finance/explore',
        permanent: true
      },
      {
        source: '/explore/:slug',
        destination: 'https://app.kassandra.finance/explore/:slug',
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
