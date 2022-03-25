/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/werbeaktionen',
        destination: '/neuigkeiten-werbeaktionen',
        permanent: true,
      },
      {
        source: '/posts',
        destination: '/neuigkeiten-werbeaktionen',
        permanent: true,
      },
    ];
  },
};
