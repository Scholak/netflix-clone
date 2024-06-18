'use client'

import { queryClient } from '@/lib/queryClient'
import { createNewProfile } from '@/services/profileService'
import { ICreateProfile } from '@/types/forms/createProfileType'
import { createProfileSchema } from '@/validations/createProfileSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const CreateProfileForm = () => {
	const router = useRouter()

	const [responseError, setResponseError] = useState<string>('')

	const createProfileMutation = useMutation({
		mutationFn: createNewProfile,
		onError: (error: any) => {
			setResponseError(error.response.data.message)
		},
	})

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ICreateProfile>({
		resolver: zodResolver(createProfileSchema),
	})

	const onSubmit = async (data: ICreateProfile) => {
		try {
			await createProfileMutation.mutateAsync(data)
			queryClient.invalidateQueries({ queryKey: ['profiles'] })
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
								selected
							>
								Türkçe
							</option>
							<option value='en'>English</option>
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
					Devam Et
				</button>
				<Link
					href='/browse'
					className='py-3 px-8 text-neutral-400 text-xl text-center border border-neutral-400 hover:text-white hover:border-white'
				>
					İptal
				</Link>
			</div>
		</form>
	)
}

export default CreateProfileForm
