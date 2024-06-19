'use client'

// Library Imports
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

// Type Imports
import { RootState } from '@/redux/store'
import { IGiftOption } from '@/types/forms/giftOptionType'

// Component Imports Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'

// Service Imports
import { signup } from '@/services/userService'

// Validation Imports
import { giftOptionSchema } from '@/validations/giftOptionSchema'

const plans = [
	{ name: 'Temel', price: '99,99' },
	{ name: 'Standart', price: '149,99' },
	{ name: 'Özel', price: '199,99' },
]

const GiftOptionForm = () => {
	const router = useRouter()

	const giftOptionMutation = useMutation({
		mutationFn: signup,
		onError: () => {
			alert('bir hata oluştu')
		},
		onSuccess: () => {
			router.push('/login')
		},
	})

	const { email, password, planId } = useSelector((state: RootState) => state.signup)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IGiftOption>({
		resolver: zodResolver(giftOptionSchema),
	})

	const onSubmit = async (data: IGiftOption) => {
		if (data.code === '12345678910') {
			await giftOptionMutation.mutateAsync({ email, password, planId, cardNumber: '' })
		} else {
			alert('geçersiz hediye kodu')
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('code')}
				className='py-3'
			/>
			{errors.code && (
				<Text
					element='span'
					size='xs'
					className='text-red'
				>
					{errors.code.message}
				</Text>
			)}
			<div className='my-6 flex items-center justify-between bg-neutral-100 rounded p-3'>
				<div className='font-medium'>
					<Text>{plans[planId].price} TL/ay</Text>
					<Text
						size='sm'
						className='text-neutral-600'
					>
						{plans[planId].name}
					</Text>
				</div>
				<Link
					href='/signup/editplan'
					className='text-sky-600 font-medium'
				>
					Değiştir
				</Link>
			</div>
			<Button size='lg'>Üyeliğinizi Başlatın</Button>
		</form>
	)
}

export default GiftOptionForm
