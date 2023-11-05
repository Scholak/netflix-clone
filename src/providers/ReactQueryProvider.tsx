'use client'

import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/queryClient'

interface IReactQueryProviderProps {
  children: React.ReactNode
}

const ReactQueryProvider = ({ children }: IReactQueryProviderProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider