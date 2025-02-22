import httpStatus from "http-status";
import { createUserSchema } from "../schemas/auth.schema";
import { handleCreateUser } from "../services/auth.service";
import logger from "../utils/logger";
import { NextFunction, Request, Response } from "express";
import { excludeFromObject } from "../utils/object";
import { sendToExchange } from "../lib/amqp";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password, contactNumber, designation, isVerified, packageId, restaurants } = req.body;
    const payload = {
      username,
      email,
      password,
      contactNumber,
      designation,
      isVerified,
      packageId,
      restaurants,
    };
    createUserSchema.parse(payload);

    const user = await handleCreateUser(payload);

    res.json({
      message: "User created successfully",
      status: httpStatus.CREATED,
      user,
    });
  } catch (ex) {
    next(ex);
  }
};

// const signUp = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload = signUpSchema.parse(req.body);
//     const { email, password, username, displayName } = payload;
//     const { user, token } = await handleUserSignUp(email, password, username, displayName);

//     logger.info(`New user created. UserID: ${user.id}.`);

//     const body = {
//       message: "Successfully signed up!",
//       user,
//       token,
//     };
//     sendToExchange("exchange.mail", "user", user);
//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

// const whoami = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await findUserByEmail(req.user.email);

//     const body = {
//       message: "You are somebody and you are really precious to us!",
//       user: excludeFromObject(user, ["passwordHash"]),
//     };
//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

// const changePassword = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload = changePasswordSchema.parse(req.body);
//     const { email, username } = payload;

//     const { maskedEmail } = await handleChangePassword(email, username, req.ip);

//     logger.info(`Change Password requested for ${maskedEmail}.`);

//     const body = {
//       message: "Successfully sent Change Password Link to registered email address.",
//       maskedEmail,
//     };

//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

// const redeemChangePassword = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload = redeemChangePasswordSchema.parse(req.body);
//     const { token, password } = payload;

//     const { maskedEmail } = await handleRedeemChangePassword(token, password, req.ip);

//     logger.info(`Change Password redeemed for ${maskedEmail}.`);

//     const body = {
//       message: "Successfully Changed Password.",
//     };

//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

// const refreshAccessToken = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload = refreshAccessTokenSchema.parse(req.body);
//     const { grantType, refreshToken } = payload;

//     let accessToken = exchangeAccessToken(grantType, refreshToken);

//     const body = {
//       message: "Successfully exchanged token. New Access Token granted.",
//       accessToken,
//     };

//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

// const googleOAuth2SignIn = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const payload = googleOAuth2SignInSchema.parse(req.body);
//     const { code } = payload;

//     const { user, token } = await handleGoogleSignIn(code.trim());

//     const body = {
//       message: "Successfully signed up using Google!",
//       user,
//       token,
//     };
//     res.status(httpStatus.OK).send(body);
//   } catch (ex) {
//     next(ex);
//   }
// };

export { createUser };
