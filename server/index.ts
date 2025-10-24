import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./router/auth-routes";
import resumeRouter from "./router/resume-routes";

const app = express();

dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    // credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/v1/auth", authRouter);
app.use("/api/v1", resumeRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
