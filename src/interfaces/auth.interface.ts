// import { USER } from "@prisma/client";

export enum TokenType {
  refreshToken = "REFRESH_TOKEN",
  accessToken = "ACCESS_TOKEN",
}

// slimmest version of User type for JWT Payload
// export interface JwtUser {
//   id: USER["id"];
//   email: USER["email"];
//   username: USER["username"];
//   displayName: User["displayName"];
//   role: User["role"];
// }

// export interface TokenPayload {
//   type: TokenType;
//   jwtUser: JwtUser;
// }

export enum Designation {
  USER = "USER",
  ADMIN = "ADMIN",
}
export interface IUser {
  id?: string;
  userName?: string;
  email: string;
  password: string;
  contactNumber?: string;
  designation?: Designation;
  isVerified?: boolean;
  packageId?: string;  
  restaurants?: string[];
}
