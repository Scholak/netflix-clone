// Library Imports
import { getTranslations } from 'next-intl/server'

// Component Imports
import Text from '@/components/Atoms/Text'

type ISignupStepperProps = {
	step: string
	align?: 'left' | 'center' | 'right'
}

const SignupStepper = async ({ step, align = 'center' }: ISignupStepperProps) => {
	const t = await getTranslations('Molecules.SignupStepper')

	return (
		<Text
			element='h2'
			size='lg'
			align={align}
		>
			{t('step')}{' '}
			<Text
				element='span'
				weight='bold'
			>
				{step} / 3
			</Text>
		</Text>
	)
}

export default SignupStepper
