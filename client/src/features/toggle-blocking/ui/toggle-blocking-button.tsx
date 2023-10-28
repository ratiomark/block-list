import { UiButton } from '@/shared/ui/ui-button'
import { UiLink } from '@/shared/ui/ui-link'

import { useToggleBlocking } from '../model/use-toggle-blocking'

export function ToggleBlockingButton() {
	const {
		isBlockingEnabled,
		isReady,
		isLoading,
		toggleBlocking,
	} = useToggleBlocking()

	if (!isReady) return null

	return (
		<UiButton
			onClick={toggleBlocking}
			variant={isBlockingEnabled ? 'secondary' : 'primary'}
			disabled={isLoading}
		>
			{isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
		</UiButton>
	)
}
