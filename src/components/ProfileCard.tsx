import React from 'react'

interface IProfileCardProps {
	profile: any
}

const ProfileCard = ({ profile }: any) => {
	return (
		<div className='group flex flex-col gap-4 items-center hover:cursor-pointer'>
			<div className='w-48 h-48 flex items-center justify-center rounded bg-red border-4 border-red group-hover:border-white'></div>
			<p className='text-neutral-400 text-2xl group-hover:text-white'>{profile.name}</p>
		</div>
	)
}

export default ProfileCard