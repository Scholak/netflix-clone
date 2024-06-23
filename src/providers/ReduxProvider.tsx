'use client'

import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

type IReduxProviderProps = {
	children: React.ReactNode
}

const ReduxProvider = ({ children }: IReduxProviderProps) => {
	return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
