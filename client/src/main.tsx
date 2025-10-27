import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./provider/AuthProvider.tsx";
import { TitleProvider } from "./provider/TitleProvider.tsx";

const queryClient = new QueryClient();

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <TitleProvider>
              <App />
            </TitleProvider>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer />
    </GoogleOAuthProvider>
  </StrictMode>
);
