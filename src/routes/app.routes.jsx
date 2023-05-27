import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { AddMeal } from "../pages/AddMeal";
import { Details } from "../pages/Details";
import { EditMeal } from "../pages/EditMeal";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addmeal" element={<AddMeal />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/edit/:id" element={<EditMeal />} />
    </Routes>
  );
}
