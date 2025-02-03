import prisma from "../lib/prisma";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/error";
import config from "../config/base.config";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import { IRestaurant } from "../interfaces/restaurant.interface";
import { IPackage } from "../interfaces/package.interface";

const handleCreatePackage = async (payload: IPackage) => {
  // 'package' is a reserved word in strict mode
  const _package = await prisma.package.create({
    data: {
      name: payload.name,
      price: payload.price,
      packageType: payload.packageType,
    },
  });
  return _package;
};

export { handleCreatePackage };
