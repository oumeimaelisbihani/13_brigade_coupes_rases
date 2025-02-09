import { string, z } from "zod";
import { pointSchema } from "./types";

const clearCuttingPreviewSchema = z.array(z.number());

const ecologicalZoningSchema = z.object({
	id: z.string(),
	name: z.string(),
	link: z.string().url(),
	logo: z.string().url(),
});

const clearCuttingSchema = z.object({
	id: z.string(),
	geoCoordinates: z.array(pointSchema),
	name: z.string().nullable(),
	cutYear: z.date(),
	address: z.object({
		streetName: z.string(),
		streetNumber: z.number(),
		postalCode: z.string(),
		city: z.string(),
		state: z.string().nullable(),
		country: z.string(),
	}),
	cadastralParcel: z.object({
		id: string(),
		surfaceKm: z.number(),
	}),
	ecologicalZonings: z.array(z.string()),
	waterCourses: z.array(z.string()),
	abusiveTags: z.array(z.string()),
	customTags: z.array(z.string()),
});

const waterCourseSchema = z.object({
	id: z.string(),
	geoCoordinates: z.array(pointSchema),
});
const clearCuttingsDetailResponseSchema = z.object({
	clearCuttings: z.array(clearCuttingSchema),
	waterCourses: z.array(waterCourseSchema),
	ecologicalZoning: z.array(ecologicalZoningSchema),
});

const clearCuttingsPreviewResponseSchema = z.object({
	clearCuttings: z.array(clearCuttingPreviewSchema),
});

const clearCuttingsResponseSchema = clearCuttingsDetailResponseSchema.or(
	clearCuttingsPreviewResponseSchema,
);

export type ClearCuttingsResponse = z.infer<typeof clearCuttingsResponseSchema>;
