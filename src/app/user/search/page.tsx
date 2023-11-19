import { SearchCard } from '@/components'
import { api } from '@/lib/api'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

interface ISearchParams {
	searchParams: {
    q?: string
  }
}

const SearchPage = async ({ searchParams }: ISearchParams) => {
  if (!searchParams.q || searchParams.q === '') {
    redirect('/user')
  }

  const movieResponse = await api.get(`/movies/search?q=${searchParams.q}`)
  const serieResponse = await api.get(`/series/search?q=${searchParams.q}`)

  return (
		<div className='p-4 py-4 py-20 md:p-8 xl:px-16 bg-neutral-900'>
			<h5 className='flex items-end gap-2 text-3xl text-white font-bold mb-auto'>
			{movieResponse.data.movies.length === 0 && serieResponse.data.series.length === 0 ? (
				<>
					<span>{searchParams.q}</span>
					<span className='text-neutral-300 text-lg font-medium'>için sonuç bulunamadı</span>
				</>
			) : (
				<>
					<span>{searchParams.q}</span>
					<span className='text-neutral-300 text-lg font-medium'>için arama sonuçları</span>
				</>
			)}
			</h5>
			<div className='grid gap-4 md:gap-y-16 lg:gap-y-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
				{movieResponse.data.movies.map((movie: any) => (
					<SearchCard media={movie} type='movie' key={movie.id} />
				))}
				{serieResponse.data.series.map((serie: any) => (
					<SearchCard media={serie} type='serie' key={serie.id} />
				))}
			</div>
		</div>
	)
}

export default SearchPage