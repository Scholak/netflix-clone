'use client'

import React from 'react'
import AuthProvider from './AuthProvider'
import ReduxProvider from './ReduxProvider'
import ReactQueryProvider from './ReactQueryProvider'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider = ({children}: IRootProviderProps) => {
  return (
		<AuthProvider>
			<ReduxProvider>
				<ReactQueryProvider>{children}</ReactQueryProvider>
			</ReduxProvider>
		</AuthProvider>
	)
}

export default RootProvider