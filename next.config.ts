import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "utfs.io",
			},
			{
				protocol: "https",
				hostname: "cf4hd1ue52.ufs.sh",
			},
			{
				protocol: "https",
				hostname: "img.clerk.com",
			},

			{
				protocol: "https",
				hostname: "github.com",
			},
		],
	},
};

export default nextConfig;
