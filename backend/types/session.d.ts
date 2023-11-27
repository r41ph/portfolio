import "express-session";
import { LoginData } from "./types";
declare module "express-session" {
  // eslint-disable-next-line no-unused-vars
  interface SessionData {
    user: LoginData;
  }
}

export {};
