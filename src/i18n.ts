import { getRequestConfig } from 'next-intl/server'
import { cookies } from 'next/headers'

export default getRequestConfig(async () => {
	const locale = cookies().get('language')?.value ?? 'tr'

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})