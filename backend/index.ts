import express from "express";
import compression from "compression";
import { mongoConnect } from "./utils/database.ts";
import cors from "cors";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { router as apiRoutes } from "./routes/dataRoutes.ts";
import { router as authRoutes } from "./routes/authRoutes.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(compression());
// add and conditional that if production use helmet
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}
app.use(cookieParser());

// Set the MIME type for JavaScript files
app.use((req, res, next) => {
  if (req.path.endsWith(".js")) {
    res.type("application/javascript");
  }
  next();
});

app.use(bodyParser.json());

app.use(
  "/auth",
  cors({
    origin: ["http://localhost:5173", "http://localhost:6006"],
    credentials: true
  }),
  authRoutes
);
app.use(cors());
app.use("/data", apiRoutes);

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
