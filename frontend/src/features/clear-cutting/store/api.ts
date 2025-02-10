import { selectFiltersRequest } from "@/features/clear-cutting/store/filters.slice";
import { useAppSelector } from "@/shared/hooks/store";
import {
	createApi,
	fetchBaseQuery,
	skipToken,
} from "@reduxjs/toolkit/query/react";
import {
	type ClearCuttingsResponse,
	clearCuttingsResponseSchema,
} from "./clear-cuttings";
import {
	type FiltersRequest,
	type FiltersResponse,
	filtersResponseSchema,
} from "./filters";

export const clearCuttingsApi = createApi({
	reducerPath: "clearCuttings",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_API}`,
	}),
	endpoints: (builder) => ({
		getFilters: builder.query<FiltersResponse, void>({
			query: () => "filters",
			transformResponse: (data) => filtersResponseSchema.parse(data),
		}),
		getClearCuttings: builder.query<
			ClearCuttingsResponse,
			Readonly<FiltersRequest>
		>({
			query: (filters) => ({ url: "clear-cuttings", params: filters }),
			transformResponse: (data) => clearCuttingsResponseSchema.parse(data),
		}),
	}),
});

export const { endpoints, useGetFiltersQuery } = clearCuttingsApi;

export function useGetClearCuttingsQuery() {
	const filters = useAppSelector(selectFiltersRequest);
	return clearCuttingsApi.useGetClearCuttingsQuery(filters ?? skipToken);
}
