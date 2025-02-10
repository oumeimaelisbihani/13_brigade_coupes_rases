import type {
	ClearCutting,
	ClearCuttingsResponse,
} from "@/features/clear-cutting/store/clear-cuttings";
import type { FiltersResponse } from "@/features/clear-cutting/store/filters";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
export const handlers = [
	http.get("*/filters", () => {
		return HttpResponse.json({
			cutYears: [2021, 2022],
			tags: [{ isAbusive: true, name: "moreThan10Hectares" }],
		} satisfies FiltersResponse);
	}),
	http.get("*/clear-cuttings", () => {
		return HttpResponse.json({
			clearCuttingPreviews: [],
			clearCuttings: [createClearCutting()],
			ecologicalZoning: [],
			waterCourses: [],
		} satisfies ClearCuttingsResponse);
	}),
];

const createClearCutting = (): ClearCutting => ({
	abusiveTags: ["moreThan10Hectares"],
	address: {
		city: faker.location.city(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
		streetName: faker.location.street(),
		streetNumber: faker.location.buildingNumber(),
	},
	cutYear: 2021,
	id: "testId",
	geoCoordinates: [],
});
