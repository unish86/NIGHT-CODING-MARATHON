<<<<<<< HEAD
// utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:9001",
=======
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:9000",
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
  headers: {
    "Content-Type": "application/json",
  },
});

<<<<<<< HEAD
// ✅ This interceptor runs before every request and attaches the token
=======
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or wherever you store it
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
<<<<<<< HEAD
  (error) => Promise.reject(error)
=======
  (error) => Promise.reject(error),
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
);

export default axiosInstance;
