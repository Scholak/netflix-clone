'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface IAuthProviderProps {
	children: React.ReactNode
}

const AuthProvider = ({children}: IAuthProviderProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider