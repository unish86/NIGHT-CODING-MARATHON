import express from "express";

import { loginUser, registerUser } from "../controller/auth-controller.js";

const router = express.Router();

// Auth Routes
router.post("/signup", registerUser); // Register User
<<<<<<< HEAD
=======

>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
router.post("/login", loginUser); // Login User

export default router;
