import { createRoot } from "react-dom/client";
import "./assets/global.css";
import { StrictMode } from "react";
// import LoginPage from "./pages/auth/LoginPage";
import RouterConfig from "./lib/router/RouterConfig";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
      <RouterConfig />
  {/* <LoginPage /> */}
    
  </StrictMode>,
);
