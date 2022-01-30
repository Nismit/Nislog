module.exports = {
  images: {
    domains: ['localhost', 'blog.nismit.me'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/page/1',
        destination: '/',
        permanent: true,
      },
    ]
  },
}