import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authData = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    setIsAuthenticated(authData === "true");
  }, [authData]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
