import express from "express";
import { mongoConnect } from "./utils/database.ts";
import cors from "cors";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// const apiRoutes = require("./routes/apiRoutes");
// const loginRoutes = require("./routes/loginRoutes");
import { router as apiRoutes } from "./routes/apiRoutes.js";
import { router as loginRoutes } from "./routes/loginRoutes.js";

const app = express();

// Set the MIME type for JavaScript files
app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

app.use(cors());
app.use(bodyParser.json());

app.use("/api", apiRoutes);
app.use(loginRoutes);

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/storybook"));

app.use("/storybook", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/storybook/index.html"));
});

app.use("/", (_req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

mongoConnect(() => {
  app.listen(3000);
});
