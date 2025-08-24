import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../modules/shared/Layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Spinner />;
  if (!user)
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;

  return children;
};

export default ProtectedRoute;

/* import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../modules/shared/Layout/Spinner";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // console.log(user, "ProtectedRoute.jsx", 6);
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/auth/signin"></Navigate>;

  return children;
};

export default ProtectedRoute; */
