import express from "express";
import {
  createUser,
} from "../../controllers/auth.controller";
import { hasRole, requireAuth } from "../../middlewares/auth.middleware";

const authRouter = express.Router();

authRouter.post("/register", createUser);
// authRouter.post("/signup", signUp);
// authRouter.get("/whoami", hasRole(["*"]), whoami);
// authRouter.post("/change-password", changePassword);
// authRouter.post("/redeem-change-password", redeemChangePassword);
// authRouter.post("/refresh", refreshAccessToken);
// authRouter.post("/google-signin", googleOAuth2SignIn);

export default authRouter;
