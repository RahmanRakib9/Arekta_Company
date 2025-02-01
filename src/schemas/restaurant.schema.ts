import { z } from "zod";

const createRestaurantSchema = z.object({
  name: z.string(),
  officialEmail: z.string().email({ message: "Invalid email address" }),
  officialContactNumber: z.string().min(11, { message: "Contact number must be at least 11 digits" }),
  address: z.string(),
  city: z.string(),
  district: z.string(),
  postCode: z.string(),
  tradeLicense: z.string(),
  ownerId: z.string(),
});

export { createRestaurantSchema };
