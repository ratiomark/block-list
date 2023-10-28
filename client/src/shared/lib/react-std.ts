import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, timeout = 500) {
	const [debouncedValue, setDebouncedValue] = useState(value)
	useEffect(() => {

		const timeoutId = setTimeout(() => {
			setDebouncedValue(value)
		}, timeout)

		return () => clearTimeout(timeoutId)
	}, [value, timeout])

	return debouncedValue
}