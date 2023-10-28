// import { useSessionQuery } from '@/entities/session/queries'
import { useSessionQuery } from '@/entities/session'
import { authControllerGetSessionInfo } from '@/shared/api/generated'
import { ROUTES } from '@/shared/constants/routes'
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { PropsWithChildren, ReactElement, useReducer } from 'react'

export function protectedPage<P>(Component: (props: P) => ReactElement) {
	return function ProtectedPage(props: PropsWithChildren<P>) {
		const router = useRouter()
		const { isLoading = true, isError } = useSessionQuery()

		if (isLoading) {
			return <UiPageSpinner />
		}

		if (isError) {
			router.replace(ROUTES.signIn)
		}

		return <Component {...props} />
	}
}
