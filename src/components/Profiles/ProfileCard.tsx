'use client'

import { IProfile } from '@/types/profileType'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaPencilAlt } from 'react-icons/fa'

interface IProfileCardProps {
	profile: IProfile
	editing?: boolean
}

const ProfileCard = ({ profile, editing }: IProfileCardProps) => {
	const router = useRouter()
	const session = useSession()

	const handleRedirectUser = () => {
		if (session.data) {
			session.update({ profileId: profile.id })
			router.push('/user')
		}
	}

	if (editing) {
		return (
			<Link
				href={`/manageProfiles/${profile.id}`}
				className='relative group flex flex-col gap-4 items-center hover:cursor-pointer'
			>
				<div className='profile-card-bg absolute top-0 left-0 h-48 w-48 flex items-center justify-center z-10'>
					<FaPencilAlt className='text-5xl text-white font-bold' />
				</div>
				<div className='w-48 h-48 flex items-center justify-center rounded bg-red border-4 border-red group-hover:border-white'></div>
				<p className='text-neutral-400 text-2xl group-hover:text-white'>{profile.name}</p>
			</Link>
		)
	}

	return (
		<button onClick={handleRedirectUser} className='group flex flex-col gap-4 items-center hover:cursor-pointer'>
			<div className='w-48 h-48 flex items-center justify-center rounded bg-red border-4 border-red group-hover:border-white'></div>
			<p className='text-neutral-400 text-2xl group-hover:text-white'>{profile.name}</p>
		</button>
	)
}

export default ProfileCard