/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
};

module.exports = nextConfig;
