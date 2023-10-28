import { AddBlockItemForm, BlockList } from '@/features/block-list'
import { ToggleBlockingButton } from '@/features/toggle-blocking'
import { UiHeader } from '@/shared/ui/ui-header'
import { HeaderProfile } from '@/widgets/header-profile'

export function HomePage() {
	return (
		<div className='flex flex-col min-h-screen'>
			<UiHeader right={<HeaderProfile />} />

			<div className='grid grid-cols-[200px_1fr]'>
				<aside className='px-5 pt-10'>
					<ToggleBlockingButton />
				</aside>
				<main className='px-5 pt-10'>
					<h1 className='mb-8 text-2xl'>Block list</h1>
					<AddBlockItemForm />
					<BlockList className='pt-5' />
				</main>
			</div>
		</div>
	)
}
