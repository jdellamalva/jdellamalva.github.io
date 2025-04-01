import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
    basePath: isProduction ? "/jdellamalva.github.io" : "",
    assetPrefix: isProduction ? "/jdellamalva.github.io" : "",
    output: "export",
};

export default nextConfig;
