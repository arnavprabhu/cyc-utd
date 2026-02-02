import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "**",
            },
        ],
    },
    output: "export",
    trailingSlash: true,
    basePath,
    assetPrefix: basePath || undefined,
};

export default nextConfig;
