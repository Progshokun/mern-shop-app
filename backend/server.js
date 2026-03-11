import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/product.route.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://mern-shop-app-rosy.vercel.app",
  }),
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", router);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
