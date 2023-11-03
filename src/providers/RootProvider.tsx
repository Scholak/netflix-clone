'use client'

import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'
import AuthProvider from './AuthProvider'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider = ({children}: IRootProviderProps) => {
  return (
		<AuthProvider>
			<Provider store={store}>{children}</Provider>
		</AuthProvider>
	)
}

export default RootProvider