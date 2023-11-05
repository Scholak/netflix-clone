'use client'

import { api } from '@/lib/api'
import { IProfile } from '@/types/profileType'
import React, { useEffect, useState } from 'react'
import { ProfileCard } from '.'

interface IProfilesProps {
  isEditingMode?: boolean
}

const Profiles = ({ isEditingMode }: IProfilesProps) => {
	const [profiles, setProfiles] = useState<IProfile[]>([])

	useEffect(() => {
		api.get('/profile').then((response: any) => {
			setProfiles(response.data.profiles)
		})
	}, [profiles])

	return (
		<>
			{profiles.map((profile: IProfile) => (
				<ProfileCard key={profile.id} profile={profile} editing={isEditingMode} />
			))}
		</>
	)
}

export default Profiles