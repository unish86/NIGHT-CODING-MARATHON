//! create an express server and check if it's working

import express from "express";
import cors from "cors"; // cross origin resource sharing (browser blocks the request which comes from anywhere but localhost:8000)
// 1) we are importing express module which we installed using npm i

import userRoutes from "./routes/auth-route.js";
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./.env" });

// 2) call/invoke the function
let app = express(); // object = {listen}

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
  })
);

app.use(express.urlencoded({ extended: true })); // this
app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/ai", aiRoutes);

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

// 3) assign a port number to our server
const PORT = process.env.PORT || 9001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
