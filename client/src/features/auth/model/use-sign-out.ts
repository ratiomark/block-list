import { useResetSession } from '@/entities/session'
import { authControllerSignOut } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

export const useSignOut = () => {
	const resetSession = useResetSession()
	const router = useRouter()

	const signOutMutation = useMutation({
		mutationFn: authControllerSignOut,
		// отработает при успешном выполнении запроса

		async onSuccess() {
			router.push(ROUTES.signIn)
			resetSession()
		},
	})

	return {
		signOut: signOutMutation.mutate,
		isLoading: signOutMutation.isPending,
	}
}
