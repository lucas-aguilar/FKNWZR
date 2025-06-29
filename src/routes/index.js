import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Challenge from "../pages/Challenge";
import Dashboard from "../pages/Dashboard";
import Instructions from "../pages/Instructions";
import Result from "../pages/Result";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/start" element={<Dashboard />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/challenge" element={<Challenge />} />
      <Route path="/results" element={<Result />} />
    </Routes>
  );
}
