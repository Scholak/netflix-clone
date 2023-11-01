'use client'

import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

interface IRootProviderProps {
	children: React.ReactNode
}

const RootProvider = ({children}: IRootProviderProps) => {
  return (
    <>
      <Provider store={store}>
        {children}
      </Provider>
    </>
  )
}

export default RootProvider