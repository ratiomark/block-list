import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { useSignUpForm } from '../model/use-sign-up-form'
import { UiLink } from '@/shared/ui/ui-link'
import { ROUTES } from '@/shared/constants/routes'

export function SignUpForm() {
	const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm()

	return (
		<form className='flex flex-col gap-8' onSubmit={handleSubmit}>
			<UiTextField
				label='Email'
				inputProps={{
					...register('email'),
					required: true,
					type: 'email',
				}}
			/>
			<UiTextField
				label='Password'
				inputProps={{
					...register('password'),
					required: true,
					type: 'password',
					// value: setPassword,
				}}
			/>
			<UiButton disabled={isLoading}>Sign Up</UiButton>
			<UiLink
				href={ROUTES.signIn}
				text={
					<p>
						Already have an account? <strong>Sign In.</strong>
					</p>
				}
			/>
			{errorMessage && <div className='text-red-500'>{errorMessage}</div>}
		</form>
	)
}
