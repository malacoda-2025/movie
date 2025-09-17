/** @type {import('next').NextConfig} */
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // tells Next.js to generate static HTML
    images: {
        unoptimized: true, // disables Image Optimization (since GitHub Pages doesn't support it)
    },
    basePath: '/movie', // <-- only if your repo name is NOT username.github.io
    assetPrefix: '/movie/', // same as above
}

module.exports = nextConfig;
