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

// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:6006",
//   "https://portfolio-3jqf.onrender.com",
//   "https://ralph.es"
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
//   credentials: true
// };

// app.use("/auth", cors(corsOptions));

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://ralph.es");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

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
