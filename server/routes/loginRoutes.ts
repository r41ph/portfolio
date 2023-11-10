import { getDb } from "../utils/database.ts";
import express from "express";

export const router = express.Router();

router.use("/login", (req, res) => {
  console.log("🚀 ~ file: index.js:81 ~ app.post ~ req.body:", req.body);
  const db = getDb();
  db.collection("users")
    .findOne({ username: req.body.username })
    .then((user) => {
      console.log("🚀 ~ file: index.js:83 ~ .then ~ user:", user);
      // if (user && user.password === req.body.password) {
      //   res.status(200).json({ user });
      // } else {
      //   res.status(401).json({ error: "Invalid credentials" });
      // }
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});
