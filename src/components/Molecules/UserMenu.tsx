'use client'

// Library Imports
import { useRouter } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import { FaCaretDown, FaFileExport, FaPencilAlt, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

// Type Imports
import { IProfile } from '@/types/profileType'

// Component Imports
import Text from '@/components/Atoms/Text'

// Service Imports
import { getProfiles } from '@/services/profileService'
import { useTranslations } from 'next-intl'

const UserMenu = () => {
	const t = useTranslations('Molecules.UserMenu')
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
			<div className='w-8 h-8'>
				{profiles && session.data?.user.profileId && (
					<Image
						unoptimized
						src={`/avatars/${
							profiles.filter((profile: IProfile) => profile.id === session.data?.user.profileId)[0].avatar
						}.jpg`}
						alt='avatar image'
						width={50}
						height={50}
						className='w-full h-full object-cover'
					/>
				)}
			</div>
			<FaCaretDown className='text-white transition duration-500 group-hover:rotate-180' />
			<div className='hidden absolute top-0 pt-12 right-0 w-52 group-hover:block group-hover:pointer-events-auto'>
				<div className='bg-neutral-800 border border-neutral-300'>
					<div className='grid gap-2 mb-3 p-3'>
						{profiles?.map((profile: IProfile) => (
							<div
								key={profile.id}
								onClick={() => handleSwitchProfile(profile.id)}
								className='flex items-center gap-3 hover:underline'
							>
								<div className='w-6 h-6'>
									<Image
										unoptimized
										src={`/avatars/${profile.avatar}.jpg`}
										alt='avatar image'
										width={50}
										height={50}
										className='w-full h-full object-cover'
									/>
								</div>
								<Text dark>{profile.name}</Text>
							</div>
						))}
					</div>
					<Link
						href='/manageProfiles'
						className='mb-3 px-3 flex items-center gap-2 hover:underline'
					>
						<FaPencilAlt className='text-lg' />
						<Text size='sm'>{t('profileManagement')}</Text>
					</Link>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaFileExport className='text-lg' />
						<Text size='sm'>{t('transferProfile')}</Text>
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaRegUser className='text-lg' />
						<Text size='sm'>{t('account')}</Text>
					</div>
					<div className='mb-3 px-3 flex items-center gap-2 hover:underline'>
						<FaRegQuestionCircle className='text-lg' />
						<Text size='sm'>{t('helpCenter')}</Text>
					</div>
					<div className='h-px bg-neutral-300'></div>
					<button
						onClick={() => signOut()}
						className='py-3 pl-6 hover:underline'
					>
						{t('signout')}
					</button>
				</div>
			</div>
		</div>
	)
}

export default UserMenu
