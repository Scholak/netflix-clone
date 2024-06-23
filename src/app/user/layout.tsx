// Library Imports
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

// Component Imports
import UserNavbar from '@/components/Organisms/UserNavbar'
import UserFooter from '@/components/Organisms/UserFooter'

// Utility Imports
import { auth } from '@/lib/auth'

type IUserLayoutProps = {
	children: ReactNode
}

const UserLayout = async ({ children }: IUserLayoutProps) => {
	const session = await auth()

	if (!session?.user.profileId) {
		redirect('/browse')
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<UserNavbar />
			<main className='flex-1 bg-neutral-900'>{children}</main>
			<UserFooter />
		</div>
	)
}

export default UserLayout
