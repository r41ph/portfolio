import { getDb } from "../utils/database.ts";
import express from "express";
// import { expressjwt } from "express-jwt";

export const router = express.Router();

router.get("/works", (_req, res) => {
  const db = getDb();
  db.collection("works")
    .find()
    .sort({ position: 1 })
    .toArray()
    .then((works) => {
      res.status(200).json({ works });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

router.get("/labs", (_req, res) => {
  const db = getDb();
  db.collection("labs")
    .find()
    .sort({ position: 1 })
    .toArray()
    .then((labs) => {
      res.status(200).json({ labs });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

// router.use(
//   expressjwt({
//     secret: process.env.JWT_KEY as string,
//     algorithms: ["HS256"]
//   })
// );

router.post("/add/work", (req, res) => {
  const db = getDb();
  db.collection("works")
    .insertOne(req.body)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

router.post("/add/lab", (req, res) => {
  const db = getDb();
  db.collection("labs")
    .insertOne(req.body)
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});
