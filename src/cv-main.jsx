import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CV from "./CV.jsx";

createRoot(document.getElementById("cv-root")).render(
  <StrictMode>
    <CV />
  </StrictMode>
);
