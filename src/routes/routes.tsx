import { Routes, Route } from "react-router-dom";

import { Augusto, Home, Igor } from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/igo" element={<Igor />} />
      <Route path="/augusto" element={<Augusto />} />
    </Routes>
  );
};

export default AppRoutes;
