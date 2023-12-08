import { getDb } from "../utils/database";
import express from "express";

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

router.get("/form/options", (_req, res) => {
  const db = getDb();
  db.collection("formOptions")
    .find()
    .toArray()
    .then((options) => {
      res.status(200).json(options);
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

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

router.post("/add/stack/option", (req, res) => {
  const db = getDb();
  db.collection("formOptions")
    .updateOne(
      {}, // There's only one document in this collection so no ID is needed
      {
        $push: {
          stack: req.body.option
        }
      }
    )
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});

router.post("/delete/stack/option", (req, res) => {
  const db = getDb();
  db.collection("formOptions")
    .updateOne(
      {}, // There's only one document in this collection so no ID is needed
      {
        $pull: {
          stack: req.body.option
        }
      }
    )
    .then((result) => {
      res.status(200).json({ result });
    })
    .catch((error) => {
      console.error(error);
      res.json({ error });
    });
});
