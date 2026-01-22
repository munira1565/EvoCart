import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import authRoutes from "./src/routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("EvoCart Backend Running 🚀");
});

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgGreen.white);
});
