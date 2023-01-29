/** @type {import('next').NextConfig} */

module.exports = {
   experimental: {
    appDir: false,
  },
    reactStrictMode: true,
    eslint: {
      ignoreDuringBuilds: true,
    },
}
