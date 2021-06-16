// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  future: {
    webpack5: true
  },
  async redirects() {
    return [
      {
        source: '/old-love-is-all-we-need',
        destination: '/love-is-all-we-need',
        permanent: true,
      },
    ]
  }
})
}
