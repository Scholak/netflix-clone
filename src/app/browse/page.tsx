import { AddProfileCard, ProfileCard } from '@/components'
import Link from 'next/link'
import React from 'react'

const profile = {
  id: 1,
  name: 'Sebahattin'
}

const BrowsePage = () => {
  return (
		<div className='min-h-[100dvh] mx-auto flex items-center justify-center bg-neutral-900'>
			<div className='flex flex-col items-center mx-auto'>
				<h1 className='mt-8 mb-12 text-white font-medium text-center text-4xl md:text-6xl md:mt-0'>Kim izliyor?</h1>
				<div className='flex flex-wrap justify-center gap-8'>
					<ProfileCard profile={profile} />
					<ProfileCard profile={profile} />
					<ProfileCard profile={profile} />
					<AddProfileCard />
				</div>
        <Link href='/ManageProfiles' className='inline-block mt-16 mb-8 px-8 py-3 text-xl font-medium text-neutral-500 border border-neutral-500 shadow rounded-sm hover:text-white hover:border-white md:mb-0'>Profil Yönetimi</Link>
			</div>
		</div>
	)
}

export default BrowsePage