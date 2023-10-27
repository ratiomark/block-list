import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { authControllerGetSessionInfo, authControllerSignIn } from '@/shared/api/generated'
import { useQuery } from '@tanstack/react-query'
import { UiButton } from '@/shared/ui/ui-button'
import { UiTextField } from '@/shared/ui/ui-text-field'

const inter = Inter({ subsets: ['latin'] })

export function HomePage() {
	const { data } = useQuery({
		// на основании этого будет производится кеширование запроса
		queryKey: ['session'],
		// функция которая будет запрашивать данные с сервера
		queryFn: () => authControllerGetSessionInfo()
	})

	// useEffect(() => {
	// 	authControllerSignIn({ email: 'test@gmail.com', password: "1234" })
	// 		.then(console.log)
	// }, [])

	return (
		<main
			className={`flex min-h-screen  flex-col items-center justify-between p-24 ${inter.className}`}
		>
			{/* {data?.email} */}
			<UiTextField label='Email' />
			<UiTextField label='Email' />
			{/* <UiTextField label='Email' error='There is important error' /> */}
			<UiTextField label='Email' error='There is important error' inputProps={{
				value: 'test',
			}} />
			<UiButton variant='primary'>Button</UiButton>
			<UiButton variant='secondary'>Button</UiButton>
			<UiButton variant='outlined'>Button</UiButton>
		</main>
	)
}
