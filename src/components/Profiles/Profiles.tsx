'use client'

import { IProfile } from '@/types/profileType'
import React from 'react'
import { ProfileCard } from '..'
import { useQuery } from '@tanstack/react-query'
import { getProfiles } from '@/services/profileService'

interface IProfilesProps {
  isEditingMode?: boolean
}

const Profiles = ({ isEditingMode }: IProfilesProps) => {
	const { data: profiles, isLoading, error } = useQuery({
		queryKey: ['profiles'],
		queryFn: getProfiles,
	})

	if (error) {
		// will be implemented later...
	}

	if (isLoading) {
		// skeleton loader will be implemented later...
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