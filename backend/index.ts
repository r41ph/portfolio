import express from "express";
import compression from "compression";
import { mongoConnect } from "./utils/database";
import cors from "cors";
import bodyParser from "body-parser";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import { router as apiRoutes } from "./routes/dataRoutes";
import { router as authRoutes } from "./routes/authRoutes";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(compression());

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://ralph.es");
  next();
});

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

// Enable pre-flight requests for auth routes
app.options("/auth", cors());

app.use(
  "/auth",
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:6006",
      "https://portfolio-3jqf.onrender.com",
      "https://ralph.es"
    ],
    optionsSuccessStatus: 200,
    credentials: true
  })
);

app.use("/data", cors());

app.use("/auth", authRoutes);
app.use("/data", apiRoutes);

app.use(express.static(__dirname + "/"));
app.use(express.static(__dirname + "/storybook"));

app.use("/storybook", (_req, res) => {
  res.sendFile(path.join(__dirname, "/storybook/index.html"));
});

app.use("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

mongoConnect(() => {
  app.listen(process.env.PORT || 3000);
});
