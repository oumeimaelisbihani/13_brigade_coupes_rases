import { createTypedDraftSafeSelector } from "@/core/store/selector";
import type { RootState } from "@/core/store/store";
import { endpoints } from "@/features/clear-cutting/store/api";
import type {
	FiltersRequest,
	Tag,
} from "@/features/clear-cutting/store/filters";
import type { Bounds } from "@/features/clear-cutting/store/types";
import { type SelectableItem, toSelectableItems } from "@/shared/items";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
interface FiltersState {
	tags: SelectableItem<Tag>[];
	cutYears: SelectableItem<number>[];
	geoBounds?: Bounds;
}
const initialState: FiltersState = { cutYears: [], tags: [] };
export const filtersSlice = createSlice({
	initialState,
	name: "filters",
	reducers: {
		toggleTag: (state, { payload }: PayloadAction<string>) => {
			state.tags = state.tags.map((t) =>
				t.item.name === payload ? { ...t, isSelected: !t.isSelected } : t,
			);
		},
		setCutYear: (state, { payload }: PayloadAction<number>) => {
			state.cutYears = state.cutYears.map((y) =>
				y.item === payload
					? { ...y, isSelected: true }
					: { ...y, isSelected: false },
			);
		},
		setGeoBounds: (state, { payload }: PayloadAction<Bounds>) => {
			state.geoBounds = payload;
		},
	},
	extraReducers: (builder) => {
		builder.addMatcher(
			endpoints.getFilters.matchFulfilled,
			(state, { payload: { cutYears, tags } }) => {
				state.cutYears = toSelectableItems(cutYears);
				state.tags = toSelectableItems(tags);
			},
		);
	},
});

export const {
	actions: { setCutYear, setGeoBounds, toggleTag },
} = filtersSlice;

const selectState = (state: RootState) => state.filters;
export const selectFiltersRequest = createTypedDraftSafeSelector(
	selectState,
	({ cutYears, tags, geoBounds }): FiltersRequest | undefined =>
		geoBounds === undefined
			? undefined
			: {
					geoBounds,
					tags: tags.filter((t) => t.isSelected).map((t) => t.item.name),
					cutYear: cutYears.find((c) => c.isSelected)?.item,
				},
);

export const selectCutYears = createTypedDraftSafeSelector(
	selectState,
	(state) => state.cutYears,
);

export const selectTags = createTypedDraftSafeSelector(
	selectState,
	(state) => state.tags,
);
