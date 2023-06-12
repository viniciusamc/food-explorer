import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";
import { AddMeal } from "../pages/AddMeal";
import { Details } from "../pages/Details";
import { EditMeal } from "../pages/EditMeal";
import { Navigate } from "react-router-dom";

export function AppRoutes() {
  function handleAdmin() {
    const admin = localStorage.getItem("@explorer:user");
    if (admin.role === "user") {
      return false;
    }
    return true;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route
        path="/addmeal"
        element={handleAdmin() ? <AddMeal /> : <Navigate to="/" />}
      />
      <Route
        path="/edit/:id"
        element={handleAdmin() ? <EditMeal /> : <Navigate to="/" />}
      />
    </Routes>
  );
}
