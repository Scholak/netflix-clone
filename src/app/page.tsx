// Library Imports
import { redirect } from 'next/navigation'

// Utility Imports
import { auth } from '@/lib/auth'

// Component Imports
import Divider from '@/components/Atoms/Divider'
import CookiePreferences from '@/components/Organisms/CookiePreferences'
import Hero from '@/components/Organisms/Hero'
import Features from '@/components/Organisms/Features'
import Faq from '@/components/Organisms/Faq'
import GetStarted from '@/components/Organisms/GetStarted'
import HomeFooter from '@/components/Organisms/HomeFooter'

const HomePage = async () => {
	const session = await auth()

	if (!!session) {
		redirect('/user')
	}

	return (
		<div className='relative'>
			<CookiePreferences />
			<Hero />
			<Divider />
			<Features />
			<Faq />
			<GetStarted />
			<Divider />
			<HomeFooter />
		</div>
	)
}

export default HomePage
