import { getDb } from "../utils/database";
import express from "express";
import bcrypt from "bcryptjs";
import { createJSONToken, validateJSONToken } from "../utils/auth";
export const router = express.Router();
router.post("/login", (req, res) => {
    const db = getDb();
    return db
        .collection("users")
        .findOne({ username: req.body.username })
        .then((dbUser) => {
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
                    sameSite: "strict"
                    // secure: true
                });
                res.json(Object.assign({}, dbUser));
            }
            else {
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
    var _a;
    const isCookiePresent = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
    if (isCookiePresent) {
        try {
            const isTokenValid = validateJSONToken(isCookiePresent);
            res.status(200).json(!!isTokenValid);
        }
        catch (err) {
            console.log("err:", err === null || err === void 0 ? void 0 : err.message);
            res.status(401).send(`Unauthorized, ${err === null || err === void 0 ? void 0 : err.message}`);
        }
    }
    else {
        res.status(401).send("Unauthorized");
    }
});
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.sendStatus(200);
});
