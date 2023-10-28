import { UiButton } from '@/shared/ui/ui-button'
import { UiLink } from '@/shared/ui/ui-link'

import { useToggleBlocking } from '../model/use-toggle-blocking'

export function ToggleBlockingButton() {
	const { isBlockingEnabled, isLoading, toggleBlocking } = useToggleBlocking()

	return (
		<UiLink href='/' text='Toggle Blocking' scroll={false} />
		// <UiButton
		// 	onClick={toggleBlocking}
		// 	variant={isBlockingEnabled ? 'primary' : 'secondary'}
		// 	disabled={isLoading}>
		// 	{isBlockingEnabled ? 'Disable Blocking' : 'Enable Blocking'}
		// </UiButton>
	)
}
