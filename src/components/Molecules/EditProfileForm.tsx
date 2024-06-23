'use client'

// Library Imports
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'

// Type Imports
import { IProfile } from '@/types/profileType'
import { IEditProfile } from '@/types/forms/editProfileType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Utiltiy Imports
import { api } from '@/lib/api'
import { queryClient } from '@/lib/queryClient'

// Service Imports
import { editProfile } from '@/services/profileService'

// Validation Imports
import { editProfileSchema } from '@/validations/editProfileSchema'

interface IEditProfileFormProps {
	profile: IProfile
}

const EditProfileForm = ({ profile }: IEditProfileFormProps) => {
	const t = useTranslations('Molecules.EditProfileForm')
	const validation = useTranslations('Validation')
	const router = useRouter()

	const [responseError, setResponseError] = useState<string>('')

	const editProfileMutation = useMutation({
		mutationFn: editProfile,
		onError: (error: any) => {
			setResponseError(error.response.data.message)
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditProfile>({
		resolver: zodResolver(editProfileSchema),
		defaultValues: {
			name: profile.name,
			language: profile.language === 'TURKISH' ? 'tr' : 'en',
		},
	})

	const onSubmit = async (data: IEditProfile) => {
		try {
			await editProfileMutation.mutateAsync({ id: profile.id, data })
			queryClient.invalidateQueries({ queryKey: ['profiles'] })
			router.refresh()
			setTimeout(() => router.push('/manageProfiles'), 500)
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}
	}

	const handleDeleteProfile = async () => {
		try {
			await api.delete(`/profile/${profile.id}`)
			router.push('/manageProfiles')
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{responseError && <h2 className='mb-4 text-xl text-red font-medium'>{responseError}</h2>}
			<div className='flex flex-col items-center gap-4 md:flex-row'>
				<div className='shrink-0 w-40 h-40 flex items-center justify-center'>
					<Image
						unoptimized
						src={`/avatars/${profile.avatar}.jpg`}
						alt='avatar image'
						width={400}
						height={400}
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='w-full flex flex-col gap-4'>
					<div className='w-full flex-1'>
						<Input
							variant='lightGray'
							placeholder={t('namePlaceholder')}
							{...register('name')}
						/>
						{errors.name && (
							<Text
								element='span'
								size='xs'
								className='mt-1 text-red'
							>
								{validation(errors.name.message)}
							</Text>
						)}
					</div>
					<div className='w-full flex-1'>
						<select
							{...register('language')}
							className='w-full p-3 text-xl bg-neutral-500 text-white outline-none rounded placeholder:text-white placeholder:text-xl'
						>
							<option
								value='tr'
								selected={profile.language === 'TURKISH'}
							>
								Türkçe
							</option>
							<option
								value='en'
								selected={profile.language === 'ENGLISH'}
							>
								English
							</option>
						</select>
						{errors.language && (
							<Text
								element='span'
								size='xs'
								className='mt-1 text-red'
							>
								{validation(errors.language.message)}
							</Text>
						)}
					</div>
				</div>
			</div>
			<div className='h-px mt-8 mb-12 bg-neutral-600'></div>
			<div className='flex flex-col gap-4 md:flex-row'>
				<Button className='text-neutral-900 bg-white rounded-sm hover:text-white hover:bg-red'>{t('save')}</Button>
				<Button
					variant='link'
					href='/browse'
					className='text-neutral-400 bg-trasnparent rounded-sm border-neutral-400 hover:text-white hover:border-white hover:bg-transparent'
					outlined
				>
					{t('cancel')}
				</Button>
				<Text
					size='xl'
					align='center'
					onClick={handleDeleteProfile}
					className='py-3 px-8 text-neutral-400 border border-neutral-400 cursor-pointer hover:text-white hover:border-white'
				>
					{t('delete')}
				</Text>
			</div>
		</form>
	)
}

export default EditProfileForm
