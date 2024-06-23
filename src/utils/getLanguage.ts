import { LANGUAGES } from '@/enums/Language'
import { cookies } from 'next/headers'

export const getLanguage = () => {
	const language = LANGUAGES.includes(cookies().get('language')?.value as string)
		? cookies().get('language')?.value
		: 'tr'

	return language
}
