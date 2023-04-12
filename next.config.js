/** @type {import('next').NextConfig} */

const securityHeaders = [
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "Permissions-Policy",
		value: `camera=(); battery=(self); geolocation=(); microphone=(${process.env.NEXT_PUBLIC_DOMAIN_NAME})`,
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "origin-when-cross-origin",
	},
];

const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: false,
	images: {
		domains: ["img.pokemondb.net"],
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: securityHeaders,
			},
		];
	},
};

module.exports = nextConfig;
