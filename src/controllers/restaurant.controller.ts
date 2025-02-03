import httpStatus from "http-status";
import { createUserSchema } from "../schemas/auth.schema";
import { handleCreateUser } from "../services/auth.service";
import logger from "../utils/logger";
import { NextFunction, Request, Response } from "express";
import { excludeFromObject } from "../utils/object";
import { sendToExchange } from "../lib/amqp";
import { createRestaurantSchema } from "../schemas/restaurant.schema";
import { handleCreateRestaurant } from "../services/restaurant.service";

const createRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      registrationNumber,
      name,
      officialEmail,
      officialContactNumber,
      address,
      city,
      district,
      postCode,
      tradeLicense,
      ownerId,
    } = req.body;
    const payload = {
      registrationNumber,
      name,
      officialEmail,
      officialContactNumber,
      address,
      city,
      district,
      postCode,
      tradeLicense,
      ownerId,
    };
    createRestaurantSchema.parse(payload);

    const restaurant = await handleCreateRestaurant(payload);

    res.json({
      message: "Restaurant created successfully",
      status: httpStatus.CREATED,
      restaurant,
    });
  } catch (ex) {
    next(ex);
  }
};

export { createRestaurant };
