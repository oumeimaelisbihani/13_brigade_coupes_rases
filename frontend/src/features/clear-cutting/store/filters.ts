import { z } from "zod";
import { boundsSchema } from "./types";

const filtersRequestSchema = z.object({
	tags: z.array(z.string()),
	cutYear: z.number().optional(),
	geoBounds: boundsSchema,
});

export type FiltersRequest = z.infer<typeof filtersRequestSchema>;

const tagSchema = z.object({
	name: z.string(),
	isAbusive: z.boolean(),
});
export type Tag = z.infer<typeof tagSchema>;
export const filtersResponseSchema = z.object({
	tags: z.array(tagSchema),
	cutYears: z.array(z.number()),
});

export type FiltersResponse = z.infer<typeof filtersResponseSchema>;
