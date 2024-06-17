import { getRequestConfig } from 'next-intl/server'
import { auth } from './lib/auth'

export default getRequestConfig(async () => {
	const session = await auth()

	const locale = session?.user?.language === 'TURKISH' ? 'tr' : 'en'

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})
