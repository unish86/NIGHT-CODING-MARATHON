import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
=======

>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InterviewPrep from "./pages/InterviewPrep";

const App = () => {
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interview/:id"
          element={
            <ProtectedRoute>
              <InterviewPrep />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
=======
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interview/:id" element={<InterviewPrep />} />
    </Routes>
>>>>>>> f7e936b7c1352b3a4b0000364b491be6050fddb4
  );
};

export default App;
