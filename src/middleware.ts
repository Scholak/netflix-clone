export { auth as middleware } from '@/lib/auth'

export const config = {
	matcher: [
		'/browse',
		'/create-profile',
		'/manageProfiles/:path*',
		'/user/:path*',
		'/api/profile/:path*',
		'/api/movies/:path*',
		'/api/series/:path*',
		'/api/list/:path*',
	],
}
