import { useBlockListQuery } from "@/entities/block-list";
import { useDebouncedValue } from "@/shared/lib/react-std";
import { useState } from "react";

export function useBlockItems() {
	const [q, setQ] = useState('')

	const blockListQuery = useBlockListQuery(useDebouncedValue(q))

	const items = blockListQuery.data?.items ?? []

	return {
		items,
		q,
		setQ,
		isLoading: blockListQuery.isLoading,
	}
}