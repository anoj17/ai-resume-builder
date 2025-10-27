import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./pages/Layout"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ResumeBuilder = lazy(() => import("./pages/ResumeBuilder"));
const Preview = lazy(() => import("./pages/Preview"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ProtectedRoute = lazy(() => import("./protectedRoute/ProtectedRoute"));
const AccessDenied = lazy(() => import("./pages/AccessDenied"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="builder/:resumeId" element={<ResumeBuilder />} />
          <Route path="builder" element={<ResumeBuilder />} />
        </Route>
        <Route path="/access-denied" element={<AccessDenied />} />
        <Route path="/view/:resumeId" element={<Preview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
