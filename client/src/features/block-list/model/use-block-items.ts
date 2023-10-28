import { useBlockListQuery } from "@/entities/block-list";
import { useState } from "react";

export function useBlockItems() {
	const [q, setQ] = useState('')

	const blockListQuery = useBlockListQuery(q)

	const items = blockListQuery.data?.items ?? []

	return {
		items,
		q,
		setQ,
		isLoading: blockListQuery.isLoading,
	}
}