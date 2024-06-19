'use client'

// Library Imports
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

// Type Imports
import { RootState } from '@/redux/store'
import { IPayWithCard } from '@/types/forms/payWithCardType'

// Component Imports
import Text from '@/components/Atoms/Text'
import Input from '@/components/Atoms/Input'
import Button from '@/components/Atoms/Button'
import Checkbox from '@/components/Atoms/Checkbox'

// Service Imports
import { signup } from '@/services/userService'

// Validation Imports
import { payWithCardSchema } from '@/validations/payWithCardSchema'

const plans = [
	{ name: 'Temel', price: '99,99' },
	{ name: 'Standart', price: '149,99' },
	{ name: 'Özel', price: '199,99' },
]

const PaymentWithCardForm = () => {
	const router = useRouter()

	const paymentWitchCardMutation = useMutation({
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
	} = useForm<IPayWithCard>({
		resolver: zodResolver(payWithCardSchema),
	})

	const onSubmit = async (data: IPayWithCard) => {
		if (data.confirm) {
			try {
				await paymentWitchCardMutation.mutateAsync({
					email,
					password,
					planId,
					cardNumber: `**** **** **** ${data.cardNumber.slice(Number(data.cardNumber) - 4)}`,
				})
			} catch (error: any) {
				alert('bir hata oluştu')
			}
		} else {
			alert('Lütfen onaylayın!')
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-2'>
				<Input
					label='Kart Numarası'
					{...register('cardNumber')}
				/>
				{errors.cardNumber && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{errors.cardNumber.message}
					</Text>
				)}
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='mb-2'>
					<Input
						type='month'
						label='Son kullanma tarihi'
						{...register('expiryDate')}
					/>
					{errors.expiryDate && (
						<Text
							element='span'
							size='xs'
							className='text-red'
						>
							{errors.expiryDate.message}
						</Text>
					)}
				</div>
				<div className='mb-2'>
					<Input
						label='CVV'
						{...register('cvv')}
					/>
					{errors.cvv && (
						<Text
							element='span'
							size='xs'
							className='text-red'
						>
							{errors.cvv.message}
						</Text>
					)}
				</div>
			</div>
			<div className='mb-2'>
				<Input
					label='Kart üzerindeki ad'
					{...register('cardHolder')}
				/>
				{errors.cardHolder && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{errors.cardHolder.message}
					</Text>
				)}
			</div>
			<div className='flex items-center justify-between bg-neutral-100 rounded p-3'>
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
			<Text
				size='xs'
				className='mb-4 text-neutral-500'
			>
				Ödemeleriniz uluslararası olarak işlenecektir. İlave banka ücretleri uygulanabilir.
			</Text>
			<Text
				size='xs'
				className='text-neutral-500'
			>
				Aşağıdaki onay kutusunu işaretleyerek{' '}
				<Text
					size='xs'
					className='text-sky-400 cursor-pointer hover:underline'
				>
					Kullanım Koşullarımızı,{' '}
				</Text>
				<Text
					size='xs'
					className='text-sky-400 cursor-pointer hover:underline'
				>
					Gizlilik Bildirimimizi
				</Text>{' '}
				ve 18 yaşından büyük olduğunuzu kabul edersiniz. Netflix, üyeliğinizi otomatik olarak devam ettirecek ve siz
				iptal edene kadar üyelik ücretini (şu anda aylık 99,99 TL) ödeme yönteminizden tahsil edecektir. Gelecekte ücret
				alınmasını istemiyorsanız üyeliğinizi istediğiniz zaman iptal edebilirsiniz.
			</Text>
			<div className='my-4 flex items-center gap-3'>
				<Checkbox
					label='Kabul ediyorum'
					{...register('confirm')}
				/>
			</div>
			<Button size='lg'>Üyeliğinizi Başlatın</Button>
		</form>
	)
}

export default PaymentWithCardForm
