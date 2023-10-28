import {
	authControllerGetSessionInfo,
	authControllerSignIn,
} from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'
import { UiSelectField } from '@/shared/ui/ui-select-field'
import { UiLink } from '@/shared/ui/ui-link'
import { UiSpinner } from '@/shared/ui/ui-spinner'
import { UiPageSpinner } from '@/shared/ui/ui-page-spinner'
import { UiHeader } from '@/shared/ui/ui-header'
import { SignOutButton } from '@/features/auth'
import { useSessionQuery } from '@/entities/session'

export function HomePage() {
	const { data } = useSessionQuery()

	return (
		<main>
			<UiHeader
				right={
					<div>
						{data?.email}
						<SignOutButton />
					</div>
				}
			/>
		</main>
	)
}
