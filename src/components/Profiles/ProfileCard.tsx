'use client'

import { IProfile } from '@/types/profileType'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
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

	const handleRedirectUser = async () => {
		if (session.data) {
			await session.update({ profileId: profile.id })
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
				<div className='w-48 h-48 flex items-center justify-center'>
					<Image
						src={`/avatars/${profile.avatar}.jpg`}
						alt='avatar image'
						width={400}
						height={400}
						className='w-full h-full object-cover'
					/>
				</div>
				<p className='text-neutral-400 text-2xl group-hover:text-white'>{profile.name}</p>
			</Link>
		)
	}

	return (
		<button onClick={handleRedirectUser} className='group flex flex-col gap-4 items-center hover:cursor-pointer'>
			<div className='w-48 h-48 flex items-center justify-center border-4 border-transparent group-hover:border-white'>
				<Image
					src={`/avatars/${profile.avatar}.jpg`}
					alt='avatar image'
					width={400}
					height={400}
					className='w-full h-full object-cover'
				/>
			</div>
			<p className='text-neutral-400 text-2xl group-hover:text-white'>{profile.name}</p>
		</button>
	)
}

export default ProfileCard