import { body, validationResult } from "express-validator";
import { getDb } from "../utils/database";
import express from "express";
export const router = express.Router();
const validationResults = validationResult.withDefaults({
    formatter: (error) => {
        return {
            field: error.path,
            error: error.msg
        };
    }
});
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
        res.status(200).json(options[0]);
    })
        .catch((error) => {
        console.error(error);
        res.json({ error });
    });
});
router.post("/add/project", [
    body("projectType").matches(/^work|lab$/, "gi"),
    body("name").isLength({ min: 3 }),
    body("image").notEmpty(),
    body("stack").notEmpty(),
    body("siteType")
        .optional({ checkFalsy: true })
        .matches(/^e-commerce|application|website$/, "gi"),
    body("url").optional({ checkFalsy: true }).isURL(),
    body("company").optional({ checkFalsy: true }).isLength({ min: 3 }),
    body("description").optional({ checkFalsy: true }).isLength({ max: 90 }),
    body("position").isInt({ min: 1, max: 99 })
], (req, res) => {
    const errors = validationResults(req).array();
    const collectionType = req.body.projectType === "Work" ? "works" : "labs";
    const selectedPosition = parseInt(req.body.position) + 100;
    const collection = Object.assign(Object.assign({}, req.body), { stack: req.body.stack.split(","), position: selectedPosition });
    delete collection.projectType;
    if (!errors.length) {
        const db = getDb();
        db.collection(collectionType)
            .find()
            .sort({ position: 1 })
            .toArray()
            .then((docs) => {
            // Normalise the `position` of all projects so the first one always
            // starts at 101
            const updates = docs.map((doc, index) => {
                return db
                    .collection(collectionType)
                    .updateOne({ _id: doc._id }, { $set: { position: index + 101 } });
            });
            // Wait for all updates to complete
            return Promise.all(updates);
        })
            .then(() => {
            // Increment the position of all projects with a position greater than
            // or equal to the new project's position, essentially making room for
            // the new project
            return db
                .collection(collectionType)
                .updateMany({ position: { $gte: selectedPosition } }, { $inc: { position: 1 } });
        })
            .then(() => {
            // Insert the new project
            return db.collection(collectionType).insertOne(collection);
        })
            .then((result) => {
            res.status(200).json({ result });
        })
            .catch((error) => {
            console.error(error);
            res.status(500);
        });
    }
    else {
        res.status(400).json({ errors });
    }
});
router.post("/add/form/option", (req, res) => {
    const db = getDb();
    db.collection("formOptions")
        .updateOne({}, // There's only one document in this collection so no ID is needed
    {
        $push: {
            [req.body.option.type]: req.body.option.value
        }
    })
        .then((result) => {
        res.status(200).json({ result });
    })
        .catch((error) => {
        console.error(error);
        res.json({ error });
    });
});
router.post("/delete/form/option", (req, res) => {
    const db = getDb();
    db.collection("formOptions")
        .updateOne({}, // There's only one document in this collection so no ID is needed
    {
        $pull: {
            [req.body.option.type]: req.body.option.value
        }
    })
        .then(() => {
        // Get the updated data
        return db.collection("formOptions").findOne({});
    })
        .then((updatedData) => {
        res.status(200).json(updatedData);
    })
        .catch((error) => {
        console.error(error);
        res.json({ error });
    });
});
