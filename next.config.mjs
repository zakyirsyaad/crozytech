/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maven.co.id'
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
            {
                protocol: 'https',
                hostname: 'cjqizykabizqobxdnvmh.supabase.co'
            }
        ]
    },
};

export default nextConfig;
