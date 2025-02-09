import type { SelectableItem } from "@/shared/items";
import type { ReactNode } from "@tanstack/react-router";
import { createContext, useState } from "react";
import { useGetFiltersQuery } from "../store/api";
import type { Tag } from "../store/filters";

interface FiltersContext {
	tags: SelectableItem<Tag>[];
	cutYear?: string;
	setCutYear: (year: string | null) => void;
	toggleTag: (tag: string) => void;
}
const filtersContext = createContext<FiltersContext>({} as FiltersContext);

interface Props {
	children: ReactNode;
}
export function FiltersProvider({ children }: Props) {
	const { data: filters } = useGetFiltersQuery();
	const [tags, setTags] = useState<SelectableItem<Tag>[]>(() => {
		return filters?.tags.map((t) => ({ item: t, isSelected: false })) ?? [];
	});
	const [cutYear, setCutYear] = useState<string | null>(null);

	return (
		<filtersContext.Provider
			value={{
				tags,
				toggleTag: (tag) =>
					setTags(
						tags.map((t) =>
							t.item.name === tag ? { ...t, isSelected: !t.isSelected } : t,
						),
					),
				setCutYear,
			}}
		>
			{children}
		</filtersContext.Provider>
	);
}
