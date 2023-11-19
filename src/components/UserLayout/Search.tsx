'use client'

import { ISearch } from '@/types/forms/searchType'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
	const router = useRouter()
	
	const [active, setActive] = useState<boolean>(false)

	const { register, handleSubmit } = useForm<ISearch>({
		
	})

	const onSubmit = (data: ISearch) => {
		router.push(`/user/search?q=${data.query}`)
	}

  return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`p-2 flex items-center gap-4 cursor-pointer border ${
				active ? 'px-4 border-white' : 'border-transparent'
			}`}
		>
			<FaSearch onClick={() => setActive(!active)} />
			<input
				{...register('query')}
				type='text'
				className={`bg-transparent active:bg-transparent focus:bg-transparent text-white rounded outline-none transition-all duration-300 ${
					active ? 'w-48' : 'w-0'
				}`}
				placeholder='içerik, kişi, tür'
			/>
		</form>
	)
}

export default Search