'use client'

import { IProfile } from '@/types/profileType'
import React from 'react'
import { ProfileCard } from '..'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '@/services/profileService'
import ProfileLoader from './ProfileLoader'

interface IProfilesProps {
  isEditingMode?: boolean
}

const Profiles = ({ isEditingMode }: IProfilesProps) => {
	const { data: profiles, isLoading } = useQuery({
		queryKey: ['profiles'],
		queryFn: getProfiles,
	})

	if (isLoading) {
		return <ProfileLoader />
	}

	return (
		<>
			{profiles?.map((profile: IProfile) => (
				<ProfileCard key={profile.id} profile={profile} editing={isEditingMode} />
			))}
		</>
	)
}

export default Profiles