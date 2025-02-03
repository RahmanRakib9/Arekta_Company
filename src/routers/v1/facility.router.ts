import express from "express";
import { hasRole, requireAuth } from "../../middlewares/auth.middleware";
import { createRestaurant } from "../../controllers/restaurant.controller";
import { createFacility } from "../../controllers/facility.controller";

const facilityRouter = express.Router();

facilityRouter.post("/", createFacility);

export default facilityRouter;
