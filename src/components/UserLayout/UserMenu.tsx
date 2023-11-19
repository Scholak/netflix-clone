'use client'

import { queryClient } from '@/lib/queryClient'
import { getProfiles } from '@/services/profileService'
import { IProfile } from '@/types/profileType'
import { useQuery } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCaretDown, FaFileExport, FaPencilAlt, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa'

const UserMenu = () => {
	const session = useSession()
	const router = useRouter()
	
  const {
		data: profiles,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['profiles'],
		queryFn: getProfiles,
	})

	if (error) {
		// will be implemented later...
	}

	if (isLoading) {
		// skeleton loader will be implemented later...
	}

	const handleSwitchProfile = async (profileId: number) => {
		await session.update({ profileId })
		router.refresh()
	}

  return (
		<div className='group relative flex items-center gap-2 text-sm cursor-pointer'>
			<div className='w-6 h-6 bg-red rounded'></div>
			<FaCaretDown className='text-white transition duration-500 group-hover:rotate-180' />
			<div className='absolute top-0 pt-10 right-0 w-52 transition duration-300 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto'>
				<div className='bg-neutral-800 border border-neutral-300'>
					<div className='grid gap-2 mb-3 p-3'>
						{profiles?.map((profile: IProfile) => (
							<div
								key={profile.id}
								onClick={() => handleSwitchProfile(profile.id)}
								className='flex items-center gap-3 hover:underline'
							>
								<div className='w-6 h-6 rounded bg-red'></div>
								<p className='text-white'>{profile.name}</p>
							</div>
						))}
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaPencilAlt className='text-lg' />
						<p>Profil Yönetimi</p>
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaFileExport className='text-lg' />
						<p>Profili Aktar</p>
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaRegUser className='text-lg' />
						<p>Hesap</p>
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaRegQuestionCircle className='text-lg' />
						<p>Yarım Merkezi</p>
					</div>
					<div className='h-px bg-neutral-300'></div>
					<button onClick={() => signOut()} className='py-3 pl-6 hover:underline'>
						Netflix oturumunu kapat
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserMenu