import { z } from "zod";

export const createPackageSchema = z.object({
  name: z.string(),
  price: z.number().positive("Price must be a positive number"),
  packageType: z.enum(["GROWTH", "PRO", "ELITE"]),
});
