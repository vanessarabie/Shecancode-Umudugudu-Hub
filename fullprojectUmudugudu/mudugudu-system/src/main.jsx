import React from "react";
import ReactDOM from "react-dom/client";
import { ToasterComponent } from "./Components/Toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from './Components/Pages/login'
import Signup from './Components/Pages/signup'
import ResetEmail from "./Components/Pages/ResetEmail.jsx";
import AdminDashboard from "./Components/Pages/AdminDashboard.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <ToasterComponent />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/reset-email" element={<ResetEmail />} />
        {/* <Route exact path="/login" element={<Login />} /> */}
        
        {/* <Route exact path="/Admin_dashboard" element={<AdminDashboard />} /> */}
        
      </Routes>
    </Router>
  </React.StrictMode>
);