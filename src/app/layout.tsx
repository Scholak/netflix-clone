// Library Imports
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

// Component Imports
import RootProvider from '@/providers/RootProvider'

// Asset Imports
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Netflix Türkiye',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<body
				className={inter.className}
				suppressHydrationWarning={true}
			>
				<NextIntlClientProvider messages={messages}>
					<RootProvider>{children}</RootProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
