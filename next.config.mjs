/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
                port: "",
                pathname: "/**"
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: '/about',
                destination: '/about',
                permanent: false,
            }
        ]
    }
};

export default nextConfig;
