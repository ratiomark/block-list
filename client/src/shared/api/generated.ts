/**
 * Generated by orval v6.19.1 🍺
 * Do not edit manually.
 * Block List Doc
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from './api-instance'
import type { BodyType } from './api-instance'
export type BlockListControllerGetBlockListParams = {
	q?: string
}

export type AddBlockItemDtoType =
	(typeof AddBlockItemDtoType)[keyof typeof AddBlockItemDtoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const AddBlockItemDtoType = {
	KeyWord: 'KeyWord',
	Website: 'Website',
} as const

export interface AddBlockItemDto {
	data: string
	type: AddBlockItemDtoType
}

export type BlockItemDtoType =
	(typeof BlockItemDtoType)[keyof typeof BlockItemDtoType]

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const BlockItemDtoType = {
	KeyWord: 'KeyWord',
	Website: 'Website',
} as const

export interface BlockItemDto {
	blockListId: number
	createdAt: string
	data: string
	id: number
	type: BlockItemDtoType
}

export interface BlockListDto {
	id: number
	items: BlockItemDto[]
	ownerId: number
}

export interface PatchAccountDto {
	isBlockingEnabled?: boolean
}

export interface AccountDto {
	id: number
	isBlockingEnabled: boolean
	ownerId: number
}

export interface GetSessionInfoDto {
	email: string
	exp: number
	/** issued at(когда выдан) */
	iat: number
	id: number
}

export interface SignInDto {
	email: string
	password: string
}

export interface SignUpDto {
	email: string
	password: string
}

export interface HelloWorldDto {
	message: string
}

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
	config: any,
	args: infer P,
) => any
	? P
	: never

export const appControllerGetHello = (
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<HelloWorldDto>({ url: `/`, method: 'get' }, options)
}

export const authControllerSignUp = (
	signUpDto: BodyType<SignUpDto>,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<void>(
		{
			url: `/auth/sign-up`,
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: signUpDto,
		},
		options,
	)
}

export const authControllerSignIn = (
	signInDto: BodyType<SignInDto>,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<void>(
		{
			url: `/auth/sign-in`,
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: signInDto,
		},
		options,
	)
}

export const authControllerSignOut = (
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<void>(
		{ url: `/auth/sign-out`, method: 'post' },
		options,
	)
}

export const authControllerGetSessionInfo = (
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<GetSessionInfoDto>(
		{ url: `/auth/session`, method: 'get' },
		options,
	)
}

export const accountControllerGetAccount = (
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<AccountDto>({ url: `/account`, method: 'get' }, options)
}

export const accountControllerPatch = (
	accountDto: BodyType<AccountDto>,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<PatchAccountDto>(
		{
			url: `/account`,
			method: 'patch',
			headers: { 'Content-Type': 'application/json' },
			data: accountDto,
		},
		options,
	)
}

export const blockListControllerGetBlockList = (
	params?: BlockListControllerGetBlockListParams,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<BlockListDto>(
		{ url: `/block-list`, method: 'get', params },
		options,
	)
}

export const blockListControllerAddBlockListItem = (
	addBlockItemDto: BodyType<AddBlockItemDto>,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<BlockItemDto>(
		{
			url: `/block-list/item`,
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			data: addBlockItemDto,
		},
		options,
	)
}

export const blockListControllerDeleteBlockItem = (
	id: number,
	options?: SecondParameter<typeof createInstance>,
) => {
	return createInstance<BlockItemDto>(
		{ url: `/block-list/item/${id}`, method: 'delete' },
		options,
	)
}

export type AppControllerGetHelloResult = NonNullable<
	Awaited<ReturnType<typeof appControllerGetHello>>
>
export type AuthControllerSignUpResult = NonNullable<
	Awaited<ReturnType<typeof authControllerSignUp>>
>
export type AuthControllerSignInResult = NonNullable<
	Awaited<ReturnType<typeof authControllerSignIn>>
>
export type AuthControllerSignOutResult = NonNullable<
	Awaited<ReturnType<typeof authControllerSignOut>>
>
export type AuthControllerGetSessionInfoResult = NonNullable<
	Awaited<ReturnType<typeof authControllerGetSessionInfo>>
>
export type AccountControllerGetAccountResult = NonNullable<
	Awaited<ReturnType<typeof accountControllerGetAccount>>
>
export type AccountControllerPatchResult = NonNullable<
	Awaited<ReturnType<typeof accountControllerPatch>>
>
export type BlockListControllerGetBlockListResult = NonNullable<
	Awaited<ReturnType<typeof blockListControllerGetBlockList>>
>
export type BlockListControllerAddBlockListItemResult = NonNullable<
	Awaited<ReturnType<typeof blockListControllerAddBlockListItem>>
>
export type BlockListControllerDeleteBlockItemResult = NonNullable<
	Awaited<ReturnType<typeof blockListControllerDeleteBlockItem>>
>
