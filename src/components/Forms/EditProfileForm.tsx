'use client'

import { api } from '@/lib/api'
import { queryClient } from '@/lib/queryClient'
import { editProfile } from '@/services/profileService'
import { IEditProfile } from '@/types/forms/editProfileType'
import { IProfile } from '@/types/profileType'
import { editProfileSchema } from '@/validations/editProfileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IEditProfileFormProps {
	profile: IProfile
}

const EditProfileForm = ({ profile }: IEditProfileFormProps) => {
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
			router.push('/manageProfiles')
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
						<input
							type='text'
							{...register('name')}
							className='w-full p-3 text-xl bg-neutral-500 text-white outline-none rounded placeholder:text-white placeholder:text-xl'
							placeholder='Adı'
						/>
						{errors.name && <p className='mt-1 text-red text-sm'>{errors.name.message}</p>}
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
						{errors.language && <p className='mt-1 text-red text-sm'>{errors.language.message}</p>}
					</div>
				</div>
			</div>
			<div className='h-px mt-8 mb-12 bg-neutral-600'></div>
			<div className='flex flex-col gap-4 md:flex-row'>
				<button
					type='submit'
					className='py-3 px-8 text-neutral-900 bg-white text-xl font-bold hover:text-white hover:bg-red'
				>
					Kaydet
				</button>
				<Link
					href='/browse'
					className='py-3 px-8 text-neutral-400 text-xl text-center border border-neutral-400 hover:text-white hover:border-white'
				>
					İptal
				</Link>
				<p
					onClick={handleDeleteProfile}
					className='py-3 px-8 text-neutral-400 text-xl text-center border border-neutral-400 cursor-pointer hover:text-white hover:border-white'
				>
					Profili Sil
				</p>
			</div>
		</form>
	)
}

export default EditProfileForm
