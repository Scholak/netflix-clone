'use client'

import { api } from '@/lib/api'
import { IEditProfile } from '@/types/forms/editProfileType'
import { IProfile } from '@/types/profileType'
import { editProfileSchema } from '@/validations/editProfileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IEditProfile>({
		resolver: zodResolver(editProfileSchema),
	})

	const onSubmit = async (data: IEditProfile) => {
		try {
			await api.put(`/profile/${profile.id}`, data)
			router.push('/browse')
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}
	}

	const handleDeleteProfile = async () => {
		try {
			await api.delete(`/profile/${profile.id}`)
			router.push('/browse')
		} catch (error: any) {
			setResponseError(error.response.data.message)
		}

	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{responseError && <h2 className='mb-4 text-xl text-red font-medium'>{responseError}</h2>}
			<div className='flex flex-col items-center gap-4 md:flex-row'>
				<div className='shrink-0 w-40 h-40 flex items-center justify-center rounded bg-red border-4 border-red group-hover:border-white'></div>
				<div className='w-full flex-1'>
					<input
						type='text'
            defaultValue={profile.name}
						{...register('name')}
						className='w-full p-3 text-xl bg-neutral-500 text-white outline-none rounded placeholder:text-white placeholder:text-xl'
						placeholder='Adı'
					/>
					{errors.name && <p className='mt-1 text-red text-sm'>{errors.name.message}</p>}
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
				<p onClick={handleDeleteProfile} className='py-3 px-8 text-neutral-400 text-xl text-center border border-neutral-400 hover:text-white hover:border-white'>Profili Sil</p>
			</div>
		</form>
	)
}

export default EditProfileForm
