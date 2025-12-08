// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  enabled: process.env.ANALYZE === 'true'
// });
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    // webpack: (config) => {
    //   config.resolve.fallback = { fs: false };
    //   return config;
    // },
    turbopack: {
        root: path.join(__dirname, '')
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        JWT_SECRET: process.env.JWT_SECRET
    },
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            },
            {
                hostname: 'res.cloudinary.com'
            },
            {
                hostname: 'nextall.vercel.app'
            },
            { hostname: 'nextall-fe-staging.vercel.app' },
            {
                hostname: 'cdn.vbrae.com'
            },
            {
                hostname: 'vbrae.com'
            },
            {
                hostname: 'images.igdb.com'
            },
            {
                hostname: 'static.kinguin.net'
            }
        ]
    }
};

module.exports = nextConfig;
