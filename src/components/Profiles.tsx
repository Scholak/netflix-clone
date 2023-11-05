'use client'

import { api } from '@/lib/api'
import { IProfile } from '@/types/profileType'
import React, { useEffect, useState } from 'react'
import { ProfileCard } from '.'

const Profiles = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([])

  useEffect(() => {
    api.get('/profile').then((response: any) => {
      setProfiles(response.data.profiles)
    })
  }, [profiles])


  return (
		<>
			{profiles.map((profile: IProfile) => (
				<ProfileCard key={profile.id} profile={profile} />
			))}
		</>
	)
}

export default Profiles