import { useAuth } from "../../utils/FirebaseContext";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;
