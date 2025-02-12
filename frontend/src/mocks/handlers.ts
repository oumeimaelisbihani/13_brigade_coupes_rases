import type {
	ClearCuttingPreview,
	ClearCuttingsResponse,
} from "@/features/clear-cutting/store/clear-cuttings";
import type { FiltersResponse } from "@/features/clear-cutting/store/filters";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
export const handlers = [
	http.get("*/filters", () => {
		return HttpResponse.json({
			cutYears: [2021, 2022],
			tags: [
				{
					isAbusive: true,
					name: "Supérieur à 10 hectares",
					id: faker.string.uuid(),
				},
			],
			ecologicalZoning: [
				{
					id: faker.string.uuid(),
					name: faker.company.buzzAdjective(),
				},
			],
		} satisfies FiltersResponse);
	}),
	http.get("*/clear-cuttings", () => {
		return HttpResponse.json({
			clearCuttingPreviews: [
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
				createClearCutting(),
			],
			clearCuttingsPoints: [],
			ecologicalZoning: [],
			waterCourses: [],
		} satisfies ClearCuttingsResponse);
	}),
];

const createClearCutting = (): ClearCuttingPreview => ({
	center: [faker.location.latitude(), faker.location.longitude()],
	address: {
		city: faker.location.city(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	name: faker.animal.dog(),
	cutYear: 2021,
	id: faker.string.uuid(),
	imagesCnt: 5,
	imageUrl: faker.image.url(),
	geoCoordinates: [],
});
