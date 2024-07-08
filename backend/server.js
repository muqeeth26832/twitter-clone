import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.listen(8000, () => {
  console.log(`Server is running on port ${PORT}`);
  connectMongoDB();
});
