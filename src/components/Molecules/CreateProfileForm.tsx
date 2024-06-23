'use client'

// Library Imports
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

// Type Imports
import { ICreateProfile } from '@/types/forms/createProfileType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Utility Imports
import { queryClient } from '@/lib/queryClient'

// Service Imports
import { createNewProfile } from '@/services/profileService'

// Validation Imports
import { createProfileSchema } from '@/validations/createProfileSchema'

const CreateProfileForm = () => {
	const t = useTranslations('Molecules.CreateProfileForm')
	const validation = useTranslations('Validation')
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
			{responseError && (
				<Text
					element='h2'
					size='xl'
					weight='medium'
					className='mb-4 text-red'
				>
					{responseError}
				</Text>
			)}
			<div className='flex flex-col items-center gap-4 md:flex-row'>
				<div className='shrink-0 w-40 h-40 flex items-center justify-center rounded bg-red border-4 border-red group-hover:border-white'></div>
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
								selected
							>
								Türkçe
							</option>
							<option value='en'>English</option>
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
				<Button className='text-neutral-900 bg-white rounded-sm hover:text-white hover:bg-red'>{t('continue')}</Button>
				<Button
					variant='link'
					href='/browse'
					className='text-neutral-400 bg-trasnparent rounded-sm border-neutral-400 hover:text-white hover:border-white hover:bg-transparent'
					outlined
				>
					{t('cancel')}
				</Button>
			</div>
		</form>
	)
}

export default CreateProfileForm
