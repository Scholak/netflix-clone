import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import RootProvider from '@/providers/RootProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix Türkiye',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={inter.className} suppressHydrationWarning={true}>
				<RootProvider>{children}</RootProvider>
			</body>
		</html>
	)
}
