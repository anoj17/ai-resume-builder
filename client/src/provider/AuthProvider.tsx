import { useState, type ReactNode } from "react";
import AuthContext from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const authData = localStorage.getItem("isAuthenticated");
  const [isAuthenticated, setIsAuthenticated] = useState(authData === "true");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
