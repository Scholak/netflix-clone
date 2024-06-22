'use client'

// Library Imports
import { ChangeEvent } from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'

// Service Imports
import { changeLanguage } from '@/services/languageService'

const SignupLanguageSwitcher = () => {
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
			className='py-2 px-4 bg-transparent outline-none border border-neutral-400 rounded-md cursor-pointer'
		>
			<option value='tr'>Türkçe</option>
			<option value='en'>English</option>
		</select>
	)
}

export default SignupLanguageSwitcher
