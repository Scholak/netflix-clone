'use client'

// Library Imports
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
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
	{ name: 'basic', price: '99,99' },
	{ name: 'standard', price: '149,99' },
	{ name: 'premium', price: '199,99' },
]

const PaymentWithCardForm = () => {
	const t = useTranslations('Molecules.PaymentWithCardForm')
	const validation = useTranslations('Validation')
	const router = useRouter()

	const paymentWitchCardMutation = useMutation({
		mutationFn: signup,
		onError: () => {
			alert(t('responseError'))
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
				alert(t('responseError'))
			}
		} else {
			alert(t('confirmError'))
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-2'>
				<Input
					label={t('cardLabel')}
					{...register('cardNumber')}
				/>
				{errors.cardNumber && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{validation(errors.cardNumber.message)}
					</Text>
				)}
			</div>
			<div className='grid grid-cols-2 gap-4'>
				<div className='mb-2'>
					<Input
						type='month'
						label={t('expiryLabel')}
						{...register('expiryDate')}
					/>
					{errors.expiryDate && (
						<Text
							element='span'
							size='xs'
							className='text-red'
						>
							{validation(errors.expiryDate.message)}
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
							{validation(errors.cvv.message)}
						</Text>
					)}
				</div>
			</div>
			<div className='mb-2'>
				<Input
					label={t('cardHolderLabel')}
					{...register('cardHolder')}
				/>
				{errors.cardHolder && (
					<Text
						element='span'
						size='xs'
						className='text-red'
					>
						{validation(errors.cardHolder.message)}
					</Text>
				)}
			</div>
			<div className='mt-4 flex items-center justify-between bg-neutral-100 rounded p-3'>
				<div className='font-medium'>
					<Text>
						{plans[planId].price} {t('monthlyPrice')}
					</Text>
					<Text
						size='sm'
						className='text-neutral-600'
					>
						{t(plans[planId].name)}
					</Text>
				</div>
				<Link
					href='/signup/editplan'
					className='text-sky-600 font-medium'
				>
					{t('change')}
				</Link>
			</div>
			<Text
				size='xs'
				className='my-4 text-neutral-500'
			>
				{t('descriptionTextOne')}
			</Text>
			<Text
				size='xs'
				className='text-neutral-500'
			>
				{t.rich('descriptionTextTwo', {
					link: chunks => (
						<Text
							element='span'
							size='xs'
							className='text-sky-400 cursor-pointer hover:underline'
						>
							{chunks}
						</Text>
					),
				})}
			</Text>
			<div className='my-4 flex items-center gap-3'>
				<Checkbox
					label={t('confirm')}
					{...register('confirm')}
				/>
			</div>
			<Button size='lg'>{t('start')}</Button>
		</form>
	)
}

export default PaymentWithCardForm
