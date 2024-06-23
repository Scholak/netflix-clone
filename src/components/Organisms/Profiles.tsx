'use client'

// Library Imports
import { useQuery } from '@tanstack/react-query'

// Type Imports
import { IProfile } from '@/types/profileType'

// Component Imports
import ProfileCard from '@/components/Molecules/ProfileCard'
import ProfileLoader from '@/components/Organisms/ProfileLoader'

// Service Imports
import { getProfiles } from '@/services/profileService'

type IProfilesProps = {
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
				<ProfileCard
					key={profile.id}
					profile={profile}
					editing={isEditingMode}
				/>
			))}
		</>
	)
}

export default Profiles
