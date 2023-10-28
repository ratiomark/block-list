import { authControllerSignIn } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'

export const useSignInForm = () => {
	const router = useRouter()

	const { register, handleSubmit } = useForm<{
		email: string
		password: string
	}>()

	const signInMutation = useMutation({
		mutationFn: authControllerSignIn,
		// отработает при успешном выполнении запроса
		onSuccess: () => {
			router.push(ROUTES.home)
		},
	})

	const errorMessage = signInMutation.error ? 'Sign in failed' : null

	return {
		register,
		errorMessage,
		// вот это классный прием, инкапслуируем логику внутри хука
		handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
		isLoading: signInMutation.isPending,
	}
}
