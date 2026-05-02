import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Deliberately missing security headers:
  // - Content-Security-Policy
  // - X-Frame-Options
  // - Referrer-Policy
  // - Permissions-Policy
  // - Strict-Transport-Security
  // - X-Content-Type-Options

  // Deliberately permissive image config.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;
