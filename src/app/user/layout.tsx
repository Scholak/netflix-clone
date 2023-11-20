import { Navbar, UserFooter } from '@/components'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

interface IUserLayoutProps {
	children: React.ReactNode
}

const UserLayout = async ({ children }: IUserLayoutProps) => {
	const session = await getServerSession(authOptions)

	if (!session?.user.profileId) {
		redirect('/browse')
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<main className='flex-1 bg-neutral-900'>{children}</main>
			<UserFooter />
		</div>
	)
}

export default UserLayout