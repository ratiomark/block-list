import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { useSignInForm } from '../model/use-sign-in-form'
import { ROUTES } from '@/shared/constants/routes'
import { UiLink } from '@/shared/ui/ui-link'

export function SignInForm() {
	const { handleSubmit, isLoading, register, errorMessage } = useSignInForm()

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
			<UiButton disabled={isLoading}>Sign In</UiButton>
			<UiLink
				href={ROUTES.signUp}
				text={
					<p>
						Don't have an account? <strong>Sign Up.</strong>
					</p>
				}
			/>
			{errorMessage && <div className='text-red-500'>{errorMessage}</div>}
		</form>
	)
}
