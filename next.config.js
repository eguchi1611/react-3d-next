/** @type {import('next').NextConfig} */

const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

const nextConfig = {
  output: 'export',
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
}

module.exports = nextConfig
