import express from "express";
import compression from "compression";
import { mongoConnect } from "./utils/database";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import { router as dataRoutes } from "./routes/dataRoutes";
import { router as authRoutes } from "./routes/authRoutes";
const app = express();
app.use(compression());
// app.use(cors());
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
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:6006",
    "https://portfolio-3jqf.onrender.com",
    "https://ralph.es"
];
app.use("/auth", cors({
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
    credentials: true
}));
app.use("/data", cors());
app.use("/auth", authRoutes);
app.use("/data", dataRoutes);
mongoConnect(() => {
    app.listen(process.env.PORT || 3000);
});
