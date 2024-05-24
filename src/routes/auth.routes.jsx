import { Routes, Route } from "react-router-dom";

import { SingIn } from "../pages/auth/SignIn";
import { SingUp } from "../pages/auth/SingUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/Register" element={<SingUp />} />
    </Routes>
  );
}
