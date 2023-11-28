import { getDb } from "../utils/database";
import express from "express";
import cors from "cors";

import bcrypt from "bcryptjs";
import { LoginData, LoginError } from "../types/types";
import { createJSONToken, validateJSONToken } from "../utils/auth";

export const router = express.Router();

// Enable pre-flight requests for auth routes
router.options("*", cors());

router.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? "https://ralph.es"
        : ["http://localhost:5173", "http://localhost:6006"],
    optionsSuccessStatus: 200,
    credentials: true
  })
);

router.post("/login", (req, res): LoginError | LoginData => {
  const db = getDb();
  return db
    .collection("users")
    .findOne({ username: req.body.username })
    .then((dbUser: LoginData) => {
      if (!dbUser) {
        return res.status(200).json({ error: "Invalid username or password" });
      }
      bcrypt
        .compare(req.body.password, dbUser.password)
        .then((isPasswordCorrect) => {
          if (isPasswordCorrect) {
            const token = createJSONToken(dbUser.username);
            res.cookie("token", token, {
              httpOnly: true,
              secure: true
            });
            res.json({ ...dbUser });
          } else {
            res.status(200).json({ error: "Invalid username or password" });
          }
        })
        .catch((error) => {
          console.error(error);
          res.status(500).json({ error: error });
        });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: error });
    });
});

router.get("/login/status", (req, res) => {
  const isCookiePresent = req.cookies?.token;
  if (isCookiePresent) {
    try {
      const isTokenValid = validateJSONToken(isCookiePresent);
      res.status(200).json(!!isTokenValid);
    } catch (err) {
      console.log("err:", err?.message);
      res.status(401).send(`Unauthorized, ${err?.message}`);
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(200);
});
