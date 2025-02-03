import express from "express";
import { hasRole, requireAuth } from "../../middlewares/auth.middleware";
import { createRestaurant } from "../../controllers/restaurant.controller";
import { createPackage } from "../../controllers/package.controller";

const packageRouter = express.Router();

packageRouter.post("/", createPackage);

export default packageRouter;
