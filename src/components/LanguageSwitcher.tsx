'use client'

import { changeLanguage } from '@/services/languageService'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'

interface ILanguageSwitcherProps {
	defaultValue: 'tr' | 'en'
}

const LanguageSwitcher = ({ defaultValue }: ILanguageSwitcherProps) => {
	const router = useRouter()

	const languageMutation = useMutation({
		mutationFn: changeLanguage,
		onSuccess: () => {
			router.refresh()
		},
	})

	const handleChange = (language: 'tr' | 'en') => {
		languageMutation.mutate(language)
	}

	return (
		<select
			onChange={(event: ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value as 'tr' | 'en')}
			defaultValue={defaultValue}
			className='py-1 px-2 text-white bg-transparent outline-none border border-white rounded-md cursor-pointer'
		>
			<option
				value='tr'
				className='text-black'
			>
				Türkçe
			</option>
			<option
				value='en'
				className='text-black'
			>
				English
			</option>
		</select>
	)
}

export default LanguageSwitcher
