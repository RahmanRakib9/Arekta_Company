import { z } from "zod";

export const createFacilitySchema = z.object({
  name: z.string(),
  description: z.string(),
  packageId: z.string().length(24, "Invalid Package ID"), // MongoDB ObjectId
});
