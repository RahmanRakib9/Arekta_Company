import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/error";
import config from "../config/base.config";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { IRestaurant } from "../interfaces/restaurant.interface";

const handleCreateRestaurant = async (payload: IRestaurant) => {
  const restaurant = await prisma.restaurant.create({
    data: {
      name: payload.name,
      registrationNumber: payload.registrationNumber,
      officialEmail: payload.officialEmail,
      officialContactNumber: payload.officialContactNumber,
      address: payload.address,
      city: payload.city,
      district: payload.district,
      postCode: payload.postCode,
      tradeLicense: payload.tradeLicense,
      owner: { connect: { id: payload.ownerId } },
    },
  });
  return restaurant;
};

export { handleCreateRestaurant };
