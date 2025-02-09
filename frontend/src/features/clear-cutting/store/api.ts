import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ClearCuttingsResponse } from "./clear-cuttings";
import type { Filters, FiltersResponse } from "./filters";

export const clearCuttingsApi = createApi({
	reducerPath: "clearCuttings",
	baseQuery: fetchBaseQuery({
		baseUrl: `${import.meta.env.VITE_API}`,
	}),
	endpoints: (builder) => ({
		getFilters: builder.query<FiltersResponse, void>({
			query: () => "filters",
		}),
		getClearCuttings: builder.query<ClearCuttingsResponse, Filters>({
			query: (filters) => ({ url: "clear-cuttings", params: filters }),
		}),
	}),
});

export const { useGetFiltersQuery } = clearCuttingsApi;
