import { SignUpForm } from '@/features/auth'
import { UiHeader } from '@/shared/ui/ui-header'

export function SignUpPage() {
	return (
		<div className='min-h-screen flex flex-col bg-slate-100'>
			<UiHeader />
			<main className=' grow  flex flex-col pt-24'>
				<div
					className='rounded-xl border border-slate-300 px-14 py-8 w-full
					max-w-[400px] self-center bg-white '>
					<h1 className='text-2xl mb-10'>Sign Up</h1>
					<SignUpForm />
				</div>
			</main>
		</div>
	)
}
