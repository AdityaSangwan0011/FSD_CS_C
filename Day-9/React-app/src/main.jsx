import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Marks from "./Marks.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App a1={"aditya sangwan"} a2={"adityasangwan@gmail.com"} a3={7982683629} />
    <Marks m1={87} m2={85} m3={80} />
  </StrictMode>
);
