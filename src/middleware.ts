export { default } from 'next-auth/middleware'

export const config = { matcher: ['/browse', '/create-profile', '/manageProfiles/:path*', '/user/:path*'] }
