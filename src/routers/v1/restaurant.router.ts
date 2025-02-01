import express from "express";
import { hasRole, requireAuth } from "../../middlewares/auth.middleware";
import { createRestaurant } from "../../controllers/restaurant.controller";

const restaurantRouter = express.Router();

restaurantRouter.post("/", createRestaurant);

export default restaurantRouter;
