import { useContext, type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated } = useContext(AuthContext);
  console.log({ isAuthenticated });
  if (!isAuthenticated) {
    return <Navigate to="/access-denied" replace />;
  }

  return <>{children}</>;
}
