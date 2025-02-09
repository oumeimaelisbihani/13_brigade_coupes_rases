import { z } from "zod";
import { pointSchema } from "./types";

const filtersSchema = z.object({
	tags: z.array(z.string()),
	cutYear: z.string().nullable(),
	geoBounds: z.array(pointSchema),
});

export type Filters = z.infer<typeof filtersSchema>;

const tagSchema = z.object({
	name: z.string(),
	isAbusive: z.boolean(),
});
export type Tag = z.infer<typeof tagSchema>;
export const filtersResponseSchema = z.object({
	tags: z.array(tagSchema),
	cutYears: z.array(z.string()),
});

export type FiltersResponse = z.infer<typeof filtersResponseSchema>;
