import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import SignUp from "../pages/signup";
import SignIn from "../pages/signin";
import PrivateRoute from "./privateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}>
        SignUp
      </Route>
      <Route path="/signin" element={<SignIn />}>
        SignIn
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        Dashboard
      </Route>
    </Routes>
  );
}
