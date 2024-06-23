// Library Imports
import { cookies } from 'next/headers'
import { getRequestConfig } from 'next-intl/server'

// Enum Imports
import { LANGUAGES } from './enums/Language'

export default getRequestConfig(async () => {
	const locale = LANGUAGES.includes(cookies().get('language')?.value as string)
		? cookies().get('language')?.value
		: 'tr'

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})
