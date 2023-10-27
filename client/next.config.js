/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// rewrites встроенный в некст редиректы
	rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4444/:path*',
			}
		]
	}
}

module.exports = nextConfig
