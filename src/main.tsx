import { createRoot } from "react-dom/client";
import "./assets/global.css";
import { StrictMode } from "react";
// import LoginPage from "./pages/auth/LoginPage";
import RouterConfig from "./lib/router/RouterConfig";
import AuthProvider from "./lib/providers/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
  </StrictMode>,
);
