import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { createFacilitySchema } from "../schemas/facility.schema";
import { handleCreatePackage } from "../services/package.service";
import { handleCreateFacility } from "../services/facility.service";

const createFacility = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description, packageId } = req.body;
    const payload = {
      name,
      description,
      packageId,
    };
    createFacilitySchema.parse(payload);

    const facility = await handleCreateFacility(payload);

    res.json({
      message: "Facility created successfully",
      status: httpStatus.CREATED,
      facility,
    });
  } catch (ex) {
    next(ex);
  }
};

export { createFacility };
