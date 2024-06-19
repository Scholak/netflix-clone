// Component Imports
import Text from '@/components/Atoms/Text'

type ISignupStepperProps = {
	step: string
	align?: 'left' | 'center' | 'right'
}

const SignupStepper = ({ step, align = 'center' }: ISignupStepperProps) => {
	return (
		<Text
			element='h2'
			size='lg'
			align={align}
		>
			ADIM{' '}
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
