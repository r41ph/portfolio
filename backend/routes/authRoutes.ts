import { getDb } from "../utils/database";
import express from "express";
import bcrypt from "bcryptjs";
import { LoginData, LoginError } from "../types/types";
import { createJSONToken, validateJSONToken } from "../utils/auth";

export const router = express.Router();

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
              sameSite: "none",
              secure: true,
              domain:
                process.env.NODE_ENV === "production"
                  ? ".ralph.es"
                  : "localhost"
            });
            res.json({ ...dbUser, token });
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
      console.log("Error checking loggin status:", err?.message);
      res.status(401).send(`Unauthorized, ${err?.message}`);
    }
  } else {
    res.status(401).send("Unauthorized");
  }
});

router.post("/logout", (_req, res) => {
  res.clearCookie("token", {
    path: "/",
    domain: process.env.NODE_ENV === "production" ? ".ralph.es" : "localhost"
  });
  res.sendStatus(200);
});
