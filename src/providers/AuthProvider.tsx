'use client'

import { SessionProvider } from 'next-auth/react'
import React from 'react'

type IAuthProviderProps = {
	children: React.ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
