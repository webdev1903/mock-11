import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { login } = useSelector((store) => store.auth);
  if (!login) {
    return <Navigate to="/signin" />;
  }
  return children;
}
