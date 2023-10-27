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



export function HomePage() {
	const { data } = useQuery({
		// на основании этого будет производится кеширование запроса
		queryKey: ['session'],
		// функция которая будет запрашивать данные с сервера
		queryFn: () => authControllerGetSessionInfo(),
	})

	// useEffect(() => {
	// 	authControllerSignIn({ email: 'test@gmail.com', password: "1234" })
	// 		.then(console.log)
	// }, [])

	return (
		<main
		// className={`flex flex-col`}
		>
			<UiHeader right={<div>{data?.email}</div>} />
			{/* {data?.email} */}
			{/* <UiPageSpinner /> */}
			<UiSpinner className='text-rose-600 w-20 h-20' />
			<UiTextField label='Email' />
			<UiLink href='/' text='slkfjdsoifjawoiejfw' />
			<UiSelectField
				options={[
					{ value: 'first', label: 'First' },
					{ value: 'second', label: 'second' },
				]}
			/>
			<UiTextField label='Email' />
			{/* <UiTextField label='Email' error='There is important error' /> */}
			<UiTextField
				label='Email'
				error='There is important error'
				inputProps={{
					value: 'test',
				}}
			/>
			<UiButton variant='primary'>Button</UiButton>
			<UiButton variant='secondary'>Button</UiButton>
			<UiButton variant='outlined'>Button</UiButton>
		</main>
	)
}
