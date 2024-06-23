'use client'

// Library Imports
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { FaPencilAlt } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

// Type Imports
import { IProfile } from '@/types/profileType'

// Component Imports
import Text from '@/components/Atoms/Text'

type IProfileCardProps ={
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
						unoptimized
						src={`/avatars/${profile.avatar}.jpg`}
						alt='avatar image'
						width={400}
						height={400}
						className='w-full h-full object-cover'
					/>
				</div>
				<Text
					size='2xl'
					className='text-neutral-400 group-hover:text-white'
				>
					{profile.name}
				</Text>
			</Link>
		)
	}

	return (
		<button
			onClick={handleRedirectUser}
			className='group flex flex-col gap-4 items-center hover:cursor-pointer'
		>
			<div className='w-48 h-48 flex items-center justify-center border-4 border-transparent group-hover:border-white'>
				<Image
					unoptimized
					src={`/avatars/${profile.avatar}.jpg`}
					alt='avatar image'
					width={400}
					height={400}
					className='w-full h-full object-cover'
				/>
			</div>
			<Text
				size='2xl'
				className='text-neutral-400 group-hover:text-white'
			>
				{profile.name}
			</Text>
		</button>
	)
}

export default ProfileCard
