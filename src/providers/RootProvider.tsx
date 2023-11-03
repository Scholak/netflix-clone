'use client'

import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import AuthProvider from './AuthProvider'
import ReduxProvider from './ReduxProvider'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider = ({children}: IRootProviderProps) => {
  return (
		<AuthProvider>
			<ReduxProvider>
				{children}
			</ReduxProvider>
		</AuthProvider>
	)
}

export default RootProvider