import type {
	ClearCutting,
	ClearCuttingPreview,
	ClearCuttingsResponse,
} from "@/features/clear-cutting/store/clear-cuttings";
import type { FiltersResponse } from "@/features/clear-cutting/store/filters";
import { range } from "@/shared/array";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
import { useGetClearCuttingQuery } from "@/features/clear-cutting/store/api";
import { skipToken } from "@reduxjs/toolkit/query";

export const mockFilters = http.get("*/filters", () => {
	return HttpResponse.json({
		cutYears: [2021, 2022],
		tags: [
			{
				isAbusive: true,
				name: "Supérieur à 10 hectares",
				id: faker.string.uuid(),
			},
		],
		ecologicalZoning: {
			[faker.string.uuid()]: faker.company.buzzAdjective(),
		},
		status: {},
		departments: {},
		region: {},
	} satisfies FiltersResponse);
});
export const mockClearCuttings = http.get("*/clear-cuttings", () => {
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
		clearCuttingsPoints: createFranceRandomPoints,
		ecologicalZoning: [],
		waterCourses: [],
	} satisfies ClearCuttingsResponse);
});

export const mockClearCutting = http.get(
	"*/clear-cuttings/:clearCuttingId",
	({ params }) => {
		const { clearCuttingId } = params as { clearCuttingId: string };
		return HttpResponse.json({
			id: clearCuttingId,
			geoCoordinates: [francRandomPointMock()],
			cutYear: 2024,
			address: {
				streetName: "Nom de rue",
				streetNumber: "11",
				postalCode: "54000",
				city: "Nancy",
				country: "France",
			},
			imageUrls: [],
			status: "toValidate",
		} satisfies ClearCutting);
	},
);
const francRandomPointMock = (): [number, number] => [
	faker.location.latitude({
		min: 43.883918307385926,
		max: 49.33292664908802,
	}),
	faker.location.longitude({
		min: -0.3899356021470268,
		max: 5.666435865557435,
	}),
];
const createFranceRandomPoints = range<[number, number]>(
	500,
	francRandomPointMock,
);
const createClearCutting = (): ClearCuttingPreview => ({
	center: francRandomPointMock(),
	address: {
		city: faker.location.city(),
		country: faker.location.country(),
		postalCode: faker.location.zipCode(),
	},
	status: "validated",
	assignee: faker.string.uuid(),
	name: faker.animal.dog(),
	cutYear: 2021,
	id: faker.string.uuid(),
	imagesCnt: faker.number.int() % 10,
	imageUrl: faker.image.url(),
	geoCoordinates: [],
});

export const assignClearCutting = (clearCuttingId?: string) => {
	console.log('clearCuttingId', clearCuttingId);
}

export const isClearCuttingAssigned = (clearCuttingId?: string) => {
	const { data } = useGetClearCuttingQuery(clearCuttingId ?? skipToken);
	return data && data.assignee
}

export const isUserConnected = () => {
	return true;
}