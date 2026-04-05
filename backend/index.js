//! create an express server and check if it's working

import express from "express";
import cors from "cors"; // cross origin resource sharing (browser blocks the request which comes from anywhere but localhost:8000)
// 1) we are importing express module which we installed using npm i

import userRoutes from "./routes/auth-route.js";
<<<<<<< HEAD
import sessionRoutes from "./routes/session-route.js";
import aiRoutes from "./routes/ai-route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./.env" });
=======
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4

// 2) call/invoke the function
let app = express(); // object = {listen}

app.use(
  cors({
<<<<<<< HEAD
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
=======
    origin: "http://localhost:5173",
  }),
);

app.use(express.urlencoded({ extended: true }));// this 
app.use(express.json());

app.use("/api/auth", userRoutes); // http://localhost:9001/api/auth/signup

// 3) assign a port number to our server
app.listen(9001, () => {
  console.log("Server Started.....");
});
// app.listen(PORT_NUMBER, callback)

//! to check if the server is running, in cmd(git bash), goto backend folder and type "npx nodemon index.js"
// open browser -> localhost:PORT_NUMBER and press enter

// https://nodejs.org/en/ (/) =>  this is base url
// https://nodejs.org/en/blog => /blog is one endpoint
// https://nodejs.org/en/download

// https://github.com/Sarvesh-1999/NIGHT-CODING-MARATHON
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
