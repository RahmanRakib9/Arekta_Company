import prisma from "../lib/prisma";
import { ApiError } from "../utils/error";
import { IFacility } from "../interfaces/facility.interface";

const handleCreateFacility = async (payload: IFacility) => {
  const facility = await prisma.facility.create({
    data: {
      name: payload.name,
      description: payload.description,
      package: { connect: { id: payload.packageId } },
    },
  });

  return facility;
};

export { handleCreateFacility };
