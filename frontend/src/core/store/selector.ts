import type { RootState } from "@/core/store/store";
import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const createTypedDraftSafeSelector =
	createDraftSafeSelector.withTypes<RootState>();
