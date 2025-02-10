import { string, z } from "zod";
import { pointSchema } from "./types";

const clearCuttingPreviewSchema = z.array(z.number());
export type ClearCuttingPreview = z.infer<typeof clearCuttingPreviewSchema>;
const ecologicalZoningSchema = z.object({
	id: z.string(),
	name: z.string(),
	link: z.string().url(),
	logo: z.string().url(),
});

const clearCuttingSchema = z.object({
	id: z.string(),
	geoCoordinates: z.array(pointSchema),
	name: z.string().optional(),
	cutYear: z.number(),
	address: z.object({
		streetName: z.string(),
		streetNumber: z.string(),
		postalCode: z.string(),
		city: z.string(),
		state: z.string().optional(),
		country: z.string(),
	}),
	cadastralParcel: z
		.object({
			id: string(),
			surfaceKm: z.number(),
		})
		.optional(),
	ecologicalZonings: z.array(z.string()).optional(),
	waterCourses: z.array(z.string()).optional(),
	abusiveTags: z.array(z.string()).optional(),
	customTags: z.array(z.string()).optional(),
});
export type ClearCutting = z.infer<typeof clearCuttingSchema>;

export function isClearCutting(
	val: ClearCutting | ClearCuttingPreview,
): val is ClearCutting {
	return (val as ClearCutting).id !== undefined;
}
export function isClearCuttingPreview(
	val: ClearCutting | ClearCuttingPreview,
): val is ClearCuttingPreview {
	return !isClearCutting(val);
}
const waterCourseSchema = z.object({
	id: z.string(),
	geoCoordinates: z.array(pointSchema),
});
export const clearCuttingsResponseSchema = z.object({
	clearCuttings: z.array(clearCuttingSchema),
	clearCuttingPreviews: z.array(clearCuttingPreviewSchema),
	waterCourses: z.array(waterCourseSchema),
	ecologicalZoning: z.array(ecologicalZoningSchema),
});

export type ClearCuttingsResponse = z.infer<typeof clearCuttingsResponseSchema>;
