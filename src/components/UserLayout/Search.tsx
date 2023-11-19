'use client'

import { ISearch } from '@/types/forms/searchType'
import { searchSchema } from '@/validations/searchSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	
	const [active, setActive] = useState<boolean>(false)

	const { register, handleSubmit } = useForm<ISearch>({
		defaultValues: {
			query: searchParams.get('q') as string
		},
		resolver: zodResolver(searchSchema)
	})

	const onSubmit = (data: ISearch) => {
		setActive(false)
		router.push(`/user/search?q=${data.query}`)
	}

  return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`hidden p-2 items-center gap-4 border sm:flex ${active ? 'px-4 border-white' : 'border-transparent'}`}
		>
			<FaSearch onClick={() => setActive(!active)} className='cursor-pointer' />
			<input
				{...register('query')}
				type='text'
				className={`bg-transparent active:bg-transparent focus:bg-transparent text-white rounded outline-none transition-all duration-300 ${
					active ? 'sm:w-32 md:w-40 lg:w-48' : 'w-0'
				}`}
				placeholder='içerik, kişi, tür'
			/>
		</form>
	)
}

export default Search