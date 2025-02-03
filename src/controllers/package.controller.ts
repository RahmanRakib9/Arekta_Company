import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { createPackageSchema } from "../schemas/package.schema";
import { handleCreatePackage } from "../services/package.service";

const createPackage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, packageType } = req.body;
    const payload = {
      name,
      price,
      packageType,
    };
    createPackageSchema.parse(payload);

    const _package = await handleCreatePackage(payload);

    res.json({
      message: "Package created successfully",
      status: httpStatus.CREATED,
      _package,
    });
  } catch (ex) {
    next(ex);
  }
};

export { createPackage };
