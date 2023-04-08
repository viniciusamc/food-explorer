import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { AddMeal } from "../pages/AddMeal";
import { ShowMeal } from "../pages/ShowMeal";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addmeal" element={<AddMeal />} />
      <Route path="/showmeal" element={<ShowMeal />} />
    </Routes>
  );
}
