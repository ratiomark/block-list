import axios, { AxiosError, AxiosRequestConfig } from "axios";

const apiInstance = axios.create({
	baseURL: "/api",
	headers: {
		'Content-Type': 'application/json',
	}
})

// config - для orval, чтобы он сам передавал значения, а options - для меня, чтобы я мог переопределять из вне
export const createInstance = <T>(
	config: AxiosRequestConfig,
	options?: AxiosRequestConfig
): Promise<T> => {
	return apiInstance({
		...config,
		...options
	}).then(r => r.data)
}

// это типы для orval. Он использует их чтобы указать типы возвращаемых значений, ведь выше и в конфиге orval, я делаю кастомную функцию createInstance
export type BodyType<Data> = Data
export type ErrorType<Error> = AxiosError<Error>