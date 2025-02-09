import type { FiltersResponse } from "@/features/clear-cutting/store/filters";
import { http, HttpResponse } from "msw";
export const handlers = [
	http.get("*/filters", () => {
		return HttpResponse.json({
			cutYears: [],
			tags: [],
		} satisfies FiltersResponse);
	}),
];
