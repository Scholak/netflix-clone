'use client'

// Library Imports
import { ChangeEvent } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

// Service Imports
import { changeLanguage } from '@/services/languageService'

const LanguageSwitcher = () => {
	const router = useRouter()
	const locale = useLocale()

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
			value={locale}
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
