// Library Imports
import { NextRequest, NextResponse } from 'next/server'

// Utility Imports
import { auth } from '@/lib/auth'

export default async function middleware(req: NextRequest) {
	const session = await auth()

	if (!session) return NextResponse.redirect(`${process.env.APP_URL}/login`)

	return NextResponse.next()
}

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
