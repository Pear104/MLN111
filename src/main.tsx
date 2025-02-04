import { createRoot } from "react-dom/client";
import "./index.css";
import "./animation.css";
import App from "./MainRoutes.tsx";
import { BrowserRouter } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);
