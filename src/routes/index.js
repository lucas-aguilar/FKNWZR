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
      <Route path="/inicio" element={<Dashboard />} />
      <Route path="/instrucoes" element={<Instructions />} />
      <Route path="/desafio" element={<Challenge />} />
      <Route path="/resultado" element={<Result />} />
    </Routes>
  );
}
