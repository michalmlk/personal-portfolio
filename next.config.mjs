/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com',
                port: '',
                pathname: `/${process.env.NEXT_DATOCMS_RESOURCES_ID}/**`,
            }
        ]
    }
};

export default nextConfig;
